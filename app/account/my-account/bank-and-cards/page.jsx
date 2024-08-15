
const MyAccountPage = () => {
    return (
        <div className='bg-white p-6'>
            <div>
                <div className="flex justify-between">
                    <h2 className='capitalize textLg font-bold'>Credit / Debit Card</h2>
                    <button className='bg-orange-500 text-white px-6 py-2 text-sm'>
                        <span className='text-xl'>+ </span>
                        Add new Card
                    </button>
                </div>
                <hr className='my-3' />
                <div className="h-[300px] flex justify-center items-center">
                    <p className="text-center text-gray-400 text-lg">
                        No Credit / Debit Card Found
                    </p>
                </div>
            </div>
            <div>
                <div className="flex justify-between">
                    <h2 className='capitalize textLg font-bold'>Credit Card Installment</h2>
                    <button className='bg-orange-500 text-white px-6 py-2 text-sm'>
                        <span className='text-xl'>+ </span>
                        Add Credit Card Installment
                    </button>
                </div>
                <hr className='my-3' />
                <div className="h-[300px] flex justify-center items-center">
                    <p className="text-center text-gray-400 text-lg">
                        No Credit Card Installment Found
                    </p>
                </div>
            </div>
            <div>
                <div className="flex justify-between">
                    <h2 className='capitalize textLg font-bold'>My bank accounts</h2>
                    <button className='bg-orange-500 text-white px-6 py-2 text-sm'>
                        <span className='text-xl'>+ </span>
                        Add bank account
                    </button>
                </div>
                <hr className='my-3' />
                <div className="h-[300px] flex justify-center items-center">
                    <p className="text-center text-gray-400 text-lg">
                        No bank account Found
                    </p>
                </div>
            </div>
        </div>
    );
};

export default MyAccountPage;