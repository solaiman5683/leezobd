'use client';

import Slider from "react-slick";
import ProductItem from "./product-item";

function SameShopProducts() {
    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 2,
        draggable: true,
        arrows: true,
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    arrows: false
                }
            }
        ]
    };
    return (
        <div>
            <p className="py-6 text-lg text-gray-700">
                From The Same Shop
            </p>
            <Slider {...settings}>
                <div className="px-4">
                    <ProductItem image='/image/product/1.jpeg' price={24} sold={112} />
                </div>
                <div className="px-4">
                    <ProductItem image='/image/product/2.jpeg' price={24} sold={112} />
                </div>
                <div className="px-4">
                    <ProductItem image='/image/product/3.jpeg' price={24} sold={112} />
                </div>
                <div className="px-4">
                    <ProductItem image='/image/product/4.jpeg' price={24} sold={112} />
                </div>
                <div className="px-4">
                    <ProductItem image='/image/product/5.jpeg' price={24} sold={112} />
                </div>
                <div className="px-4">
                    <ProductItem image='/image/product/1.jpeg' price={24} sold={112} />
                </div>
                <div className="px-4">
                    <ProductItem image='/image/product/2.jpeg' price={24} sold={112} />
                </div>
                <div className="px-4">
                    <ProductItem image='/image/product/3.jpeg' price={24} sold={112} />
                </div>
            </Slider>
        </div>
    )
}

export default SameShopProducts
