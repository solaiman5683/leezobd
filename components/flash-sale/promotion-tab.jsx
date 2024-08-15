"use client";
import { useState } from "react";

const tabs = [
  {
    time: "04:00",
    title: "Ongoing",
  },
  {
    time: "16:00",
    title: "Coming Soon",
  },
  {
    time: "22:00",
    title: "Coming Soon",
  },
  {
    time: "04:00",
    title: "Tomorrow",
  },
];

const PromotionTab = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="container flex ">
      {tabs.map((item, i) => (
        <div
          key={i}
          onClick={() => setActiveTab(i)}
          className={`p-4 cursor-pointer text-center w-full ${
            activeTab === i ? "bg-orange-600" : "bg-gray-700"
          } text-white`}
        >
          <p className="text-xl font-semibold">{item.time}</p>
          <p className="text-sm">{item.title}</p>
        </div>
      ))}
    </div>
  );
};

export default PromotionTab;
