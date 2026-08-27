import type { NextAuthConfig } from 'next-auth';
export const authConfig = {
    pages: {
        signIn: '/account/login',
    },
    providers : []
} satisfies NextAuthConfig;