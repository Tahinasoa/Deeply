// src/lib/auth/authorize-user.test.ts
import { describe, it, test, expect, vi, beforeEach } from "vitest"
import { authorizeUser } from "./authorizeUser"
import { getUnsafeUser } from "@/lib/database/users/users"
import bcrypt from "bcryptjs"


vi.mock(import("@/lib/database/users/users"))
vi.mock(import("bcryptjs")) ;

beforeEach(()=>{
    vi.resetAllMocks() ;
}) ;

describe("authorizeUser", () => {
    test.each([
        ["empty credential", {}],
        ["incomplete - missing password", { username: "username" }],
        ["incomplete - missing username", { password: "pwd" }],
        ["incorrectly typed - username as number", { username: 123, password: "pwd" }],
        ["incorrectly typed - password as number", { username: "username", password: 654 }],
    ] as const)("case: %s", async (msg, cred) => {
        const result = await authorizeUser(cred)
        expect(result).toBeNull() ;
        expect(getUnsafeUser).not.toHaveBeenCalled() ;
    }) ;

    it("return null if user doesn't exists", async () => {
        vi.mocked(getUnsafeUser).mockResolvedValue(null);
        const result = await authorizeUser({ username: "bob", password: "pwd" })
        expect(result).toBeNull() ;
        expect(getUnsafeUser).toHaveBeenCalledTimes(1) ;
        expect(bcrypt.compare).not.toHaveBeenCalled() ;
    }) ;

    it("return null if password doesn't match", async () => {
        vi.mocked(getUnsafeUser).mockResolvedValue({ pwdhash: "hash" } as any)
        vi.mocked(bcrypt.compare).mockResolvedValue(false as never);
        const result = await authorizeUser({ username: "bob", password: "wrong" })
        expect(result).toBeNull()
    }) ;

    it("return a user is everythings get correct", async () => {
        const fakeUser = { publicId: "abc", username: "bob", fullName: "Bob", role: "student", createdAt: new Date(), pwdhash: "hash" }
        vi.mocked(getUnsafeUser).mockResolvedValue(fakeUser as any)
        vi.mocked(bcrypt.compare).mockResolvedValue(true as never)

        const result = await authorizeUser({ username: "bob", password: "correct" })
        expect(result).toMatchObject({ id: "abc", username: "bob" })
    })
})