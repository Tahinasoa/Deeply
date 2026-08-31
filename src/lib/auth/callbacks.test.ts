// src/lib/auth/callbacks.test.ts
import { describe, it, expect } from "vitest"
import { jwtCallback, sessionCallback } from "./callbacks"
import { User } from "next-auth"

describe("jwtCallback", () => {
  it("copies user fields to token when user is present", async () => {
    const token = {} as any
    const user:User = { publicId: "abc", username: "bob", fullName: "Bob", role: "student", createdAt: new Date() }

    const result = await jwtCallback({ token, user })
    expect(result).toMatchObject(user) ;
  }) ;

  it("does not modify token if user is absent", async () => {
    const token = { publicId: "existing" } as any
    const result = await (jwtCallback as any )({ token })
    expect(result).toMatchObject(token) ;
  })
})

describe("sessionCallback", () => {
    it("correctly maps token to session.user", async () => {
        const token = {
            publicId: "abc",
            username: "bob",
            fullName: "Bob",
            role: "student",
            createdAt: new Date()
        } as any;
        const session = {} as any

        const result = await sessionCallback({ session, token })
        expect(result.user).toMatchObject(token);
    })
}) ;