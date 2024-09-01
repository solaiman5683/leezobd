import CartContent from "@/components/main/cart/cart-content";
import Link from "next/link";
import { LuArrowLeft } from "react-icons/lu";

const CardPage = () => {
  return (
    <>
      <div className="sm:block hidden container p-6 space-y-8">
        <CartContent />
        {/* <RelatedProduct /> */}
      </div>

      <div className="sm:hidden space-y-3 relative">
        <div className="bg-white stick top-0 left-0 w-full shadow flex items-center justify-between px-4 py-3">
          <Link href={'/'}>
            <div className="flex items-center gap-3">
              <LuArrowLeft />
              Shopping Cart
            </div>
          </Link>
        </div>
        <CartContent />
        {/* <RelatedProduct /> */}
      </div>
    </>
  );
};

export default CardPage;
