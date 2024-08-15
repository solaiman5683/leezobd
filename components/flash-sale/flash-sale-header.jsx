/* eslint-disable @next/next/no-img-element */
'use client'
import FlipCountdown from '@rumess/react-flip-countdown';

const FlashSaleHeader = () => {
    return (
        <div className="bg-white w-full">
            <div className="container p-4">
                <div className="flex items-center justify-center lg:gap-4 gap-2">
                    <div className="w-4 border-b border-gray-600"></div>
                    <img src="/image/flash.png" className="w-24 lg:w-40" alt="" />
                    <p className="flex items-center gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                        <span>ends in</span>
                    </p>
                    <div>
                        <FlipCountdown
                            endAt={'2024-12-12 01:26:58'} // Date/Time
                            theme='dark'
                            titlePosition='bottom'
                            size='extra-small'
                            endAtZero
                            hideYear
                            hideMonth
                            hideDay
                        />
                    </div>
                    <div className="w-4 border-b border-gray-600"></div>
                </div>
            </div>
        </div>
    );
};

export default FlashSaleHeader;