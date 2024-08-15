import ChatBox from "@/components/common/chatbox";
import CategoriesListing from "@/components/main/categories-listing";
import CategoryContainer from "@/components/main/category-container";
import DailyDiscover from "@/components/main/daily-discover";
import FlashSale from "@/components/main/flash-sale";
import MallContainer from "@/components/main/mall-container";
import PopUpModal from "@/components/main/pop-up-modal";
import QuickNav from "@/components/main/quick-nav";
import SliderSection from "@/components/main/slider-section";
import TopProducts from "@/components/main/top-products";
import Image from "next/image";

export default function Home() {
  return (
    <main className="pb-20">
      <PopUpModal/>
      <div className="hidden sm:block">
        <div className="container p-6 space-y-6">
          <SliderSection />
          <QuickNav />
        </div>
        <section className="bg-[#F5F5F5]">
          <div className="container p-6 space-y-6">
            {/* <Image
              src="/image/promo/new.png"
              alt="New User Promo"
              width={1000}
              height={400}
              className="w-full h-auto"
            /> */}
            <CategoryContainer />
            <FlashSale />
            <Image
              src="/image/promo/super.jpeg"
              alt="Super Offer"
              width={1000}
              height={400}
              className="w-full h-auto"
            />
            {/* <MallContainer /> */}
            <TopProducts />
            <DailyDiscover />
          </div>
        </section>
        <CategoriesListing />
        <ChatBox />
      </div>

      <div className="sm:hidden">
        <SliderSection />
        <QuickNav />
        {/* <Image
          src="/image/promo/phone/promo.jpg"
          alt="New User Promo"
          width={1000}
          height={400}
          className="w-full h-auto"
        /> */}
        <section className="bg-[#F5F5F5] py-3">
          <FlashSale />
          <TopProducts />
          <MallContainer />
          <CategoryContainer />
          <DailyDiscover />
        </section>
      </div>
    </main>
  );
}
