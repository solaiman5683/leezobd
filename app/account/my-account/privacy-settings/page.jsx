import React from 'react';

const MyAccountPage = () => {
    return (
        <div className='text-gray-600 bg-white p-6'>
            <h2 className='capitalize text-lg font-bold'>Privacy Settings</h2>
            <hr className='my-3' />
            <div className="flex justify-between items-center">
                <p className='capitalize text-sm'>Request Account Deletion</p>
                <button className='bg-orange-500 text-white px-6 py-2 text-sm'>
                    Delete
                </button>
            </div>
        </div>
    );
};

export default MyAccountPage;