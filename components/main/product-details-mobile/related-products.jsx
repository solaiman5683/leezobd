import Link from 'next/link';
import React from 'react';
import { Divider } from 'rsuite';

const RelatedProducts = () => {
    return (
        <div className='p-2 lg:p-4 lg:border-t-2 lg:border-orange-500 lg:mt-8 lg:bg-white'>
            <div className="lg:max-w-5xl">
                <div className="text-lg font-semibold">
                    Related Products
                </div>
                <div className="space-y-1 my-2 pr-2">
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                </div>
            </div>
            <div className="mt-4">
                <div className="text-lg font-semibold">
                    Other Products You Might Like
                </div>
                <div className="my-2 pr-2">
                    <div className='text-gray-500 text-xs lg:text-sm flex flex-wrap items-center lg:gap-1'>
                        <Link href='/' className='hover:text-[#4F97A5] whitespace-nowrap'>
                            Shoe casual men
                        </Link>
                        <Divider className='mx-1 lg:w-[2px] bg-gray-600' vertical />
                        <Link href='/' className='hover:text-[#4F97A5] whitespace-nowrap'>
                            Nivea Men Hydra Max
                        </Link>
                        <Divider className='mx-1 lg:w-[2px] bg-gray-600' vertical />
                        <Link href='/' className='hover:text-[#4F97A5] whitespace-nowrap'>
                            Nike jordan low dunks
                        </Link>
                        <Divider className='mx-1 lg:w-[2px] bg-gray-600' vertical />
                        <Link href='/' className='hover:text-[#4F97A5] whitespace-nowrap'>
                            Adidas yeezy static
                        </Link>
                        <Divider className='mx-1 lg:w-[2px] bg-gray-600' vertical />
                        <Link href='/' className='hover:text-[#4F97A5] whitespace-nowrap'>
                            Adidas yeezy 350 onyx
                        </Link>
                        <Divider className='mx-1 lg:w-[2px] bg-gray-600' vertical />
                        <Link href='/' className='hover:text-[#4F97A5] whitespace-nowrap'>
                            Nike stefan janoski
                        </Link>
                        <Divider className='mx-1 lg:w-[2px] bg-gray-600' vertical />
                        <Link href='/' className='hover:text-[#4F97A5] whitespace-nowrap'>
                            sperry shoes
                        </Link>
                        <Divider className='mx-1 lg:w-[2px] bg-gray-600' vertical />
                        <Link href='/' className='hover:text-[#4F97A5] whitespace-nowrap'>
                            Christmas sweatpants men
                        </Link>
                        <Divider className='mx-1 lg:w-[2px] bg-gray-600' vertical />
                        <Link href='/' className='hover:text-[#4F97A5] whitespace-nowrap'>
                            dr blet
                        </Link>
                        <Divider className='mx-1 lg:w-[2px] bg-gray-600' vertical />
                        <Link href='/' className='hover:text-[#4F97A5] whitespace-nowrap'>
                            Nike grey dunks low
                        </Link>
                        <Divider className='mx-1 lg:w-[2px] bg-gray-600' vertical />
                        <Link href='/' className='hover:text-[#4F97A5] whitespace-nowrap'>
                            New Balance teddy santis
                        </Link>
                        <Divider className='mx-1 lg:w-[2px] bg-gray-600' vertical />
                        <Link href='/' className='hover:text-[#4F97A5] whitespace-nowrap'>
                            hush puppies shoes for men
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

const Product = () => <Link href='/products/1' className="flex gap-2 text-xs lg:text-sm text-gray-600">
    <p className="w-full overflow-hidden whitespace-nowrap">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa incidunt beatae repellendus. Fuga rerum mollitia excepturi eaque ex officiis consequatur?
    </p>
    <p className='-ml-1 lg:hidden'>...</p>
    <p className='lg:font-bold'>
        $12.5
    </p>
</Link>

export default RelatedProducts;