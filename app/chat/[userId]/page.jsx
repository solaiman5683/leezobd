'use client'
import Image from "next/image";
import Link from "next/link";
import { BsFillSendFill } from "react-icons/bs";
import { FiArrowLeft } from "react-icons/fi";
import { MdOutlineAttachFile } from "react-icons/md";



function ChatPage() {
    return (
        <>
            <div className="bg-gray-100 h-full flex flex-col">
                <div className="bg-white p-4 text-sm hidden sm:block">
                    John Doe
                </div>

                <div className="p-3 sm:hidden block shadow bg-white">
                    <div className="flex items-center gap-2">
                        <Link href="/chat">
                            <FiArrowLeft size={20} />
                        </Link>
                        <span className="text-lg font-semibold">
                            John Doe
                        </span>
                    </div>
                </div>

                <div className="py-4 flex-grow overflow-auto lg:max-h-[600px]">
                    <div className="relative h-full overflow-auto px-4 pb-4 space-y-4">
                        <div className="sticky top-1 z-10 flex justify-center my-2">
                            <span className='bg-white px-2 py-0.5 text-xs rounded-full shadow'>Today</span>
                        </div>
                        <div className="bg-white rounded-xl shadow-lg p-2">
                            <p className="text-sm border-b p-2">
                                Customer is inquiring about this item
                            </p>
                            <div className="flex items-center gap-2 py-2 cursor-pointer p-2">
                                <div className='flex items-center'>
                                    <div className="relative">
                                        <Image src="/image/product/1.jpeg" alt='' width={40} height={40} className='rounded' />
                                    </div>
                                </div>
                                <div>
                                    <p className='text-sm font-semibold text-gray-800 flex items-center gap-2'>
                                        Product Name
                                    </p>
                                    <p className='text-xs text-gray-500'>
                                        Whats the new update?
                                    </p>
                                </div>
                            </div>
                        </div>

                        <SentText text="It this item available?" />
                        <SentText text="I want to buy this item" />
                        <ReceivedText text="Yes it is available" />
                        <ReceivedText text="You can place order" />
                        <SentText text="It this item available?" />
                        <SentText text="I want to buy this item" />
                        <ReceivedText text="Yes it is available" />
                        <ReceivedText text="You can place order" />
                        <SentText text="It this item available?" />
                        <SentText text="I want to buy this item" />
                        <ReceivedText text="Yes it is available" />
                        <ReceivedText text="You can place order" />
                    </div>
                </div>
                <div className="bg-white">
                    <div className="flex gap-2 py-3 px-6 items-center text-gray-500 focus-within:text-gray-800">
                        <input type="text" className="w-full text-sm outline-none" placeholder="Type a message here" />
                        <label htmlFor='attachments' className='cursor-pointer'>
                            <MdOutlineAttachFile size={18} />
                            <input type="file" id="attachments" className="hidden" />
                        </label>
                        <BsFillSendFill size={18} />
                    </div>
                </div>
            </div>
        </>
    )
}

const SentText = ({ text }) => {
    return (
        <div className="flex justify-end ml-auto max-w-[70%]">
            <div className="px-3 py-1 5 bg-white rounded-xl rounded-tr-none shadow-lg text-sm text-gray-700">
                <p>
                    {text}
                </p>
                <p className="text-right text-xs text-gray-500 whitespace-nowrap">
                    10:00 AM
                </p>
            </div>
        </div>
    )
}
const ReceivedText = ({ text }) => {
    return (
        <div className="flex mr-auto max-w-[70%]">
            <div className="px-3 py-1 5 bg-white rounded-xl rounded-tl-none shadow-lg text-sm text-gray-700">
                <p>
                    {text}
                </p>
                <p className="text-xs text-gray-500 whitespace-nowrap">
                    10:00 AM
                </p>
            </div>
        </div>
    )
}

export default ChatPage
