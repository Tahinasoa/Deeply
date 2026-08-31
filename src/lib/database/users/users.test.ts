import { describe, it, expect, vi } from "vitest"
import { createUser, getUser, isUniqueViolation } from "./users"
import bcrypt from "bcryptjs"
import { sql } from "../shared"
vi.mock(import("@/lib/database/shared"))


describe("isUniqueViolation", () => {
  it("returns true for Postgres unique violation code", () => {
    expect(isUniqueViolation({ code: "23505" })).toBe(true)
  })

  it("returns false for other error codes", () => {
    expect(isUniqueViolation({ code: "23503" })).toBe(false)
  })

  it("returns false for non-object errors", () => {
    expect(isUniqueViolation("some string error")).toBe(false)
    expect(isUniqueViolation(null)).toBe(false)
    expect(isUniqueViolation(undefined)).toBe(false)
  })

  it("returns false for objects without a code property", () => {
    expect(isUniqueViolation({ message: "oops" })).toBe(false)
  })
}) ;

//TODO test all user/account functions.