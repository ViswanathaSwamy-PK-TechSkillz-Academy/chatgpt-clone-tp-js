import React from 'react'
import Head from 'next/head'

export default function chat() {
    return (
        <>
            <Head>
                <title>New Chat</title>
            </Head>

            <div className="bg-red-500 text-white p-4">Test Tailwind CSS</div>

            <div className="grid h-screen grid-cols-[260px_1fr]">
                <div className="bg-gray-200 p-4">
                    Sidebar
                </div>
                <div className="bg-gray-100 p-4">
                    Chat
                </div>
            </div>
        </>
    )
}
