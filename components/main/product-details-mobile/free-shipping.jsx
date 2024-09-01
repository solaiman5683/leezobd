'use client'
import Image from 'next/image';
import { Tooltip, Whisper } from 'rsuite';

const FreeShipping = ({ product }) => {
    return (
        <div className='bg-white p-2'>
            {
                product?.shipping_type == 'free' && <div className="flex items-center gap-2 text-xs">
                <Image src='/image/free-shipping.jpg' alt='' width={98} height={52} className='h-5 w-auto' />
                Free Shipping
            </div>
            }
            <div className="flex gap-2 text-sm p-2">
                <svg className="mt-1" xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 18 18" view-box="0 0 18 18" height="18" width="18" stroke="#000">
                    <path d="m15 4s2.7-1.1 2.5 2c-1.8.7-5.6 2.6-5.6 2.6l-2.8 5.1-2.1 1.3 1.7-5-6.7 3v-2l-1.5-2 1.2-.9 1.6 1.6 2.5-1.3-2.8-2.4 2-1 3.3 2.2z" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                </svg>

                <div className="flex gap-8 text-gray-500">
                    <div>
                        <p className="mb-2">Shipping from</p>
                        <p>Cost</p>
                    </div>
                    <div>
                        <p className="mb-2">Bangladesh</p>
                        <Whisper placement="auto" controlId="control-id-hover" trigger="hover" speaker={<Tooltip className="bg-white text-gray-500 border shadow">
                            <div className="p-4 text-sm">
                                <div className="flex justify-between gap-12">
                                    <p className="min-w-max">
                                        Doorstep Delivery
                                    </p>
                                    <p>
                                        $1.5
                                    </p>
                                </div>
                            </div>
                        </Tooltip>}>
                            <p className="flex items-center gap-2">
                                <span className="hover:text-[#4F97A5]">${product?.est_shipping_cost}</span> <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 11 11" view-box="0 0 11 11" x="0" y="0" width="11" height="11" fill="#636363">
                                    <g>
                                        <path d="m11 2.5c0 .1 0 .2-.1.3l-5 6c-.1.1-.3.2-.4.2s-.3-.1-.4-.2l-5-6c-.2-.2-.1-.5.1-.7s.5-.1.7.1l4.6 5.5 4.6-5.5c.2-.2.5-.2.7-.1.1.1.2.3.2.4z" />
                                    </g>
                                </svg>
                            </p>
                        </Whisper>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FreeShipping;