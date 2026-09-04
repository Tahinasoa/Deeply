import { Session, User } from "next-auth";
import { JWT } from "next-auth/jwt";


export async function jwtCallback({ token, user }: { token: JWT, user: User }) {
    if (user) {
        token.id = user.id! ;//I think this is completly safe, I made id mandatory but the original id was optional.
        token.username = user.username;
        token.fullName = user.fullName;
        token.role = user.role;
        token.createdAt = user.createdAt;
    }
    return token;
};

export async function sessionCallback({ session, token }: { session: Session, token: JWT }) {
    session.user = {
        id: token.id,
        username: token.username,
        fullName: token.fullName,
        role: token.role,
        createdAt: token.createdAt
    };
    return session;
};