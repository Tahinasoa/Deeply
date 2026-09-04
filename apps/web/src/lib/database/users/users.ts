import { sql } from "@/lib/database/shared";
import camelcaseKeys from 'camelcase-keys'
import bcrypt from 'bcryptjs'
import { nanoid } from 'nanoid'
import { type User, zUser, type UnsafeUser, zUnsafeUser } from "@/types/user-session";

export async function getUser(
  key: { userId: number } | { username: string } | {id : string}
): Promise<User | null> {

  const condition =
    "userId" in key
      ? sql`id = ${key.userId}`
      :
      "username" in key ?
        sql`username = ${key.username}`
        : sql`public_id = ${key.id}`;

  const user = (
    await sql`
      SELECT public_id, username, full_name, role, created_at
      FROM users
      WHERE ${condition}
      LIMIT 1
    `
  )[0];

  if (!user) {
    return null;
  }

  const parsedUser = zUser.safeParse(camelcaseKeys(user)); //make sure to convert snake_case into camelCase

  if (!parsedUser.success) {
    throw new Error(
      "User data retrieved from the database does not match the expected schema"
    );
  }

  return parsedUser.data;
}
export async function getUnsafeUser(
  key: { userId: number } | { username: string } | {id : string}
): Promise<UnsafeUser | null> {

  const condition =
    "userId" in key
      ? sql`id = ${key.userId}`
      :
      "username" in key ?
        sql`username = ${key.username}`
        : sql`public_id = ${key.id}`;

  const user = (
    await sql`
      SELECT id,public_id, username, full_name, role, password_hash,created_at
      FROM users
      WHERE ${condition}
      LIMIT 1
    `
  )[0];

  if (!user) {
    return null;
  }

  const parsedUser = zUnsafeUser.safeParse(camelcaseKeys(user)); //make sure to convert snake_case into camelCase

  if (!parsedUser.success) {
    throw new Error(
      "User data retrieved from the database does not match the expected schema"
    );
  }

  return parsedUser.data;
}

export async function createUser({
  username,
  role,
  fullName,
  password
}: {
  username: string;
  role: "student" | "teacher";
  fullName: string;
  password: string;
}): Promise<{id:string}> {
  const existingUser = await getUser({ username });
  if (existingUser) {
    throw new Error("The provided username is not available");
  }

  const passwordHash = await bcrypt.hash(password, 10);
  const id = nanoid();
  try {
    await sql`INSERT INTO users
    (public_id, username, full_name, role, password_hash)
    VALUES (${id}, ${username}, ${fullName},${role},${passwordHash})`;
  }
  catch (err) {
    if(isUniqueViolation(err)){
    throw new Error("The provided username is not available");
    }
    throw new Error("Failed to create user", {cause : err}) ;
  }
  return {id} ;
}


export function isUniqueViolation(err: unknown): boolean {
  return (
    typeof err === "object" &&
    err !== null &&
    "code" in err &&
    err.code === "23505" // Postgres: unique_violation
  );
}