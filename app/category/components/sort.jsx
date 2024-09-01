"use client"

import { useState } from "react";

const sortBy = [
    { value: 'popular', label: 'Popular' },
    { value: 'latest', label: 'Latest' },
    { value: 'top-sales', label: 'Top Sales' },

]

function Sort() {
    const [selectedSortBy, setSelectedSortBy] = useState('popular');
    const [currentPage, setCurrentPage] = useState(1);
    const maxPage = 5;


    return (
        <div className='py-3 px-6 flex items-center justify-between bg-gray-200'>
            <div className="flex gap-2.5 items-center">
                <span>Sort By</span>
                {
                    sortBy.map((item, i) => <button key={i}
                        onClick={() => setSelectedSortBy(item.value)}
                        className={`p-2 bg-gray-50 rounded-md text-sm ${selectedSortBy === item.value ? 'bg-orange-500 text-white' : 'bg-white'}`}
                    >{item.label}</button>)
                }
                <select name="price" className="p-2 bg-gray-50 rounded-md text-sm" id="">
                    <option value="low-to-high">
                        Low to High
                    </option>
                    <option value="high-to-low">
                        High to Low
                    </option>
                </select>
            </div>

            <div className="flex items-center gap-2">
                <p className="text-sm text-gray-500">
                    <span className="text-[#4F97A5] font-bold text-base">
                        {currentPage}
                    </span> / {maxPage} 
                </p>
                <div className="flex">
                    <button
                        onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                        className="p-1.5 bg-gray-50 text-gray-400 hover:text-gray-900 rounded-md text-sm border flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                        </svg>
                    </button>
                    <button
                        onClick={() => setCurrentPage((prev) => Math.min(prev + 1, maxPage))}
                        className="p-1.5 bg-gray-50 text-gray-400 hover:text-gray-900 rounded-md text-sm border flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Sort
