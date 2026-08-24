import { sql } from "@/lib/database/shared";
import { type User } from "@/types/user-session";

export async function getUser(userId: number): Promise<User | null> {
    const user = (await sql`SELECT name from users where id=${userId}`)[0];
    return user?.name;
}
export async function getUserByName(userName : number) : Promise<User | null>{
    const user = (await sql`SELECT `)[0] ;
}

export async function createUser({
  pseudo,
  role,
  fullName,
  password,
  timestamp
}: {
  pseudo: string;
  role: "STUDENT" | "TEACHER";
  fullName: string;
  password: string;
  timestamp : number
}): Promise<boolean> {
  return true;
}
