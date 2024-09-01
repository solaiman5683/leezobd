import Link from "next/link"
import ProductItem from "../product-item"
import { IoIosArrowDropright } from "react-icons/io"
import { FaChevronRight } from "react-icons/fa6"

function SameShopProductsMobile() {
    return (
        <div className="bg-white p-2">
            <div className="flex items-center justify-between">
                <p className="text-sm text-gray-700">
                    From The Same Shop
                </p>
                <Link href='/' className="flex items-center text-orange-600 text-xs">
                    See All
                    <FaChevronRight />
                </Link>
            </div>
            <div className='w-full overflow-x-scroll'>
                <div className="flex gap-4 items-stretch flex-nowrap">
                    <div className="min-w-[150px] max-w-[180px]">
                        <ProductItem image='/image/product/1.jpeg' price={24} sold={112} />
                    </div>
                    <div className="min-w-[150px] max-w-[180px]">
                        <ProductItem image='/image/product/2.jpeg' price={24} sold={112} />
                    </div>
                    <div className="min-w-[150px] max-w-[180px]">
                        <ProductItem image='/image/product/3.jpeg' price={24} sold={112} />
                    </div>
                    <div className="min-w-[150px] max-w-[180px]">
                        <ProductItem image='/image/product/4.jpeg' price={24} sold={112} />
                    </div>
                    <div className="min-w-[150px] max-w-[180px]">
                        <ProductItem image='/image/product/5.jpeg' price={24} sold={112} />
                    </div>
                    <div className="min-w-[150px] max-w-[180px]">
                        <ProductItem image='/image/product/1.jpeg' price={24} sold={112} />
                    </div>
                    <div className="min-w-[150px] max-w-[180px]">
                        <ProductItem image='/image/product/2.jpeg' price={24} sold={112} />
                    </div>
                    <div className="min-w-[150px] max-w-[180px]">
                        <ProductItem image='/image/product/3.jpeg' price={24} sold={112} />
                    </div>
                    <div className="min-w-[150px] max-w-[180px] text-[#4F97A5] flex items-center justify-center">
                        <Link href='/' className=' h-fit  text-center flex flex-col items-center p-4'>
                            <IoIosArrowDropright size={35} />
                            <p className=' min-w-max'>See More</p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SameShopProductsMobile
