import { DefaultSession} from "next-auth"
import { JWT as DefaultJWT } from "next-auth/jwt"
import {User as MyUser} from "./types/user-session"

declare module "next-auth" {
  interface User extends MyUser{}
  interface Session{
    user : MyUser
  }

}