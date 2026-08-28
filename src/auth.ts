import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
import Credentials from 'next-auth/providers/credentials';
import { getUnsafeUser } from "@/lib/database/users/users";
import { z } from "zod"
import bcrypt from 'bcryptjs';
import { zUser } from './types/user-session';

export const { handlers,auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [Credentials({
    async authorize(credentials) {
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
  }
  )
  ],
  callbacks : {
    async jwt({token,user}){
      if(user){
        token.sub = user.publicId ;
        token.ro
        token = {...token, ...user} ;
      }
      return token ;
    },
    async session({session, token}){
      session = {...session, ...token} ;
      return session ;
    }
  }
}
);