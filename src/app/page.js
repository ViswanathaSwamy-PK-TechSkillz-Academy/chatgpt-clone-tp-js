"use client";

import Link from "next/link";
import { useUser } from "@auth0/nextjs-auth0/client";

export default function Home() {

  const { isLoading, error, user } = useUser();

  if (isLoading) return <div>Loading...</div>;

  if (error) return <div>{error.message}</div>;

  return (
    <>
      <head>
        <title>ChatGPT - Login or Sign Up</title>
      </head>
      <div className="flex justify-center items-center min-h-screen w-full bg-blue-400 text-white text-center">
        <div className="m-auto">
          {user ? (
            <Link href="/api/auth/logout">Logout</Link>
          ) : (
            <>
              <Link href="/api/auth/login" className="rounded-md bg-emerald-500 px-4 py-2 text-white hover:bg-emerald-600">Login</Link>
              <Link href="/api/auth/login" className="rounded-md bg-emerald-500 px-4 py-2 text-white hover:bg-emerald-600">Signup</Link>
            </>
          )}
        </div>
      </div>
    </>
  );
}
