"use client";

import Head from 'next/head';
import Link from "next/link";
import { useUser } from "@auth0/nextjs-auth0/client";

export default function Home() {

  const { isLoading, error, user } = useUser();

  if (isLoading) return <div>Loading...</div>;

  if (error) return <div>{error.message}</div>;

  return (
    <div>
      <Head>
        <title>chatGPT - Clone</title>
      </Head>
      <h1>Welcome to Chat Home Page</h1>
      {user ? (
        <>
          <p>You are logged in as: {user.email}</p>
          <Link href="/api/auth/logout">Logout</Link>
        </>
      ) : (
        <Link href="/api/auth/login">Login</Link>
      )}
    </div>
  );
}
