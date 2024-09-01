"use client";
import Image from "next/image";
import { useState } from "react";
import { BsFillSendFill } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { MdOutlineAttachFile } from "react-icons/md";
import {
  TbLayoutBottombarCollapse,
  TbLayoutSidebarRightCollapse,
} from "react-icons/tb";
import { Avatar, SelectPicker } from "rsuite";

const chatListType = ["All", "Unread", "Pinned"].map((item) => ({
  label: item,
  value: item,
}));

function ChatBox() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isConversationOpen, setIsConversationOpen] = useState(true);
  return (
    <div className="fixed bottom-4 right-4 z-50">
      {!isChatOpen && (
        <button
          onClick={() => setIsChatOpen(!isChatOpen)}
          className="bg-white px-4 py-2 text-[#4F97A5] flex items-center gap-2 rounded-full shadow-md"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            className="h-6 w-6"
          >
            <path
              fill="currentColor"
              d="M18 6.07a1 1 0 01.993.883L19 7.07v10.365a1 1 0 01-1.64.768l-1.6-1.333H6.42a1 1 0 01-.98-.8l-.016-.117-.149-1.783h9.292a1.8 1.8 0 001.776-1.508l.018-.154.494-6.438H18zm-2.78-4.5a1 1 0 011 1l-.003.077-.746 9.7a1 1 0 01-.997.923H4.24l-1.6 1.333a1 1 0 01-.5.222l-.14.01a1 1 0 01-.993-.883L1 13.835V2.57a1 1 0 011-1h13.22zm-4.638 5.082c-.223.222-.53.397-.903.526A4.61 4.61 0 018.2 7.42a4.61 4.61 0 01-1.48-.242c-.372-.129-.68-.304-.902-.526a.45.45 0 00-.636.636c.329.33.753.571 1.246.74A5.448 5.448 0 008.2 8.32c.51 0 1.126-.068 1.772-.291.493-.17.917-.412 1.246-.74a.45.45 0 00-.636-.637z"
            ></path>
          </svg>{" "}
          Chat
        </button>
      )}

      {isChatOpen && (
        <div className="bg-white rounded-lg shadow-2xl w-[700px] overflow-hidden">
          <div className="">
            <div className="p-4 flex items-center justify-between border-b-2 border-dashed">
              <p className="text-lg font-semibold text-orange-600">Chat</p>

              <div className="flex gap-4 ">
                <span className="text-gray-500 hover:text-orange-600 cursor-pointer">
                  <TbLayoutSidebarRightCollapse
                    size={18}
                    title="Show Chat List Only"
                  />
                </span>
                <span className="text-gray-500 hover:text-orange-600 cursor-pointer">
                  <TbLayoutBottombarCollapse
                    size={18}
                    onClick={() => setIsChatOpen(!isChatOpen)}
                    title="Close Chat"
                  />
                </span>
              </div>
            </div>

            <div className="grid lg:grid-cols-5">
              <div className="lg:col-span-2 border-r">
                <div className="p-3 flex items-center gap-2 border-b border-dashed">
                  <div className="border p-1 flex items-center gap-2">
                    <CiSearch size={18} className="text-gray-500" />
                    <input
                      type="text"
                      className="border-none outline-none text-gray-500 w-full"
                    />
                  </div>
                  <SelectPicker
                    data={chatListType}
                    cleanable={false}
                    searchable={false}
                    defaultValue="All"
                    style={{ width: "100px", fontSize: "12px" }}
                  />
                </div>

                <div className="flex p-3 gap-3 items-center border-b flex-nowrap overflow-x-scroll ">
                  <div>
                    <div className="relative">
                      <Avatar src="https://i.pravatar.cc/150?u=1" circle />
                      <div className="p-1 rounded-full bg-green-500 mt-0.5 absolute bottom-2 right-0"></div>
                    </div>
                    <p className="text-center text-xs">John</p>
                  </div>
                  <div>
                    <div className="relative">
                      <Avatar src="https://i.pravatar.cc/150?u=2" circle />
                      <div className="p-1 rounded-full bg-green-500 mt-0.5 absolute bottom-2 right-0"></div>
                    </div>
                    <p className="text-center text-xs">John</p>
                  </div>
                  <div>
                    <div className="relative">
                      <Avatar src="https://i.pravatar.cc/150?u=3" circle />
                      <div className="p-1 rounded-full bg-green-500 mt-0.5 absolute bottom-2 right-0"></div>
                    </div>
                    <p className="text-center text-xs">John</p>
                  </div>
                  <div>
                    <div className="relative">
                      <Avatar src="https://i.pravatar.cc/150?u=4" circle />
                      <div className="p-1 rounded-full bg-green-500 mt-0.5 absolute bottom-2 right-0"></div>
                    </div>
                    <p className="text-center text-xs">John</p>
                  </div>
                  <div>
                    <div className="relative">
                      <Avatar src="https://i.pravatar.cc/150?u=5" circle />
                      <div className="p-1 rounded-full bg-green-500 mt-0.5 absolute bottom-2 right-0"></div>
                    </div>
                    <p className="text-center text-xs">John</p>
                  </div>
                  <div>
                    <div className="relative">
                      <Avatar src="https://i.pravatar.cc/150?u=6" circle />
                      <div className="p-1 rounded-full bg-green-500 mt-0.5 absolute bottom-2 right-0"></div>
                    </div>
                    <p className="text-center text-xs">John</p>
                  </div>
                </div>

                <div className="py-3">
                  <div className="overflow-y-scroll max-h-[250px]">
                    <div className="flex items-center gap-2 mb-2 bg-gray-100 px-6 py-2 cursor-pointer">
                      <div className="flex items-center">
                        <div className="relative">
                          <Avatar src="https://i.pravatar.cc/150?u=2" circle />
                          <div className="p-1 rounded-full bg-green-500 mt-0.5 absolute bottom-2 right-0"></div>
                        </div>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-800 flex items-center gap-2">
                          John Doe
                        </p>
                        <p className="text-xs text-gray-500">
                          Whats the new update?
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 mb-2 hover:bg-gray-100 px-6 py-2 cursor-pointer">
                      <div className="flex items-center">
                        <div className="relative">
                          <Avatar src="https://i.pravatar.cc/150?u=5" circle />
                          <div className="p-1 rounded-full bg-green-500 mt-0.5 absolute bottom-2 right-0"></div>
                        </div>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-800 flex items-center gap-2">
                          John Doe
                        </p>
                        <p className="text-xs text-gray-500">
                          Whats the new update?
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-3 bg-gray-100 h-full">
                <div className="bg-white p-2 text-sm">John Doe</div>

                <div className="py-4">
                  <div className="relative max-h-[310px] overflow-auto px-4 pb-4 space-y-4">
                    <div className="sticky top-1 z-10 flex justify-center my-2">
                      <span className="bg-white px-2 py-0.5 text-xs rounded-full shadow">
                        Today
                      </span>
                    </div>
                    <div className="bg-white rounded-xl shadow-lg p-2">
                      <p className="text-sm border-b p-2">
                        Customer is inquiring about this item
                      </p>
                      <div className="flex items-center gap-2 py-2 cursor-pointer p-2">
                        <div className="flex items-center">
                          <div className="relative">
                            <Image
                              src="/image/product/1.jpeg"
                              alt=""
                              width={40}
                              height={40}
                              className="rounded"
                            />
                          </div>
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-gray-800 flex items-center gap-2">
                            Product Name
                          </p>
                          <p className="text-xs text-gray-500">
                            Whats the new update?
                          </p>
                        </div>
                      </div>
                    </div>

                    <SentText text="It this item available?" />
                    <SentText text="I want to buy this item" />
                    <ReceivedText text="Yes it is available" />
                    <ReceivedText text="You can place order" />
                  </div>
                </div>
                <div className="bg-white">
                  <div className="flex gap-2 py-3 px-6 items-center text-gray-500 focus-within:text-gray-800">
                    <input
                      type="text"
                      className="w-full text-sm outline-none"
                      placeholder="Type a message here"
                    />
                    <label htmlFor="attachments" className="cursor-pointer">
                      <MdOutlineAttachFile size={18} />
                      <input type="file" id="attachments" className="hidden" />
                    </label>
                    <BsFillSendFill size={18} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

const SentText = ({ text }) => {
  return (
    <div className="flex justify-end ml-auto max-w-[70%]">
      <div className="px-3 py-1 5 bg-white rounded-xl rounded-tr-none shadow-lg text-sm text-gray-700">
        <p>{text}</p>
        <p className="text-right text-xs text-gray-500 whitespace-nowrap">
          10:00 AM
        </p>
      </div>
    </div>
  );
};
const ReceivedText = ({ text }) => {
  return (
    <div className="flex mr-auto max-w-[70%]">
      <div className="px-3 py-1 5 bg-white rounded-xl rounded-tl-none shadow-lg text-sm text-gray-700">
        <p>{text}</p>
        <p className="text-xs text-gray-500 whitespace-nowrap">10:00 AM</p>
      </div>
    </div>
  );
};

export default ChatBox;
