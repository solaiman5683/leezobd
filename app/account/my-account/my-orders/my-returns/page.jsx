import Link from 'next/link'
import React from 'react'
import { FiArrowLeft } from 'react-icons/fi'

function MyReturns() {
    return (
        <div className="flex flex-col h-screen overflow-hidden">
            <div>
                <div className="bg-white p-3">
                    <div className="flex items-center gap-2">
                        <Link href="/account/my-account">
                            <FiArrowLeft size={20} />
                        </Link>
                        <span className="text-lg font-semibold">My Returns</span>
                    </div>
                </div>
            </div>
            <div className="flex-grow">
                <div className="h-full flex flex-col justify-center items-center p-12">
                    <p className="text-center">
                        You have no returns yet.
                    </p>
                    <p className="text-xs text-gray-500 mt-2 text-center">
                        Not satisfied with your purchase? You can initiate return request from my orders page.
                    </p>

                    <Link href='/account/my-account/my-orders' className="border border-orange-500 w-full mt-6 text-sm p-2 rounded-md text-center text-[#4F97A5] ">
                        Check My Orders
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default MyReturns
