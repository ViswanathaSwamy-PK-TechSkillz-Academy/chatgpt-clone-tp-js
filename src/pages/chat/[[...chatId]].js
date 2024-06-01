import React from 'react'
import Head from 'next/head'
import "@/styles/globals.css";

export default function chat() {
    return (
        <>
            <Head>
                <title>New Chat</title>
            </Head>

            <div className="grid h-screen grid-cols-[260px_1fr]">
                <div>
                    Sidebar
                </div>
                <div>
                    Chat
                </div>
            </div>
        </>
    )
}
