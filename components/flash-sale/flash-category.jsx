'use client';
import { useState } from "react";
import { Divider } from 'rsuite';

const tabs = [
    {
        title: 'Top Picks'
    },
    {
        title: 'Raya Deals'
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
]

const FlashCategoryTab = () => {

    const [activeTab, setActiveTab] = useState(0);

    return (
        <div className="container flex bg-white">
            {
                tabs.map((item, i) => <div key={i} onClick={() => setActiveTab(i)} className={`p-3 text-center cursor-pointer w-full border-b-4 ${activeTab === i ? 'border-orange-600 text-orange-600 font-bold' : 'border-white'} text-gray-500`}>
                    <p className="text-sm">
                        {item.title}
                    </p>
                </div>)
            }
            <div className={`p-3 text-center cursor-pointer w-full text-gray-500 border-l-2 border-dotted`}>
                <p className="text-sm">
                    More
                </p>
            </div>
        </div>
    );
};

export default FlashCategoryTab;