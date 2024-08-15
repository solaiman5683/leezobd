import React from 'react';
import { Checkbox } from 'rsuite';

const MyAccountPage = () => {
    return (
        <div className='text-gray-600 bg-white p-6'>
            <h2 className='capitalize text-lg font-bold'>Notification Settings</h2>
            <hr className='my-3' />
            <div className='space-y-6'>
                <p className='text-black'>Email Notifications</p>

                <div className="flex justify-between">
                    <p className='capitalize'>Email Notifications</p>
                    <Checkbox defaultChecked color='orange'>Enable</Checkbox>
                </div>
                <div className="flex justify-between">
                    <div>
                        <p className='capitalize'>Order Updates</p>
                        <p className="text-sm">
                            Notify when there are updates on my orders, including payment-related updates.
                        </p>
                    </div>
                    <Checkbox defaultChecked color='orange'>Enable</Checkbox>
                </div>
                <div className="flex justify-between">
                    <div>
                        <p className='capitalize'>Listing Updates</p>
                        <p className="text-sm">
                            Notify when my listing as a seller becomes sold out, deleted or suspended.
                        </p>
                    </div>
                    <Checkbox defaultChecked color='orange'>Enable</Checkbox>
                </div>
                <div className="flex justify-between">
                    <div>
                        <p className='capitalize'>Promotions</p>
                        <p className="text-sm">
                            Send me news on exclusive offers and deals
                        </p>
                    </div>
                    <Checkbox color='orange'>Enable</Checkbox>
                </div>
                <div className="flex justify-between">
                    <div>
                        <p className='capitalize'>Personalized Content</p>
                        <p className="text-sm">
                            Send me personalized updates. (e.g. your birthday gift).
                        </p>
                    </div>
                    <Checkbox defaultChecked color='orange'>Enable</Checkbox>
                </div>
            </div>
        </div>
    );
};

export default MyAccountPage;