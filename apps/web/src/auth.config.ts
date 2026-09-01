import type { NextAuthConfig } from 'next-auth';
export const authConfig = {
    session: { strategy: "jwt" },
    pages: {
        signIn: '/account/login',
    },
    providers : []
} satisfies NextAuthConfig;