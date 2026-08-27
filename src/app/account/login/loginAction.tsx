'use server'

import { signIn } from "@/auth";
import { AuthError } from "next-auth";
import { redirect } from "next/navigation";


export async function loginAction(prevState: unknown, form: FormData) {
    const username = form.get("username") as string;
    const password = form.get("password") as string;
    const timestamp = Date.now();
    const data = { username, password, timestamp }

    try {
        await signIn("credentials", { ...data, redirect: false });
    }
    catch (err) {
        if (err instanceof AuthError) {
            switch (err.type) {
                case "CredentialsSignin":
                    return { ...data, error: "Provided Username and password doesn't match to an existing account" } ;
                default:
                    return { ...data, error: "An error occured during connection" } ;
            }
        }
        else{
            return {...data, error : "An error occured during connection"} ;
        }
    }
    redirect("/");
}