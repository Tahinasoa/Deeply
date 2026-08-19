import { sql } from  "@/lib/database/shared";
import { type User } from "@/types/user-session";

export async  function getUser(userId:number):Promise<User|null>{
    const user = (await sql`SELECT name from users where id=${userId}` )[0];
    return user?.name ;
}