"use client";
import { AddressModal } from "@/components/main/checkout/address";
import { shippingAddress } from "@/hooks/auth/address";
import { placeOrder } from "@/hooks/auth/orderApi";
import {
  getCart,
  getCartSummary,
  postRemoveFromCart,
} from "@/hooks/frontend/cartApi";
import { getCartHash } from "@/hooks/frontend/useCart";
import { Toggle } from "keep-react";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { FaShop } from "react-icons/fa6";
import { LuArrowLeft } from "react-icons/lu";
import { useMutation, useQuery } from "react-query";

const Checkout = () => {
  const [payment_type, setPaymentType] = useState("cash_on_delivery");
  const [payment_name, setPaymentName] = useState("Cash On Delivery");
  const [number, setNumber] = useState("");
  const [trx_id, setTrxId] = useState("");
  const [message, setMessage] = useState("");
  const session = useSession();

  const router = useRouter();
  const { data: cart, refetch } = useQuery("cart", () =>
    getCart({
      temp_user_id: getCartHash(),
    })
  );

  const { data: summary, refetch: summary_refetch } = useQuery("summary", () =>
    getCartSummary({
      temp_user_id: getCartHash(),
    })
  );

  const {
    data: addresses,
    refetch: addresses_refetch,
    isLoading: isAddressLoading,
  } = useQuery("shipping_addresses", shippingAddress);

  const { mutate: checkout, isLoading } = useMutation(placeOrder, {
    onSuccess: (data) => {
      if (data?.data?.message) {
        toast.success(data?.data?.message);
      }
      refetch();
      summary_refetch();
      router.push("/account/my-account/my-orders");
    },
    onError: (error) => {
      toast.error(error?.response?.data?.message);
    },
  });

  const { mutate: deleteCartItem, isLoading: isDeleteLoading } = useMutation(
    postRemoveFromCart,
    {
      onSuccess: (data) => {
        toast.dismiss();
        toast.success("Product removed from cart");
        refetch();
        summary_refetch();


        queryClient.invalidateQueries("cart_count");
      },
      onError: (error) => {
        toast.dismiss();
        if (error?.response?.data?.message) {
          toast.error(error?.response?.data?.message);
        } else if (error?.message) {
          toast.error(error?.response?.message);
        }
      },
    }
  );

  const handlePlaceOrder = () => {
    if (addresses?.data?.data?.length === 0) {
      toast.error("Please add shipping address");
      return;
    }

    if (cart?.data?.data?.length === 0) {
      toast.error("Please add product to cart");
      return;
    }

    if (!payment_type) {
      toast.error("Please select payment type");
      return;
    }

    checkout({ payment_type, payment_name, number, trx_id, message });
  };

  useEffect(() => {
    if (session?.status !== "authenticated") {
      router.push("/auth/login");
    }
  }, [session, router]);

  return (
    <div>
      <div className="lg:hidden mb-3 bg-white stick top-0 left-0 w-full shadow flex items-center justify-between px-4 py-3">
        <Link href={"/"}>
          <div className="flex items-center gap-3">
            <LuArrowLeft />
            Checkout
          </div>
        </Link>
      </div>
      <div className="lg:container mx-auto lg:p-6 p-3 lg:space-y-8 space-y-3">
        <div className="shadow-md bg-white">
          <div
            style={{
              backgroundImage:
                "repeating-linear-gradient(45deg,#6fa6d6,#6fa6d6 33px,transparent 0,transparent 41px,#f18d9b 0,#f18d9b 74px,transparent 0,transparent 82px)",
              backgroundPositionX: "-30px",
              backgroundSize: "116px 3px",
              height: "3px",
              width: "100%",
            }}
          />
          <div className="p-6">
            <p className="lg:text-lg text-sm flex items-center gap-2 text-orange-600 capitalize font-semibold">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="lg:size-6 size-4"
              >
                <path
                  fillRule="evenodd"
                  d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                  clipRule="evenodd"
                />
              </svg>
              delivery address
            </p>
          </div>
          <div>
            <AddressModal
              addresses={addresses?.data?.data}
              summary={summary?.data}
              refetch={addresses_refetch}
              refetchSummary={summary_refetch}
            />
          </div>
        </div>

        <div className="shadow-md">
          <div className="bg-white lg:p-6 p-3 ">
            <div className="overflow-x-auto">
              {cart?.data?.data?.map((cartParent) => (
                <table key={cartParent?.name} className="w-full table-auto">
                  <thead>
                    <tr className="text-gray-400 font-normal lg:text-sm text-xs">
                      <td className="text-left py-2 px-3">
                        <p className="lg:text-lg text-sm text-gray-800">
                          Product Ordered
                        </p>
                      </td>
                      <td className="text-left py-2 px-3">
                        <span className="min-w-max whitespace-nowrap">
                          Unit Price
                        </span>
                      </td>
                      <td className="text-left py-2 px-3">Quantity</td>
                      <td className="text-left py-2 px-3">Total</td>
                      <td className="text-right py-2 px-3">Action</td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td colSpan={4} className="py-2 px-3">
                        <p className="flex items-center gap-2 lg:text-sm text-xs">
                          <FaShop /> <span>{cartParent?.name}</span>{" "}
                          <span className="text-gray-400">|</span>
                          <Link
                            href="/chat/1"
                            className="text-green-600 flex gap-1 items-center"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              class="lg:size-5 size-3"
                            >
                              <path
                                fill="currentColor"
                                d="M18 6.07a1 1 0 01.993.883L19 7.07v10.365a1 1 0 01-1.64.768l-1.6-1.333H6.42a1 1 0 01-.98-.8l-.016-.117-.149-1.783h9.292a1.8 1.8 0 001.776-1.508l.018-.154.494-6.438H18zm-2.78-4.5a1 1 0 011 1l-.003.077-.746 9.7a1 1 0 01-.997.923H4.24l-1.6 1.333a1 1 0 01-.5.222l-.14.01a1 1 0 01-.993-.883L1 13.835V2.57a1 1 0 011-1h13.22zm-4.638 5.082c-.223.222-.53.397-.903.526A4.61 4.61 0 018.2 7.42a4.61 4.61 0 01-1.48-.242c-.372-.129-.68-.304-.902-.526a.45.45 0 00-.636.636c.329.33.753.571 1.246.74A5.448 5.448 0 008.2 8.32c.51 0 1.126-.068 1.772-.291.493-.17.917-.412 1.246-.74a.45.45 0 00-.636-.637z"
                              ></path>
                            </svg>
                            Chat Now
                          </Link>
                        </p>
                      </td>
                    </tr>

                    {cartParent?.cart_items?.map((item) => (
                      <tr key={item?.id}>
                        <td className="py-2 px-3">
                          <div className="flex items-center gap-3">
                            <div className="w-16 h-16">
                              <Image
                                src={item?.product_thumbnail_image}
                                width={100}
                                height={100}
                                alt=""
                                className="w-full h-full object-cover rounded-md"
                              />
                            </div>
                            <div>
                              <p className="text-gray-800 lg:text-sm text-xs">
                                {item?.product_name}
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="py-2 px-3">
                          <p className="text-gray-800 lg:text-sm text-xs line-through">
                            {item?.price}
                          </p>
                          <p className="text-gray-800 lg:text-sm text-xs">
                            ৳{item?.sale_price}
                          </p>
                        </td>
                        <td className="py-2 px-3">
                          <p className="text-gray-800 lg:text-sm text-xs">
                            {item?.quantity}
                          </p>
                        </td>
                        <td className="py-2 px-3">
                          <p className="text-gray-800 lg:text-sm text-xs">
                            ৳{item?.price_with_quantities}
                          </p>
                        </td>
                        <td className="py-2 px-3 text-right">
                          <p
                            onClick={() => deleteCartItem(item.id)}
                            className="text-gray-800 lg:text-sm text-xs cursor-pointer"
                          >
                            Delete
                          </p>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ))}
            </div>
          </div>
          <div className="bg-[#FAFDFF] border-t-2 border-gray-300 p-6">
            <div className="grid lg:grid-cols-2 grid-cols-1 items-start gap-6">
              <div className="flex lg:flex-row flex-col lg:items-center gap-2">
                <p className="min-w-max whitespace-nowrap">
                  Message for Seller:
                </p>
                <input
                  type="text"
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Please leave a message."
                  className="border-2 border-gray-300 p-2 w-full text-sm"
                />
              </div>
              <div className="flex lg:flex-row flex-col lg:text-sm text-xs gap-2">
                <p className="lg:text-lg text-sm min-w-max whitespace-nowrap">
                  Shipping Option:
                </p>
                <div className="w-full space-y-6">
                  <div className="flex justify-between gap-6">
                    <p>Doorstep Delivery (Overseas)</p>
                    <p>৳1.49</p>
                  </div>
                  <p className="text-gray-400 text-xs">
                    (Note: Use Free Shipping Vouchers for discounts on
                    &quot;Free Shipping Vouchers&quot; items)
                  </p>

                  <div className="flex lg:justify-end gap-2.5 items-center">
                    <p>Allow to leave at doorstep delivery</p>
                    <AiOutlineQuestionCircle />
                    <Toggle bgColor="primary" size="md" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white shadow-md p-6">
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center border-b-2 border-dashed pb-3 gap-4">
            <p className="min-w-max whitespace-nowrap lg:text-lg text-sm">
              Payment Method
            </p>

            <div className="flex items-center flex-wrap lg:gap-4 gap-2">
              <button
                onClick={() => {
                  setPaymentType("cash_on_delivery");
                  setPaymentName("Cash On Delivery");
                }}
                className={`px-4 py-1.5 border-2 ${
                  payment_type === "cash_on_delivery"
                    ? "bg-[#4F97A5] border-gray-300 text-white"
                    : "border-gray-300"
                } text-[#4F97A5] text-xs min-w-max whitespace-nowrap hover:bg-[#4F97A5] hover:text-white`}
              >
                Cash On Delivery
              </button>
              <button
                onClick={() => {
                  setPaymentType("manual_payment_bkash");
                  setPaymentName("Bkash");
                }}
                className={`px-4 py-1.5 border-2 ${
                  payment_type === "manual_payment_bkash"
                    ? "bg-[#4F97A5] border-gray-300 text-white"
                    : "border-gray-300"
                } text-[#4F97A5] text-xs min-w-max whitespace-nowrap hover:bg-[#4F97A5] hover:text-white`}
              >
                Bkash
              </button>

              <button
                onClick={() => {
                  setPaymentType("manual_payment_nagad");
                  setPaymentName("Nagad");
                }}
                className={`px-4 py-1.5 border-2 ${
                  payment_type === "manual_payment_nagad"
                    ? "bg-[#4F97A5] border-gray-300 text-white"
                    : "border-gray-300"
                } text-[#4F97A5] text-xs min-w-max whitespace-nowrap hover:bg-[#4F97A5] hover:text-white`}
              >
                Nagad
              </button>

              <button
                onClick={() => setPaymentType("manual_payment_rocket")}
                className={`px-4 py-1.5 border-2 ${
                  payment_type === "manual_payment_rocket"
                    ? "bg-[#4F97A5] border-gray-300 text-white"
                    : "border-gray-300"
                } text-[#4F97A5] text-xs min-w-max whitespace-nowrap hover:bg-[#4F97A5] hover:text-white`}
              >
                Rocket
              </button>
            </div>
          </div>

          {payment_type !== "cash_on_delivery" && (
            <div className="border-b-2 border-dashed pb-3 gap-4">
              {payment_type === "manual_payment_bkash" ? (
                <>
                  <div className="">
                    <input type="hidden" name="payment_name" value={"Bkash"} />
                    <div>
                      <p className="text-base pt-3">
                        Please complete your bakash payment at first. then fill
                        up the form below.
                      </p>
                      <h1 className="pb-3">
                        Bkash Personal Number: +88 01938111138
                      </h1>
                    </div>
                    <div>
                      <p className="text-gray-800 text-xs">
                        Enter Your Bkash Number
                      </p>
                      <input
                        type="text"
                        name="number"
                        placeholder="Enter Your Bkash Number"
                        className="border-2 border-gray-300 p-2 w-full text-sm my-2"
                        onChange={(e) => setNumber(e.target.value)}
                      />
                    </div>

                    <div>
                      <p className="text-gray-800 text-xs">
                        Enter Bkash Transaction ID
                      </p>
                      <input
                        type="text"
                        name="trx_id"
                        placeholder="Enter Bkash Transaction ID"
                        className="border-2 border-gray-300 p-2 w-full text-sm my-2"
                        onChange={(e) => setTrxId(e.target.value)}
                      />
                    </div>
                  </div>
                </>
              ) : payment_type === "manual_payment_nagad" ? (
                <>
                  <div className="">
                    <input type="hidden" name="payment_name" value={"Nagad"} />
                    <div>
                      <p className="text-base pt-3">
                        Please complete your Nagad payment at first. then fill
                        up the form below.
                      </p>
                      <h1 className="pb-3">
                        Nagad Personal Number: +88 01938111138
                      </h1>
                    </div>
                    <div>
                      <p className="text-gray-800 text-xs">
                        Enter Your Nagad Number
                      </p>
                      <input
                        type="text"
                        name="number"
                        placeholder="Enter Nagad number"
                        className="border-2 border-gray-300 p-2 w-full text-sm my-2"
                        onChange={(e) => setNumber(e.target.value)}
                      />
                    </div>

                    <div>
                      <p className="text-gray-800 text-xs">
                        Enter Transaction ID
                      </p>
                      <input
                        type="text"
                        name="trx_id"
                        placeholder="Enter Nagad Transaction ID"
                        className="border-2 border-gray-300 p-2 w-full text-sm my-2"
                        onChange={(e) => setTrxId(e.target.value)}
                      />
                    </div>
                  </div>
                </>
              ) : payment_type === "manual_payment_rocket" ? (
                <>
                  <div className="">
                    <input type="hidden" name="payment_name" value={"Rocket"} />
                    <div>
                      <p className="text-base pt-3">
                        Please complete your Rocket payment at first. then fill
                        up the form below.
                      </p>
                      <h1 className="pb-3">
                        Rocket Personal Number: +88 01938111138
                      </h1>
                    </div>
                    <div>
                      <p className="text-gray-800 text-xs">
                        Enter Your Rocket Number
                      </p>
                      <input
                        type="text"
                        name="number"
                        placeholder="Enter Rocket number"
                        className="border-2 border-gray-300 p-2 w-full text-sm my-2"
                        onChange={(e) => setNumber(e.target.value)}
                      />
                    </div>

                    <div>
                      <p className="text-gray-800 text-xs">
                        Enter Transaction ID
                      </p>
                      <input
                        type="text"
                        name="trx_id"
                        placeholder="Enter Rocket Transaction ID"
                        className="border-2 border-gray-300 p-2 w-full text-sm my-2"
                        onChange={(e) => setTrxId(e.target.value)}
                      />
                    </div>
                  </div>
                </>
              ) : null}
            </div>
          )}
          <div className="grid lg:grid-cols-4 grid-cols-1 gap-6 lg:py-6 py-3 p-6">
            <div className="lg:col-span-3"></div>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <p>Merchandise Subtotal:</p>
                <p>{summary?.data?.sub_total ? summary?.data?.sub_total : 0}</p>
              </div>
              <div className="flex justify-between">
                <p>Shipping Total:</p>
                <p>{summary?.data?.shipping_cost ? summary?.data?.shipping_cost : 0}</p>
              </div>
              {summary?.data?.coupon_applied && (
                <div className="flex justify-between">
                  <p>Voucher Discount:</p>
                  <p>{summary?.data?.coupon_discount ? summary?.data?.coupon_discount : 0}</p>
                </div>
              )}
              <div className="flex justify-between">
                <p>Payment Discount:</p>
                <p>{summary?.data?.discount ? summary?.data?.discount : 0}</p>
              </div>
              <div className="flex justify-between">
                <p>Total Payment:</p>
                <p className="text-[#4F97A5] text-xl">
                  {summary?.data?.grand_total ? summary?.data?.grand_total : 0}
                </p>
              </div>
              {/* <p className="text-right text-gray-400 text-xs flex gap-3 items-center justify-end">
                GST included, where applicable.
                <AiOutlineQuestionCircle />
              </p> */}

              <button
                disabled={
                  addresses?.data?.data?.length == 0 || isAddressLoading
                }
                onClick={handlePlaceOrder}
                className="w-full bg-[#4F97A5] text-white text-sm py-2.5 rounded-md"
              >
                {isLoading ? "Ordering..." : "Place Order"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
