import React from 'react';
import ProductItem from './product-item';

const UserMayLike = () => {
    return (
        <div>
            <p className="py-6 text-lg text-gray-700">
                You may also like
            </p>

            <div className="grid lg:grid-cols-5 grid-cols-1 gap-6">
                <ProductItem image='/image/product/1.jpeg' price={24} sold={20} />
                <ProductItem image='/image/product/2.jpeg' price={24} sold={20} />
                <ProductItem image='/image/product/3.jpeg' price={24} sold={20} />
                <ProductItem image='/image/product/4.jpeg' price={24} sold={20} />
                <ProductItem image='/image/product/5.jpeg' price={24} sold={20} />
                <ProductItem image='/image/product/5.jpeg' price={24} sold={20} />
                <ProductItem image='/image/product/4.jpeg' price={24} sold={20} />
                <ProductItem image='/image/product/3.jpeg' price={24} sold={20} />
                <ProductItem image='/image/product/2.jpeg' price={24} sold={20} />
                <ProductItem image='/image/product/1.jpeg' price={24} sold={20} />
                <ProductItem image='/image/product/1.jpeg' price={24} sold={20} />
                <ProductItem image='/image/product/2.jpeg' price={24} sold={20} />
                <ProductItem image='/image/product/3.jpeg' price={24} sold={20} />
                <ProductItem image='/image/product/4.jpeg' price={24} sold={20} />
                <ProductItem image='/image/product/5.jpeg' price={24} sold={20} />
                <ProductItem image='/image/product/5.jpeg' price={24} sold={20} />
                <ProductItem image='/image/product/4.jpeg' price={24} sold={20} />
                <ProductItem image='/image/product/3.jpeg' price={24} sold={20} />
                <ProductItem image='/image/product/2.jpeg' price={24} sold={20} />
                <ProductItem image='/image/product/1.jpeg' price={24} sold={20} />
                <ProductItem image='/image/product/1.jpeg' price={24} sold={20} />
                <ProductItem image='/image/product/2.jpeg' price={24} sold={20} />
                <ProductItem image='/image/product/3.jpeg' price={24} sold={20} />
                <ProductItem image='/image/product/4.jpeg' price={24} sold={20} />
                <ProductItem image='/image/product/5.jpeg' price={24} sold={20} />
                <ProductItem image='/image/product/5.jpeg' price={24} sold={20} />
                <ProductItem image='/image/product/4.jpeg' price={24} sold={20} />
                <ProductItem image='/image/product/3.jpeg' price={24} sold={20} />
                <ProductItem image='/image/product/2.jpeg' price={24} sold={20} />
                <ProductItem image='/image/product/1.jpeg' price={24} sold={20} />
            </div>
        </div>
    );
};

export default UserMayLike;