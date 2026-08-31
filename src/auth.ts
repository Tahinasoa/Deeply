import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
import Credentials from 'next-auth/providers/credentials';
import { getUnsafeUser } from "@/lib/database/users/users";
import { z } from "zod"
import bcrypt from 'bcryptjs';
import { zUser, type User } from './types/user-session';
import type {} from "next-auth/jwt"

export const { handlers, auth, signIn, signOut } = NextAuth({
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
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.publicId = user.publicId;
        token.username = user.username;
        token.fullName = user.fullName;
        token.role = user.role;
        token.createdAt = user.createdAt;
      }
      return token;
    },

    async session({ session, token }) {
      const user: User = {
        publicId: token.publicId,
        username: token.username,
        fullName: token.fullName,
        role: token.role,
        createdAt: token.createdAt
      };
      session.user = { id: user.publicId, email: user.username, emailVerified: null, ...user };
      return session;
    }
  }
}
);