import React from 'react'
import Head from 'next/head'
import "@/styles/globals.css";
import { ChatSidebar } from '@/components/ChatSidebar';
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function ChatPage({ chatId, title, messages = [] }) {

    console.log("props: ", title, messages);
    const [newChatId, setNewChatId] = useState(null);
    const [incomingMessage, setIncomingMessage] = useState("");
    const [messageText, setMessageText] = useState("");
    const [newChatMessages, setNewChatMessages] = useState([]);
    const [generatingResponse, setGeneratingResponse] = useState(false);
    const [fullMessage, setFullMessage] = useState("");
    const [originalChatId, setOriginalChatId] = useState(chatId);
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Message sent: ", messageText);
    };

    return (
        <>
            <Head>
                <title>New Chat</title>
            </Head>

            <div className="grid h-screen grid-cols-[260px_1fr]">
                <ChatSidebar />
                <div className='bg-gradient-to-r from-blue-200 to-blue-500 flex flex-col'>
                    <div className='flex-1'>Chat Window</div>
                    <footer className='bg-gray-800 p-10 text-white'>
                        <form onSubmit={handleSubmit}>
                            <fieldset className="flex gap-2" disabled={generatingResponse}>
                                <textarea
                                    value={messageText}
                                    onChange={(e) => setMessageText(e.target.value)}
                                    placeholder={generatingResponse ? "" : "Send a message..."}
                                    className="w-full resize-none rounded-md bg-blue-400 p-2 text-white focus:border-emerald-500 focus:bg-gray-600 focus:outline focus:outline-emerald-500"
                                />
                                <button type="submit" className="btn">
                                    Send
                                </button>
                            </fieldset>
                        </form>
                    </footer>
                </div>
            </div>
        </>
    )
}
