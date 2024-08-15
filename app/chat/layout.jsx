import ChatSidePanel from "./side-panel"



function ChatLayout({ children }) {
    return (
        <div>
            <div className="container hidden sm:block">
                <div className='bg-white w-full overflow-hidden'>
                    <div className="">
                        <div className="grid lg:grid-cols-5">
                            <div className="lg:col-span-1 border-r">
                                <ChatSidePanel />
                            </div>
                            <div className="lg:col-span-4">
                                {children}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="sm:hidden block h-screen">
                {children}
            </div>
        </div>
    )
}

export default ChatLayout
