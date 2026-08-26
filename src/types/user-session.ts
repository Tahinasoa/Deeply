import {z} from 'zod'

export const zUser = z.object({
    publicId : z.string() ,
    username : z.string(),
    fullName : z.string() ,
    role : z.literal(["teacher", "student", "admin"]) ,
    createdAt : z.coerce.date()
}) ;

export type User = z.infer<typeof zUser> ;

export const zUnsafeUser  = zUser.extend({
    id : z.string(),
    pwdhash : z.string()
})
export type UnsafeUser = z.infer<typeof zUnsafeUser> ;