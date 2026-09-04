import { z } from 'zod'

export const zUser = z.object({
    id: z.string(),
    username: z.string(),
    fullName: z.string(),
    role: z.literal(["teacher", "student", "admin"]),
    createdAt: z.coerce.date()
});

export type User = z.infer<typeof zUser>;

export const zUnsafeUser = zUser.extend({
    id: z.string(),
    passwordHash: z.string()
});
export type UnsafeUser = z.infer<typeof zUnsafeUser>;