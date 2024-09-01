import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";

const MallSection = () => {
    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 4,
        rows: 2,
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
        <div className="bg-white shadow-lg">
            <div className="lg:p-6 p-3 text-gray-700 border flex items-center justify-between">
                <div className="flex gap-4 items-center">
                    <p className="lg:px-4 lg:text-lg font-bold text-red-500 hover:underline flex items-center gap-1">LeezoBD Mall
                    </p>
                </div>
                <div>
                    <Link href='/' className="text-red-500 hover:underline flex items-center gap-1">See All <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>
                    </Link>
                </div>
            </div>
            <Slider {...settings}>
                {
                    new Array(8).fill(0).map((_, i) => <div key={i} className={`p-3 ${i % 2 === 0 ? 'border-r  border-b' : 'border-r'}`}>
                        <Image src={`/image/brands/${i + 1}.jpeg`} alt="" width={150} height={150} />
                    </div>)
                }
                {
                    new Array(8).fill(0).map((_, i) => <div key={i} className={`p-3 ${i % 2 === 0 ? 'border-r  border-b' : 'border-r'}`}>
                        <Image src={`/image/brands/${i + 1}.jpeg`} alt="" width={150} height={150} />
                    </div>)
                }
                {
                    new Array(8).fill(0).map((_, i) => <div key={i} className={`p-3 ${i % 2 === 0 ? 'border-r  border-b' : 'border-r'}`}>
                        <Image src={`/image/brands/${i + 1}.jpeg`} alt="" width={150} height={150} />
                    </div>)
                }
            </Slider>
        </div>
    );
};

export default MallSection;