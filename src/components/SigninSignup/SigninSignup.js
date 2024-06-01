'use client';

import React from 'react'
import Link from "next/link";
import { useUser } from '@auth0/nextjs-auth0/client';
import { useEffect, useState } from 'react';

export default function SigninSignup() {

    const { isLoading, error, user } = useUser();
    const [session, setSession] = useState(null);

    useEffect(() => {
        const fetchSession = async () => {
            const res = await fetch('/api/session');
            const data = await res.json();
            setSession(data);
        };

        fetchSession();
    }, []);


    useEffect(() => {
        console.log('inside useEffect() :: Session: ', session);
        // alert(JSON.stringify(session));
        // alert(' User: ', session?.user);

        if (session !== null && session.user !== null && session.user !== undefined) {
            window.location.href = '/chat';
        }
    }, [session]);

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
