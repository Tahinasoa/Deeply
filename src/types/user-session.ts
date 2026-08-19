import {z} from 'zod'

const zUser = z.object({
    public_id : z.string() ,
    username : z.string(),
    full_name : z.string() ,
    role : z.literal(["teacher", "student", "admin"]) ,
    createdAt : z.coerce.date()
}) ;

export type User = z.infer<typeof zUser> ;