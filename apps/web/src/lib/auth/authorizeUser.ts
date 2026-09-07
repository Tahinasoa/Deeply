import { z } from 'zod';
import { getPasswordHash, getUser } from '../database/users/users';
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
        const user = await getUser({ username });
      if (!user) {
        return null;
      }

      const pwdHash = await getPasswordHash(user.id);
      const pwdMatch = await bcrypt.compare(password, pwdHash) ;
      if (!pwdMatch) {
        return null;
      }
      else {
        return zUser.parse(user);
      }
    }
    catch (err) {
      throw new Error("Database error");
    }
  }
  return null;
}