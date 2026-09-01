import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import type {} from 'next-auth/jwt';
import { authConfig } from './auth.config';
import { authorizeUser } from './lib/auth/authorizeUser';
import { jwtCallback, sessionCallback } from './lib/auth/callbacks';

export const { handlers, auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      authorize: authorizeUser,
    }),
  ],
  callbacks: {
    jwt: jwtCallback,
    session: sessionCallback,
  },
});
