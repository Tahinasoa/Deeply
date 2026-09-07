import { z } from 'zod'

export const zUser = z.object({
    id: z.string(),
    username: z.string(),
    fullName: z.string(),
    role: z.literal(["teacher", "student", "admin"]),
    createdAt: z.coerce.date()
});

export type User = z.infer<typeof zUser>;