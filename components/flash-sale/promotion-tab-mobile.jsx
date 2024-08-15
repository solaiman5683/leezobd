'use client';
import { useState } from "react";

const tabs = [
    {
        time: '04:00',
        title: 'Ongoing'
    },
    {
        time: '16:00',
        title: 'Coming Soon'
    },
    {
        time: '22:00',
        title: 'Coming Soon'
    },
    {
        time: '04:00',
        title: 'Tomorrow'
    },
]

const PromotionTabMobile = () => {

    const [activeTab, setActiveTab] = useState(0);

    return (
        <div className="container flex bg-white">
            {
                tabs.map((item, i) => <div key={i} onClick={() => setActiveTab(i)} className={`p-2 border-b-2 cursor-pointer text-center w-full ${activeTab === i ? 'border-orange-600 text-orange-600' : 'border-transparent'}`}>
                    <p className="text-sm font-semibold">
                        {item.time}
                    </p>
                    <p className="text-xs">
                        {item.title}
                    </p>
                </div>)
            }
        </div>
    );
};

export default PromotionTabMobile;