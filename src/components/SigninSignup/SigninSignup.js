'use client';

import React from 'react'
import Link from "next/link";
import { useUser } from '@auth0/nextjs-auth0/client';

export default function SigninSignup() {

    const { isLoading, error, user } = useUser();

    if (isLoading) return <div>Loading...</div>;

    if (error) return <div>{error.message}</div>;

    return (
        <>
            {user ? (
                <Link href="/api/auth/logout" className="rounded-md bg-emerald-500 px-4 py-2 text-white hover:bg-emerald-600">Logout</Link>
            ) : (
                <>
                    <Link href="/api/auth/login" className="rounded-md bg-emerald-500 px-4 py-2 text-white hover:bg-emerald-600">Login</Link>
                    <Link href="/api/auth/signup" className="rounded-md bg-emerald-500 px-4 py-2 text-white hover:bg-emerald-600">Signup</Link>
                </>
            )}
        </>
    )
}
