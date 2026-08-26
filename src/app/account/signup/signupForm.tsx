'use client'

import type { ComponentProps } from "react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { CircleAlert, Eye, EyeOff, Loader2 } from "lucide-react"

import { Input } from "@/components/ui/input"
import { Field, FieldDescription, FieldGroup, FieldLabel } from "@/components/ui/field"
import Link from "next/link"
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group"
import { useActionState, useState } from "react"
import { createUserAction } from "./createUserAction"
import { timeStamp } from "console"

export default function SignupForm({
    className,
    ...props
}: ComponentProps<"div">) {
    const [showPwd, setShowPwd] = useState<boolean>(false);
    const [state, formAction, isPending] = useActionState(createUserAction, null);
    const formKey = state?.timestamp || 'initial' ; //this is use to define an key so component is remounted after each submit.

    function handleTooglePwdVisibility() {
        setShowPwd(!showPwd);
    }

    return (
        <div className={cn("flex flex-col gap-6", className)} {...props}>
            <Card>
                <CardHeader>
                    <CardTitle>Create your account</CardTitle>
                </CardHeader>
                <CardContent>
                    <form key={formKey} action={formAction}>
                        <FieldGroup>
                            <Field>
                                <FieldLabel>Role</FieldLabel>
                                <div className="flex items-center gap-4">
                                    <div className="flex items-center gap-2">
                                        <Input
                                            id="student_role"
                                            type="radio"
                                            name="role"
                                            value="student"
                                            defaultChecked={state?.role !== 'teacher'}
                                            required
                                        />
                                        <FieldLabel htmlFor="student_role">Student</FieldLabel>
                                    </div>

                                    <div className="flex items-center gap-2">
                                        <Input
                                            id="teacher_role"
                                            type="radio"
                                            name="role"
                                            value="teacher"
                                            defaultChecked={state?.role === 'teacher'}
                                            required
                                        />
                                        <FieldLabel htmlFor="teacher_role">Teacher</FieldLabel>
                                    </div>
                                </div>
                            </Field>
                            <Field>
                                <FieldLabel htmlFor="username">Pseudo *</FieldLabel>
                                <Input
                                    id="username"
                                    name="username"
                                    type="text"
                                    placeholder="Pseudo"
                                    defaultValue={state?.username}
                                    required
                                />
                            </Field>
                            <Field>
                                <FieldLabel htmlFor="full_name">Full Name *</FieldLabel>
                                <Input
                                    id="full_name"
                                    name="full_name"
                                    type="text"
                                    placeholder="Full Name"
                                    defaultValue={state?.fullName}
                                    required
                                />
                            </Field>
                            <Field>
                                <FieldLabel htmlFor="password">Password *</FieldLabel>
                                <InputGroup>
                                    <InputGroupInput
                                        type={showPwd ? "text" : "password"}
                                        id="password"
                                        name="password"
                                        defaultValue={state?.password}
                                        required
                                        placeholder="Password"
                                    />
                                    <InputGroupAddon align="inline-end">
                                        <button
                                            type="button"
                                            onClick={handleTooglePwdVisibility}
                                            aria-label={showPwd ? "Hide password" : "Show password"}
                                        >
                                            {showPwd ? <EyeOff /> : <Eye />}
                                        </button>
                                    </InputGroupAddon>
                                </InputGroup>
                            </Field>
                            {state?.error ? (
                                <div className="flex items-center gap-2 rounded-md border border-destructive/50 bg-destructive/10 px-3 py-2 text-sm text-destructive">
                                    <CircleAlert className="h-4 w-4 shrink-0" />
                                    <span>{state.error}</span>
                                </div>
                            ) : null}
                            <Field>
                                <div className="relative flex items-center justify-center">
                                    <Button
                                        disabled={isPending}
                                        type="submit"
                                        className="w-full"
                                    >
                                        Create an account
                                    </Button>
                                    {isPending ? (
                                        <Loader2 className="absolute h-5 w-5 animate-spin" />
                                    ) : null}
                                </div>
                                <FieldDescription className="text-center">
                                    You already have an account <Link href="/account/signin">Sign in</Link>
                                </FieldDescription>
                            </Field>
                        </FieldGroup>
                    </form>
                </CardContent>
            </Card>
        </div>
    )
}