import { FaChevronRight } from 'react-icons/fa6';

const ShopVouchers = () => {
    return (
        <div className='bg-white px-2 py-3 flex items-center justify-between'>
            <p className='text-sm'>Shop Vouchers</p>

            <div className="flex items-center gap-2">
                <button className="px-1 py-0.5 border border-orange-500 text-[#F4580E] text-[8px] min-w-max">
                    30% off
                </button>
                <button className="px-1 py-0.5 border border-orange-500 text-[#F4580E] text-[8px] min-w-max">
                    20% off
                </button>

                <div className="text-gray-400">
                    <FaChevronRight />
                </div>
            </div>
        </div>
    );
};

export default ShopVouchers;