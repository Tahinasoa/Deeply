// src/auth.d.ts
import type { User as MyUser } from "./types/user-session"

declare module "next-auth" {
    interface User extends MyUser { }
    interface Session {
        user: MyUser
    }
}

declare module "next-auth/jwt" {
    interface JWT {
        publicId: string
        username: string
        fullName: string
        role: 'teacher' | 'student' | 'admin'
        createdAt: Date
    }
}