'use client'

import Image from "next/image"
import Link from "next/link"
import { FiArrowLeft } from "react-icons/fi"
import ChatSidePanel from "./side-panel"

function ChatPage() {
    return (
        <>
            <div className="bg-gray-100 h-full hidden sm:flex flex-col items-center justify-center">
                <Image src="/image/icon/welcome.svg" alt="" width={250} height={250} />
                <p className="mt-4 text-gray-600 text-center">
                    Welcome to the chat page!
                </p>
            </div>

            <div className="sm:hidden flex flex-col h-screen">
                <div className="p-3">
                    <div className="flex items-center gap-2">
                        <Link href="/account/my-account">
                            <FiArrowLeft size={20} />
                        </Link>
                        <span className="text-lg font-semibold">Chat</span>
                    </div>
                </div>
                <div className="flex-grow">
                    <ChatSidePanel />
                </div>
            </div>
        </>
    )
}


export default ChatPage
