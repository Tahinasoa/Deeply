import { z } from 'zod';
import { getUnsafeUser } from '../database/users/users';
import bcrypt from 'bcryptjs';
import { zUser } from '@/types/user-session';

export async function authorizeUser(credentials:unknown) {
  const zCredentials = z.object(
    {
      username: z.string(),
      password: z.string()
    }
  );

  const parsedCredentials = zCredentials.safeParse(credentials);
  if (parsedCredentials.success) {
    const { username, password } = parsedCredentials.data;
    try {
      const unsafeUser = await getUnsafeUser({ username });
      if (!unsafeUser) {
        return null;
      }
      const pwdMatch = await bcrypt.compare(password, unsafeUser.pwdhash);
      if (!pwdMatch) {
        return null;
      }
      else {
        const user = zUser.parse(unsafeUser);
        return { id: user.publicId, ...user };
      }
    }
    catch (err) {
      throw new Error("Database error");
    }
  }
  return null;
}