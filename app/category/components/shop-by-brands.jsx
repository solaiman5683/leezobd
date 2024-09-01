/* eslint-disable @next/next/no-img-element */

const ShopByBrandSection = () => {
    return (
        <div className="bg-white shadow-lg">
            <div className="lg:p-6 p-3 text-gray-700 border flex items-center justify-between">
                <div className="flex gap-4 items-center">
                    <p className="lg:px-4 lg:text-lg font-bold">
                    Shop By Top Brands
                    </p>
                </div>
            </div>

            <div className="lg:grid lg:grid-cols-5 flex flex-nowrap overflow-x-scroll lg:p-6 p-2 lg:gap-4 gap-2">
                <div className="border">
                    <img src="/image/brands/product/1.jpeg" alt="" className="w-full" />
                    <div className="p-2 text-center space-y-1">
                        <p className="lg:text-base text-sm">
                            OnePlus
                        </p>
                        <p className="lg:text-sm text-xs text-gray-500 min-w-max">
                            From <span className="text-[#4F97A5] font-bold">$ 60.00</span>
                        </p>
                    </div>
                </div>
                <div className="border">
                    <img src="/image/brands/product/2.jpeg" alt="" className="w-full" />
                    <div className="p-2 text-center space-y-1">
                        <p className="lg:text-base text-sm">
                            Oppo
                        </p>
                        <p className="lg:text-sm text-xs text-gray-500 min-w-max">
                            From <span className="text-[#4F97A5] font-bold">$ 60.00</span>
                        </p>
                    </div>
                </div>
                <div className="border">
                    <img src="/image/brands/product/3.jpeg" alt="" className="w-full" />
                    <div className="p-2 text-center space-y-1">
                        <p className="lg:text-base text-sm">
                            Huawei
                        </p>
                        <p className="lg:text-sm text-xs text-gray-500 min-w-max">
                            From <span className="text-[#4F97A5] font-bold">$ 60.00</span>
                        </p>
                    </div>
                </div>
                <div className="border">
                    <img src="/image/brands/product/4.jpeg" alt="" className="w-full" />
                    <div className="p-2 text-center space-y-1">
                        <p className="lg:text-base text-sm"> 
                            Xiaomi
                        </p>
                        <p className="lg:text-sm text-xs text-gray-500 min-w-max">
                            From <span className="text-[#4F97A5] font-bold">$ 60.00</span>
                        </p>
                    </div>
                </div>
                <div className="border">
                    <img src="/image/brands/product/5.jpeg" alt="" className="w-full" />
                    <div className="p-2 text-center space-y-1">
                        <p className="lg:text-base text-sm">
                            Samsung
                        </p>
                        <p className="lg:text-sm text-xs text-gray-500 min-w-max">
                            From <span className="text-[#4F97A5] font-bold">$ 60.00</span>
                        </p>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default ShopByBrandSection;