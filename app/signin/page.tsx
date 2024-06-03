'use client';

import React from 'react';
import {Loader2, Unlock} from "lucide-react";
import {redirect} from "next/navigation";
import {useSession} from "@/hooks/useSession";
import {Button} from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

const SignInPage = () => {
    const {status, session} = useSession();

    if (status === "pending") {
        return (
            <div
                className="flex flex-col items-center justify-center h-screen"
            >
                <Loader2
                    className="w-5 h-5 text-blue-500 animate-spin"
                />
            </div>
        )

    }

    if (session) {
        redirect("/")
    }
    return (
        <div className="w-full lg:grid min-h-screen lg:grid-cols-2">
            <div className="flex items-center justify-center py-12">
                <div className="mx-auto grid w-[350px] gap-6">
                    <div className="grid gap-2 text-center">
                        <h1 className="text-3xl font-bold">Welcome back!</h1>
                        <p className="text-balance text-muted-foreground">
                            Sign in to your account
                        </p>
                    </div>
                    <div className="grid gap-4">
                        <Button variant="outline" className="w-full" asChild>
                            <Link href="/api/auth/signin">
                                Login
                                <Unlock className="size-4 ml-2"/>
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
            <div className="hidden bg-muted lg:flex items-center justify-center">
                <Image
                    src="/placeholder.svg"
                    alt="Image"
                    width="500"
                    height="500"
                    className="h-50 w-50 object-cover dark:brightness-[0.2] dark:grayscale"
                />
            </div>
        </div>
    );
};

export default SignInPage;