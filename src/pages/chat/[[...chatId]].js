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
                <div className='bg-blue-900 text-white'>
                    Sidebar
                </div>
                <div className='bg-gradient-to-r from-blue-200 to-blue-500 flex flex-col'>
                    <div className='flex-1'>Chat Window</div>
                    <footer className='bg-gray-800 p-10'>Chat Input</footer>
                </div>
            </div>
        </>
    )
}
