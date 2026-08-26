'use server'

import { getUnsafeUser } from "@/lib/database/users/users";
import bcrypt from "bcryptjs";

export async function loginAction(prevState: unknown, form: FormData) {
    const username = form.get("username") as string;
    const password = form.get("password") as string;
    const timestamp = Date.now();
    const data = { username, password, timestamp }

    try {
        const user = await getUnsafeUser({ username });
        if (!user) {
            return { ...data, error: "Provided Username and password doesn't match to an existing account" };
        }
        const pwdMatch = await bcrypt.compare(password, user.pwdhash);
        if (!pwdMatch) {
            return { ...data, error: "Provided Username and password doesn't match to an existing account" }
        }
        else {
            return { ...data, error: "you sign in successfully" };
        }
    }
    catch (err) {
        if (err instanceof Error) {
            return { ...data, error: err.message };
        }
        else {
            return { ...data, error: "unknown erro" };
        }
    }

}