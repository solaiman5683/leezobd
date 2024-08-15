'use client';
import Image from 'next/image';
import Link from 'next/link';
import Slider from 'react-slick';

const QuickNav = () => {
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    rows: 1,
    draggable: true,
    arrows: false
  };
  return (
    <>
      <div className='hidden lg:flex gap-6 justify-around'>
        <QuickNavItem icon='/image/quick-nav/1.png' text='New User Exclusive' />
        <QuickNavItem icon='/image/quick-nav/2.png' text='Leezo Super Market' />
        <QuickNavItem icon='/image/quick-nav/3.png' text='Daily Vouchers' />
        <QuickNavItem icon='/image/quick-nav/4.png' text='Leezo OODT' />
        <QuickNavItem icon='/image/quick-nav/5.png' text='Mari Bank' />
        <QuickNavItem icon='/image/quick-nav/6.png' text='100% Authentic Brands' />
        <QuickNavItem icon='/image/quick-nav/7.png' text='Electronics Zone' />
        <QuickNavItem icon='/image/quick-nav/8.png' text='Free Next Day Delivery' />
        <QuickNavItem icon='/image/quick-nav/9.png' text='Leezo Exclusive' />
      </div>


      <div className="lg:hidden my-8">
        <Slider {...settings}>
          <QuickNavItem icon='/image/quick-nav/1.png' text='New User Exclusive' />
          <QuickNavItem icon='/image/quick-nav/2.png' text='Leezo Super Market' />
          <QuickNavItem icon='/image/quick-nav/3.png' text='Daily Vouchers' />
          <QuickNavItem icon='/image/quick-nav/4.png' text='Leezo OODT' />
          <QuickNavItem icon='/image/quick-nav/5.png' text='Mari Bank' />
          <QuickNavItem icon='/image/quick-nav/6.png' text='100% Authentic Brands' />
          <QuickNavItem icon='/image/quick-nav/7.png' text='Electronics Zone' />
          <QuickNavItem icon='/image/quick-nav/8.png' text='Free Next Day Delivery' />
          <QuickNavItem icon='/image/quick-nav/9.png' text='Leezo Exclusive' />
        </Slider>
      </div>
    </>
  )
}

export const QuickNavItem = ({ icon, text, link = '/' }) => {
  return (
    <Link href={link} className='flex flex-col items-center gap-3 mx-2 lg:mx-auto'>
      <Image src={icon} alt={text} width={60} height={60} className='lg:w-[60px] lg:h-[60px] w-[40px] h-[40px]' />
      <p className="block text-center sm:w-[120px] text-xs sm:text-base">
        {text}
      </p>
    </Link>
  )
}

export default QuickNav
