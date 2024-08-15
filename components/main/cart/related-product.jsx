import ProductItem from "../product-item";

const RelatedProduct = () => {
    return (
        <div className='py-6 px-3 space-y-6'>
            <div className="flex justify-between">
                <p className='text-gray-500 font-semibold capitalize'>you may also like</p>
                <p className='text-sm text-[#F4580E] font-semibold capitalize'>See All</p>
            </div>
            <div className="grid lg:grid-cols-5 grid-cols-2 lg:gap-6 gap-4">
                <ProductItem image='/image/product/1.jpeg' discount={50} cashback={10} price={24} sold={112} />
                <ProductItem image='/image/product/2.jpeg' discount={50} cashback={10} price={24} sold={112} />
                <ProductItem image='/image/product/3.jpeg' discount={50} cashback={10} price={24} sold={112} />
                <ProductItem image='/image/product/4.jpeg' discount={50} cashback={10} price={24} sold={112} />
                <ProductItem image='/image/product/5.jpeg' discount={50} cashback={10} price={24} sold={112} />
                <ProductItem image='/image/product/4.jpeg' discount={50} cashback={10} price={24} sold={112} />
                <ProductItem image='/image/product/3.jpeg' discount={50} cashback={10} price={24} sold={112} />
                <ProductItem image='/image/product/2.jpeg' discount={50} cashback={10} price={24} sold={112} />
                <ProductItem image='/image/product/1.jpeg' discount={50} cashback={10} price={24} sold={112} />
                <ProductItem image='/image/product/1.jpeg' discount={50} cashback={10} price={24} sold={112} />
                <ProductItem image='/image/product/2.jpeg' discount={50} cashback={10} price={24} sold={112} />
                <ProductItem image='/image/product/3.jpeg' discount={50} cashback={10} price={24} sold={112} />
                <ProductItem image='/image/product/4.jpeg' discount={50} cashback={10} price={24} sold={112} />
                <ProductItem image='/image/product/5.jpeg' discount={50} cashback={10} price={24} sold={112} />
                <ProductItem image='/image/product/4.jpeg' discount={50} cashback={10} price={24} sold={112} />
                <ProductItem image='/image/product/3.jpeg' discount={50} cashback={10} price={24} sold={112} />
                <ProductItem image='/image/product/2.jpeg' discount={50} cashback={10} price={24} sold={112} />
                <ProductItem image='/image/product/1.jpeg' discount={50} cashback={10} price={24} sold={112} />
                <ProductItem image='/image/product/1.jpeg' discount={50} cashback={10} price={24} sold={112} />
                <ProductItem image='/image/product/2.jpeg' discount={50} cashback={10} price={24} sold={112} />
                <ProductItem image='/image/product/3.jpeg' discount={50} cashback={10} price={24} sold={112} />
                <ProductItem image='/image/product/4.jpeg' discount={50} cashback={10} price={24} sold={112} />
                <ProductItem image='/image/product/5.jpeg' discount={50} cashback={10} price={24} sold={112} />
                <ProductItem image='/image/product/4.jpeg' discount={50} cashback={10} price={24} sold={112} />
                <ProductItem image='/image/product/3.jpeg' discount={50} cashback={10} price={24} sold={112} />
                <ProductItem image='/image/product/2.jpeg' discount={50} cashback={10} price={24} sold={112} />
                <ProductItem image='/image/product/1.jpeg' discount={50} cashback={10} price={24} sold={112} />
                <ProductItem image='/image/product/5.jpeg' discount={50} cashback={10} price={24} sold={112} />
                <ProductItem image='/image/product/4.jpeg' discount={50} cashback={10} price={24} sold={112} />
                <ProductItem image='/image/product/3.jpeg' discount={50} cashback={10} price={24} sold={112} />
            </div>

            <div className="flex justify-center">
                <button className="bg-white py-4 px-8 border">
                    See More
                </button>
            </div>
        </div>
    );
};

export default RelatedProduct;