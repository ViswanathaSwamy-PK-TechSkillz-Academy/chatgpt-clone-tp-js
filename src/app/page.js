import Image from "next/image";
import Head from 'next/head'
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Head>
        <title>chatGPT - Clone</title>
      </Head>
      <h1>Welcome to Chat Home Page</h1>
      <Link href="/api/auth/login">Login</Link>
    </div>
  );
}
