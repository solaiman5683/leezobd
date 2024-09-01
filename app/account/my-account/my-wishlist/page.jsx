'use client';
import { getUserWishlist, removeUserWishlist } from '@/hooks/auth/purchaseApi';
import Image from 'next/image';
import Link from 'next/link';
import { FiArrowLeft } from 'react-icons/fi';
import { useQuery } from 'react-query';

function MyReturns() {
    const { data: wishlists, isLoading } = useQuery("wishlists", () =>
        getUserWishlist()
    );

    return (
        <div className="flex flex-col h-screen overflow-hidden space-y-3">
            <div>
                <div className="bg-white p-3">
                    <div className="flex items-center gap-2">
                        <Link href="/account/my-account">
                            <FiArrowLeft size={20} />
                        </Link>
                        <span className="text-lg font-semibold">My Wishlist</span>
                    </div>
                </div>
            </div>
            <div className="flex-grow lg:flex-none">
                <div className="space-y-3">
                    {
                        isLoading && <p className='px-3'>Loading...</p>
                    }
                    {
                        wishlists?.data?.data?.map((item, i) => <WishlistItem key={i} data={item} />)
                    }
                </div>
            </div>
            <button className="w-full bg-orange-600 p-2 text-white uppercase">
                Add All to Cart
            </button>
        </div>
    )
}

const WishlistItem = ({ data }) => {
    const handleDelete = async () => {
        const res = await removeUserWishlist(data.id);
        console.log(res);
    }
    return (<div className='bg-white p-3 shadow-sm space-y-1'>
        <div className="flex gap-3 items-center w-full">
            <div className='min-w-max'>
                <Image priority src={data?.product?.thumbnail_image} alt="product" width={100} height={100} className='w-20 h-20 object-cover' />
            </div>

            <div className='w-full'>
                <p className="text-xs">
                    {data?.product?.name}
                </p>
                <p className="text-xs">
                    {data?.product?.base_price}
                </p>
                <div className="flex items-center gap-2">
                    <button className='bg-orange-500 text-[11px] px-2 py-1 text-white rounded-full min-w-max mt-2'>
                        Add to cart
                    </button>
                    <button onClick={handleDelete} className='bg-red-500 text-[11px] px-2 py-1 text-white rounded-full min-w-max mt-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-3.5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    </div>)
}

export default MyReturns
