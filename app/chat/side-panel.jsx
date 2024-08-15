import Link from 'next/link';
import { CiSearch } from 'react-icons/ci';
import { Avatar, SelectPicker } from 'rsuite';

const chatListType = ['All', 'Unread', 'Pinned'].map(
    item => ({ label: item, value: item })
);

function ChatSidePanel() {
    return (
        <div className='h-full flex flex-col'>

            <div className="p-3 flex items-center gap-2 border-b border-dashed">
                <div className="border p-1 flex items-center gap-2 w-full">
                    <CiSearch size={18} className='text-gray-500' />
                    <input type="text" placeholder="Search" className="border-none outline-none text-gray-500 w-full" />
                </div>
                <SelectPicker data={chatListType} cleanable={false} searchable={false} defaultValue='All' style={{ width: '100px', fontSize: '12px' }} />
            </div>

            <div className="flex p-3 gap-3 items-center border-b flex-nowrap overflow-x-scroll ">
                <Link href="/chat/1">
                    <div className="relative">
                        <Avatar src="https://i.pravatar.cc/150?u=1" circle />
                        <div className="p-1 rounded-full bg-green-500 mt-0.5 absolute bottom-2 right-0"></div>
                    </div>
                    <p className='text-center text-xs'>
                        John
                    </p>
                </Link>
                <Link href="/chat/1">
                    <div className="relative">
                        <Avatar src="https://i.pravatar.cc/150?u=2" circle />
                        <div className="p-1 rounded-full bg-green-500 mt-0.5 absolute bottom-2 right-0"></div>
                    </div>
                    <p className='text-center text-xs'>
                        John
                    </p>
                </Link>
                <Link href="/chat/1">
                    <div className="relative">
                        <Avatar src="https://i.pravatar.cc/150?u=3" circle />
                        <div className="p-1 rounded-full bg-green-500 mt-0.5 absolute bottom-2 right-0"></div>
                    </div>
                    <p className='text-center text-xs'>
                        John
                    </p>
                </Link>
                <Link href="/chat/1">
                    <div className="relative">
                        <Avatar src="https://i.pravatar.cc/150?u=4" circle />
                        <div className="p-1 rounded-full bg-green-500 mt-0.5 absolute bottom-2 right-0"></div>
                    </div>
                    <p className='text-center text-xs'>
                        John
                    </p>
                </Link>
                <Link href="/chat/1">
                    <div className="relative">
                        <Avatar src="https://i.pravatar.cc/150?u=5" circle />
                        <div className="p-1 rounded-full bg-green-500 mt-0.5 absolute bottom-2 right-0"></div>
                    </div>
                    <p className='text-center text-xs'>
                        John
                    </p>
                </Link>
                <Link href="/chat/1">
                    <div className="relative">
                        <Avatar src="https://i.pravatar.cc/150?u=6" circle />
                        <div className="p-1 rounded-full bg-green-500 mt-0.5 absolute bottom-2 right-0"></div>
                    </div>
                    <p className='text-center text-xs'>
                        John
                    </p>
                </Link>
            </div>

            <div className="py-3 h-full flex-grow overflow-auto">
                <div className='overflow-y-scroll lg:h-[500px] h-full '>
                    <Link href="/chat/1" className="flex items-center gap-2 mb-2 hover:bg-gray-100 px-6 py-2 cursor-pointer">
                        <div className='flex items-center'>
                            <div className="relative">
                                <Avatar src="https://i.pravatar.cc/150?u=2" circle />
                                <div className="p-1 rounded-full bg-green-500 mt-0.5 absolute bottom-2 right-0"></div>
                            </div>
                        </div>
                        <div>
                            <p className='text-sm font-semibold text-gray-800 flex items-center gap-2'>John Doe

                            </p>
                            <p className='text-xs text-gray-500'>
                                Whats the new update?
                            </p>
                        </div>
                    </Link>
                    <Link href="/chat/1" className="flex items-center gap-2 mb-2 hover:bg-gray-100 px-6 py-2 cursor-pointer">
                        <div className='flex items-center'>
                            <div className="relative">
                                <Avatar src="https://i.pravatar.cc/150?u=5" circle />
                                <div className="p-1 rounded-full bg-green-500 mt-0.5 absolute bottom-2 right-0"></div>
                            </div>
                        </div>
                        <div>
                            <p className='text-sm font-semibold text-gray-800 flex items-center gap-2'>
                                John Doe
                            </p>
                            <p className='text-xs text-gray-500'>
                                Whats the new update?
                            </p>
                        </div>
                    </Link>
                </div>
            </div>

        </div>
    )
}

export default ChatSidePanel
