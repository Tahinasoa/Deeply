"use server";

import { createUser } from "@/lib/database/users/users";
import { redirect } from "next/navigation";

export async function createUserAction(prevState: unknown, formData: FormData) {
    if (!formData) return null;

    const role:"TEACHER"|"STUDENT" = formData.get('role')==="TEACHER" ? "TEACHER" : "STUDENT" ;
    const pseudo = formData.get("pseudo") as string;
    const fullName = formData.get("full_name") as string ;
    const password = formData.get("password") as string ;
    const timestamp = Date.now() ;
    const data = {role,pseudo,fullName,password,timestamp} ;


    try {
        await createUser(data) ;
    }
    catch (error) {
        
    }

    await new Promise(resolve => setTimeout(resolve, 2000));

    if (pseudo === "tax") return {...data,  error: "Tax, you can't access this page go away" };
    if (password === "1234") return {...data,  error: "I told you to make a strong password not 1234" };

    // succès
    redirect("account/login");
}