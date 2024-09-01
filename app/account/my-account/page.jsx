"use client";

import { getUserWishlist, purchaseHistory } from "@/hooks/auth/purchaseApi";
import { getUserByToken, postUpdateProfileImage } from "@/hooks/user/user";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BsCalendar2Check, BsChatLeftDots } from "react-icons/bs";
import { CiCreditCard2 } from "react-icons/ci";
import { FaUserEdit } from "react-icons/fa";
import { IoHomeOutline, IoSettingsOutline } from "react-icons/io5";
import { LiaShippingFastSolid } from "react-icons/lia";
import { LuCalendarX2 } from "react-icons/lu";
import { PiKeyReturnLight } from "react-icons/pi";
import { useMutation, useQuery } from "react-query";

/* eslint-disable @next/next/no-img-element */

const MyAccountPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const [formdata, setFormdata] = useState({
    username: "",
    name: "",
    email: "",
    password: "",
    repeatPassword: "",
    avatar: "",
    gender: "",
    date_of_birth: "",
  });

  const { data: orders } = useQuery("purchase_history", () =>
    purchaseHistory()
  );

  const { data: wishlists } = useQuery("wishlists", () => getUserWishlist());
  // console.log(orders?.data?.data.length)

  const {
    data: user,
    isLoading: loading,
    refetch,
  } = useQuery("user", () => getUserByToken());

  useEffect(() => {
    if (user?.data) {
      setFormdata({
        username: user?.data?.email,
        name: user?.data?.name,
        email: user?.data?.email,
        phone: user?.data?.phone,
        password: "",
        repeatPassword: "",
        avatar: user?.data?.avatar_original,
        gender: user?.data?.gender,
        date_of_birth: user?.data?.date_of_birth,
      });
    }
  }, [user]);

  const { isLoading: Loading, mutate: uploadImage } = useMutation(
    postUpdateProfileImage,
    {
      onSuccess: (data) => {
        if (data?.data?.message) {
          toast.success(data?.data?.message);
          refetch();
        } else {
          console.log(data?.message);
          toast.error(data?.message);
        }
      },
      onError: (error) => {
        if (error?.response?.data?.message) {
          toast.error(error?.response?.data?.message);
        } else {
          toast.error(error?.message);
        }
      },
    }
  );

  const handleFileChange = async (e) => {
    const formData = new FormData();
    const file = e.target.files[0];

    if (file) {
      setSelectedImage(URL.createObjectURL(file));
    }

    formData.append("image", file);

    try {
      const response = await uploadImage(formData);
    } catch (error) {
      toast.error("Failed to upload image");
    }
  };

  return (
    <>
      <h1 className="text-xl font-bol text-gray-500 hidden lg:block text-center py-16">
        Hello, {formdata.name}, Welcome to your account!
      </h1>
      <div className="sm:hidden">
        <div className="bg-[#4F97A5] text-white p-6">
          <div className="flex justify-between items-start">
            <div className="flex items-center gap-3">
              <label htmlFor="file-input" className="cursor-pointer">
                <input
                  onChange={handleFileChange}
                  type="file"
                  id="file-input"
                  className="hidden"
                />

                {formdata?.avatar ? (
                  <div className="h-12 w-12 rounded-full">
                    <img
                      src={formdata?.avatar}
                      className="w-full h-full object-center overflow-hidden rounded-full"
                      alt=""
                    />
                  </div>
                ) : (
                  <span className="h-11 w-11 border  rounded-full flex items-center justify-center">
                    <FaUserEdit color="white" />
                  </span>
                )}
              </label>

              <div className="text-white">
                <p className="text-sm font-bold">{formdata.name}</p>
                <p className="text-xs">{formdata.email}</p>
              </div>
            </div>

            <div className="flex items-center justify-center gap-2.5">
              <Link href={"/account/my-account/edit-profile"}>
                <button className="text-white flex items-center justify-center pt-2.5">
                  <IoSettingsOutline size={26} />
                </button>
              </Link>
              <Link href={"/"}>
                <button className="text-white flex items-center justify-center pt-2">
                  <IoHomeOutline size={26} />
                </button>
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3 mt-6 text-white">
            <Link
              href="/account/my-account/my-wishlist"
              className="text-center"
            >
              <div className="font-bold text-lg">
                {wishlists?.data?.data.length}
              </div>
              <div className="text-sm">My Wishlist</div>
            </Link>
            <Link href="/account/my-account/my-orders" className="text-center">
              <div className="font-bold text-lg">
                {orders?.data?.data.length}
              </div>
              <div className="text-sm">My Orders</div>
            </Link>
            <Link href="/account/my-account/vouchers" className="text-center">
              <div className="font-bold text-lg">0</div>
              <div className="text-sm">Vouchers</div>
            </Link>
          </div>
        </div>
        <div className="space-y-3 p-4">
          <div className="flex items-center justify-between my-3">
            <p className="text-sm">My Orders</p>
            <Link
              href="/account/my-account/my-orders"
              className="text-sm text-[#4F97A5] flex items-center gap-1 hover:underline"
            >
              View All
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
            </Link>
          </div>
          <div className="grid grid-cols-4 gap-3 my-3">
            <Link
              href="/account/my-account/my-orders?type=pending"
              className="flex flex-col items-center space-y-0.5 justify-between"
            >
              <CiCreditCard2 size={30} />
              <p className="text-sm">Pending</p>
            </Link>
            <Link
              href="/account/my-account/my-orders?type=confirmed"
              className="flex flex-col items-center space-y-0.5 justify-between"
            >
              <BsCalendar2Check size={20} className="mt-1.5" />
              <p className="text-sm">Confirmed</p>
            </Link>
            <Link
              href="/account/my-account/my-orders?type=picked-up"
              className="flex flex-col items-center space-y-0.5 justify-between"
            >
              <LiaShippingFastSolid size={30} />
              <p className="text-sm">Picked Up</p>
            </Link>
            <Link
              href="/account/my-account/my-orders?type=on-the-way"
              className="flex flex-col items-center space-y-0.5 justify-between"
            >
              <BsChatLeftDots size={20} className="mt-1.5" />
              <p className="text-sm">On the way</p>
            </Link>
          </div>
        </div>
        <div className="flex justify-around gap-6 py-6 bg-white text-gray-800">
          <Link
            href="/account/my-account/my-orders/my-returns"
            className="flex items-center gap-2"
          >
            <PiKeyReturnLight size={30} />
            <p>My Returns</p>
          </Link>
          <Link
            href="/account/my-account/my-orders/my-cancellations"
            className="flex items-center gap-2"
          >
            <LuCalendarX2 size={22} />
            <p>My Cancellations</p>
          </Link>
        </div>
        {/* <TrackPackages /> */}
        {/* <div className="space-y-3 p-4">
          <div className="flex items-center justify-between my-3">
            <p className="text-sm">My Services</p>
          </div>
          <div className="grid grid-cols-3 gap-4 my-3">
            <Link
              href="/"
              className="flex flex-col items-center space-y-0.5 justify-between text-center"
            >
              <TbMessage2 size={30} />
              <p className="text-sm">My Messages</p>
            </Link>
            <Link
              href="/"
              className="flex flex-col items-center space-y-0.5 justify-between text-center"
            >
              <RiSecurePaymentLine size={30} />
              <p className="text-sm">Payment Options</p>
            </Link>
            <Link
              href="/"
              className="flex flex-col items-center space-y-0.5 justify-between text-center"
            >
              <FiHelpCircle size={30} />
              <p className="text-sm">Help Center</p>
            </Link>
            <Link
              href="/"
              className="flex flex-col items-center space-y-0.5 justify-between text-center"
            >
              <PiChats size={30} />
              <p className="text-sm">To Review</p>
            </Link>
            <Link
              href="/"
              className="flex flex-col items-center space-y-0.5 justify-between text-center"
            >
              <MdOutlineRateReview size={30} />
              <p className="text-sm">My Reviews</p>
            </Link>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default MyAccountPage;
