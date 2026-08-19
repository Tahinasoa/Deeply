'use client'

import type { ComponentProps } from "react" // FIX 1: import manquant pour React.ComponentProps

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Eye, EyeOff, Loader2 } from "lucide-react"

import { Input } from "@/components/ui/input"
import { Field, FieldDescription, FieldGroup, FieldLabel } from "@/components/ui/field"
import Link from "next/link"
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group"
import { useState } from "react"

export default function SignupForm({
    className,
    ...props
}: ComponentProps<"div">) {
    const [showPwd, setShowPwd] = useState<boolean>(false);
    const [formState, setFormState] = useState<"INPUT" | "PENDING">("INPUT");

    function handleTooglePwdVisibility() {
        setShowPwd(!showPwd);
    }

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault(); // FIX 6: évite le rechargement de page (submit HTML natif)
        setFormState("PENDING");
    }

    return (
        <div className={cn("flex flex-col gap-6", className)} {...props}>
            <Card>
                <CardHeader>
                    <CardTitle>Create your account</CardTitle>
                </CardHeader>
                <CardContent>
                    {/* on met le handler sur le form plutôt que sur le bouton, plus correct sémantiquement */}
                    <form onSubmit={handleSubmit}>
                        <FieldGroup>
                            <Field>
                                <FieldLabel>Role</FieldLabel>
                                <div className="flex items-center gap-4">
                                    <div className="flex items-center gap-2">
                                        <Input
                                            id="student_role"
                                            type="radio"
                                            name="role"
                                            value="STUDENT"
                                            defaultChecked
                                            required
                                        />
                                        <FieldLabel htmlFor="student_role">Student</FieldLabel>
                                    </div>

                                    <div className="flex items-center gap-2">
                                        <Input
                                            id="teacher_role"
                                            type="radio"
                                            name="role"
                                            value="TEACHER"
                                            required
                                        />
                                        <FieldLabel htmlFor="teacher_role">Teacher</FieldLabel>
                                    </div>
                                </div>
                            </Field>
                            <Field>
                                <FieldLabel htmlFor="pseudo">Pseudo *</FieldLabel>
                                <Input
                                    id="pseudo"
                                    type="text"
                                    placeholder="Pseudo"
                                    required
                                />
                            </Field>
                            <Field>
                                {/* FIX 2: htmlFor="pseudo" -> "full_name" */}
                                <FieldLabel htmlFor="full_name">Full Name *</FieldLabel>
                                <Input
                                    id="full_name"
                                    type="text"
                                    placeholder="Full Name"
                                    required
                                />
                            </Field>
                            <Field>
                                <FieldLabel htmlFor="password">Password *</FieldLabel>
                                <InputGroup>
                                    <InputGroupInput
                                        type={showPwd ? "text" : "password"}
                                        id="password" // FIX 3: id cohérent avec le htmlFor du label
                                        placeholder="Password" // FIX 4: placeholder cohérent
                                    />
                                    <InputGroupAddon align="inline-end">
                                        {/* FIX 5: icônes inversées + FIX 7: bouton accessible au clavier */}
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
                            <Field>
                                <div className="relative flex items-center justify-center">
                                    <Button
                                        disabled={formState === "PENDING"}
                                        type="submit"
                                        className="w-full"
                                    >
                                        Create an account
                                    </Button>
                                    {formState === "PENDING" ? (
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