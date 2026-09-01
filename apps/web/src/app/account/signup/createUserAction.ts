"use server";

import { createUser } from "@/lib/database/users/users";
import { redirect } from "next/navigation";

export async function createUserAction(prevState: unknown, formData: FormData) {
    if (!formData) return null;

    const role:"teacher"|"student" = formData.get('role')==="teacher" ? "teacher" : "student" ;
    const username = formData.get("username") as string;
    const fullName = formData.get("full_name") as string ;
    const password = formData.get("password") as string ;
    const timestamp = Date.now() ;
    const data = {role,username,fullName,password,timestamp} ;
    
    try {
        await createUser(data) ;
    }
    catch (error) {
        if(error instanceof Error){
            return {...data, error : error.message} ;
        }
        else {
            return {...data, error : "unknown error"} ;
        }
    }

    // succès
    redirect("/account/login");
}