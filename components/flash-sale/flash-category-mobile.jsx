/* eslint-disable @next/next/no-img-element */
'use client';
import { useState } from "react";

const tabs = [
    {
        title: 'Top Picks'
    },
    {
        title: '50% off Flash Deals'
    },
    {
        title: '$2 Shop'
    },
    {
        title: 'Electronics'
    },
    {
        title: 'Home Appliances'
    },
    {
        title: 'Food & Beverages'
    },
    {
        title: '$2 Shop'
    },
    {
        title: 'Electronics'
    }
]

const FlashCategoryTabMobile = () => {

    const [activeTab, setActiveTab] = useState(0);

    return (
        <div className="overflow-x-auto bg-white border p-2 mt-2 sticky top-[50px] z-10">
            <div className="flex gap-2 flex-nowrap">
                {
                    tabs.map((item, i) => <div key={i} onClick={() => setActiveTab(i)} className={`p-2 text-center cursor-pointer w-[500px] border ${activeTab === i ? 'border-orange-600 text-orange-600 font-bold' : 'border-white'} text-gray-500 flex flex-col items-center justify-center gap-2`}>
                        <img src={`/image/icon/flash-sale/${i + 1}.png`} className="h-10 w-auto" alt="" />
                        <p className="text-xs w-[80px]">
                            {item.title}
                        </p>
                    </div>)
                }
            </div>
        </div>
    );
};

export default FlashCategoryTabMobile;