"use client";
import ProductGallery from "@/components/main/product-gallery";
import { postAddToCart } from "@/hooks/frontend/cartApi";
import { setCartHash } from "@/hooks/frontend/useCart";
import FlipCountdown from "@rumess/react-flip-countdown";
import { NumberInput } from "keep-react";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { Minus, Plus, Spinner } from "phosphor-react";
import { useState } from "react";
import toast from "react-hot-toast";
import { BsCartPlus, BsShieldFillCheck } from "react-icons/bs";
import { CiDeliveryTruck } from "react-icons/ci";
import { FaArrowAltCircleDown, FaRegHeart } from "react-icons/fa";
import {
  FaFacebook,
  FaFacebookMessenger,
  FaPinterest,
  FaXTwitter,
} from "react-icons/fa6";
import { RiSecurePaymentLine } from "react-icons/ri";
import { useMutation, useQueryClient } from "react-query";
import { Divider, Rate, Tooltip, Whisper } from "rsuite";

const images = [
  "/image/product/shoe1.jpeg",
  "/image/product/shoe2.jpeg",
  "/image/product/shoe3.jpeg",
  "/image/product/shoe4.jpeg",
  "/image/product/shoe5.jpeg",
];

const sizes = [39, 40, 41, 42, 43, 44];

const ProductDetails = ({ product }) => {
  const [activeImage, setActiveImage] = useState(0);
  const [variant, setVariant] = useState({});
  const [selectedSize, setSelectedSize] = useState(sizes[0]);
  const [quantity, setQuantity] = useState(0);
  const params = useSearchParams();
  const isFlashSale = Boolean(params.get("flashSale"));
  const session = useSession();
  const [isBuyNow, setIsBuyNow] = useState(false);
  const router = useRouter();

  const queryClient = useQueryClient();

  const { mutate, isLoading } = useMutation(postAddToCart, {
    onSuccess: async (data) => {
      if (data?.data?.message) {
        toast.success(data?.data?.message);
        setQuantity(0);
        setVariant({});
        setCartHash(data?.data?.temp_user_id);
        // refetch query for cart count with query id: cart_count
        queryClient.invalidateQueries("cart_count");

        if (isBuyNow) {
          setIsBuyNow(false);
          if (session?.status === "authenticated") {
            router.push("/checkout");
          } else {
            toast.error("Please login first");
            router.push("/auth/login");
          }
        }
      } else {
        toast.error(data?.message);
      }
    },
    onError: (error) => {
      if (error?.response?.data?.message) {
        toast.error(error?.response?.data?.message);
      } else if (error?.message) {
        toast.error(error?.response?.message);
      }
    },
  });

  const handleAddToCart = () => {
    // console.log(variant);
    if (quantity === 0) {
      toast.error("Please select quantity");
      return;
    }

    if (!variant) {
      toast.error("Please select variant");
      return;
    }

    let obj = {
      id: product?.id,
      quantity,
      cost_matrix: true,
    };

    if (localStorage.getItem("cart_hash")) {
      obj.temp_user_id = JSON.parse(localStorage.getItem("cart_hash"));
    }

    const variantSelections = [];

    // Loop through each variant type and join the ids with a hyphen
    for (const variantType in variant) {
      const ids = variant[variantType];
      if (variantType != "color") {
        variantSelections.push(ids.join("-"));
      }
    }

    // add something top of the array
    if (variant?.["color"] && variant?.["color"]?.length != 0) {
      variantSelections.unshift(variant?.["color"].join("-"));
    }
    // Join all the variant selections with a hyphen
    const variantString = `${variantSelections.join("-")}`;

    if (variantString) {
      obj.variant = variantString;
    }

    if (session?.data?.user) {
      obj.user_id = session.data?.user?.id;
    }

    mutate(obj);
  };

  const handleVariant = (id, name) => {
    setVariant((prevState) => {
      // Create a new object based on the previous state
      const newVariant = { ...prevState };

      // If the variant type already exists in the state, update the array
      if (newVariant[id]) {
        // If the id is already selected, remove it from the array (unselect it)
        if (newVariant[id].includes(name.toString())) {
          newVariant[id] = newVariant[id].filter((item) => item !== name);
        } else {
          // Otherwise, add the new id to the array (select it)
          newVariant[id] = [name.toString()];
        }
      } else {
        // If the variant type doesn't exist, create a new array with the id
        newVariant[id] = [name.toString()];
      }
      // Return the updated state
      return newVariant;
    });
  };

  return (
    <div className="bg-white shadow p-6 rounded">
      <div className="grid grid-cols-5 gap-6">
        <div className="col-span-2 space-y-6">
          <ProductGallery
            images={product?.photos}
            setActiveImage={setActiveImage}
            activeImage={activeImage}
          />

          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              Share:
              <Link href="/" className="text-[#006AFF]">
                <FaFacebookMessenger />
              </Link>
              <Link href="/" className="text-[#1877F2]">
                <FaFacebook />
              </Link>
              <Link href="/" className="text-[#E60023]">
                <FaPinterest />
              </Link>
              <Link href="/">
                <FaXTwitter />
              </Link>
            </div>
            <div className="flex items-center gap-2">
              <FaRegHeart />
              Favorite (216)
            </div>
          </div>
        </div>
        <div className="col-span-3 space-y-4 p-8">
          <h4 className="text-xl">
            {isFlashSale && (
              <Image
                src="/image/icon/mall.svg"
                width={30}
                height={12}
                alt=""
                className="inline-block h-auto -mt-1"
              />
            )}{" "}
            {product?.name}
          </h4>

          <div className="flex justify-between items-center">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <span className="underline text-red-600">
                  {product?.rating}
                </span>
                <Rate
                  value={product?.rating}
                  readOnly
                  allowHalf
                  color="red"
                  size="xs"
                />
              </div>
              <Divider vertical />
              <div className="flex items-center text-gray-600 gap-2">
                <span className="underline">{product?.rating_count}</span>
                Ratings
              </div>
              <Divider vertical />
              <div className="flex items-center text-gray-600 gap-2">
                <span className="">{product?.sales}</span>
                Sold
                <Whisper
                  placement="auto"
                  controlId="control-id-hover"
                  trigger="hover"
                  speaker={
                    <Tooltip>
                      245 sold in Singapore <br />
                      288 sold globally* <br />
                      *This product is also sold in other regions on{" "}
                      <strong>LeezoBD</strong> platform
                    </Tooltip>
                  }
                >
                  {/* <Button>Hover</Button> */}
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
                      d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
                    />
                  </svg>
                </Whisper>
              </div>
            </div>
            <Link href="/" className="text-gray-500 hover:text-gray-600">
              Report
            </Link>
          </div>

          {isFlashSale ? (
            <div className="bg-gray-50">
              <div
                className="flex items-center justify-between p-2 px-4 bg-cover bg-center"
                style={{
                  backgroundImage: 'url("/image/flash-bg.jpg")',
                }}
              >
                <Image
                  src="/image/icon/flash-sale-light.svg"
                  alt=""
                  width={50}
                  height={20}
                  className="h-[20px] w-auto"
                />

                <div className="flex items-center gap-2">
                  <p className="flex items-center gap-1 text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                      />
                    </svg>
                    <span>Ends in</span>
                  </p>
                  <div>
                    <FlipCountdown
                      endAt={"2024-12-12 01:26:58"} // Date/Time
                      theme="dark"
                      titlePosition="bottom"
                      size="extra-small"
                      endAtZero
                      hideYear
                      hideMonth
                      hideDay
                    />
                  </div>
                </div>
              </div>
              <div className="p-4">
                <div className="flex gap-3 items-center">
                  <p className="text-gray-400 line-through">$26.16</p>
                  <h5 className="text-2xl text-[#4F97A5]">$16.35</h5>
                  <p className="bg-orange-500 px-2 py-0.5 text-xs text-white">
                    61% off
                  </p>
                </div>
                <div className="flex gap-3 items-center my-3 text-red-500">
                  <BsShieldFillCheck size={20} />
                  <div className="space-y-1">
                    <p className="text-sm">LeezoBD Mall | 100% Authentic</p>
                    <p className="text-xs text-gray-500">
                      Guaranteed Authentic or 2x Money Back
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-gray-100 p-4 rounded flex gap-3 items-center">
              <p className="text-gray-400 line-through">
                {product?.stroked_price}
              </p>
              <h5 className="text-xl text-[#4F97A5]">
                {product?.price_high_low}
              </h5>
              <p className="bg-orange-500 px-2 py-0.5 text-xs text-white">
                {product?.discount}
              </p>
            </div>
          )}

          {isFlashSale && (
            <div className="grid grid-cols-4 items-center gap-4">
              <div>
                <p className="text-gray-500">Shop Vouchers</p>
              </div>
              <div className="col-span-3">
                <div className="flex justify-between items-center">
                  <div className="flex gap-2">
                    <button className="py-1 px-2 bg-orange-100 text-orange-600 text-xs">
                      $13 OFF
                    </button>
                    <button className="py-1 px-2 bg-orange-100 text-orange-600 text-xs">
                      $11 OFF
                    </button>
                    <button className="py-1 px-2 bg-orange-100 text-orange-600 text-xs">
                      $9 OFF
                    </button>
                    <button className="py-1 px-2 bg-orange-100 text-orange-600 text-xs">
                      $4 OFF
                    </button>
                  </div>
                  <div className="flex gap-2 text-orange-600 items-center">
                    <p className="text-sm">See All</p>
                    <FaArrowAltCircleDown size={14} />
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="grid grid-cols-4 items-center gap-4">
            <div>
              <p className="text-gray-500">Return</p>
            </div>
            <div className="col-span-3">
              <div className="flex gap-2 text-gray-500 items-center">
                <svg
                  width="26"
                  height="26"
                  className="h-4 w-4"
                  viewBox="0 0 26 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M13 26C20.1797 26 26 20.1797 26 13C26 5.8203 20.1797 0 13 0C5.8203 0 0 5.8203 0 13C0 20.1797 5.8203 26 13 26ZM6.31711 9.19194L10.2387 6.09101C10.5429 5.85045 10.9807 6.12114 10.9036 6.50211L10.447 8.75904H14.3137C18.8627 8.75904 20 12.506 20 14.3795C20 16.253 18.8627 20 14.3137 20H9.97449C9.35606 20 8.8548 19.4967 8.8548 18.8759C8.8548 18.2551 9.35614 17.7518 9.97457 17.7518H14.3137C15.0718 17.7518 17.7255 17.0774 17.7255 14.3795C17.7255 11.6817 15.0718 11.0072 14.3137 11.0072H10.447L10.8787 12.8562C10.9661 13.2306 10.5456 13.5145 10.2332 13.2921L6.35075 10.5291C5.89747 10.2066 5.88063 9.53709 6.31711 9.19194Z"
                    fill="#4F97A5"
                  />
                </svg>
                <p>Free Returns</p>
                <p>No Questions Asked*</p>
                <Whisper
                  placement="auto"
                  controlId="return-help"
                  trigger="hover"
                  speaker={
                    <Tooltip>
                      Changed your mind about your purchase? Request for a free
                      return within 15 days from the date of delivery and
                      receive a refund, no questions asked*. Applicable to
                      selected items.{" "}
                      <Link href="/" className="text-blue-500">
                        T&Cs apply.
                      </Link>
                    </Tooltip>
                  }
                >
                  {/* <Button>Hover</Button> */}
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
                      d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
                    />
                  </svg>
                </Whisper>
              </div>
            </div>
          </div>
          {!isFlashSale && (
            <div className="grid grid-cols-4 items-center gap-4">
              <div>
                <p className="text-gray-500">Bundle Deals</p>
              </div>
              <div className="col-span-3">
                <button className="px-4 py-1 border border-orange-500 text-[#4F97A5]">
                  Any 2 enjoy $0.20 off
                </button>
              </div>
            </div>
          )}
          {isFlashSale && (
            <div className="grid grid-cols-4 items-center gap-4">
              <div>
                <p className="text-gray-500">Add-On</p>
              </div>
              <div className="col-span-3">
                <button className="py-1 px-2 bg-orange-100 text-orange-600 text-xs">
                  Free Gift
                </button>
              </div>
            </div>
          )}

          <div className="grid grid-cols-4 items-center gap-4">
            <div>
              <p className="text-gray-500">Protection</p>
            </div>
            <div className="col-span-3">
              <div className="flex items-center gap-2 text-sm">
                <p className="text-gray-800">Damage Protection</p>
                <p className="bg-orange-500 px-2 py-0.5 text-xs text-white rounded-full rounded-bl-none">
                  New
                </p>

                <Link href="/" className="text-blue-500">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
          {isFlashSale ? (
            <div className="grid grid-cols-4 gap-4">
              <div>
                <p className="text-gray-500">Shipping</p>
              </div>
              <div className="col-span-3">
                <div className="flex items-center gap-2 text-xs mb-3">
                  <Image
                    src="/image/free-shipping.jpg"
                    alt=""
                    width={98}
                    height={52}
                    className="h-5 w-auto"
                  />
                  <div>
                    <p className="font-semibold">Free Shipping</p>
                    <p>Free shipping for orders over $65.00</p>
                  </div>
                </div>
                <div className="flex gap-2 items-center text-sm">
                  <CiDeliveryTruck size={18} />
                  <div className="flex gap-8 text-gray-500">
                    <div className="flex">
                      <p>Shipping fee</p>
                    </div>
                    <div>
                      <Whisper
                        placement="auto"
                        controlId="control-id-hover"
                        trigger="hover"
                        speaker={
                          <Tooltip className="bg-white text-gray-500 border shadow min-w-3xl">
                            <div className="p-4 text-sm">
                              <div className="flex justify-between gap-12">
                                <p className="min-w-max">Doorstep Delivery</p>
                                <p>
                                  <span className="text-[#4F97A5]">$0.00</span>
                                </p>
                              </div>
                            </div>
                          </Tooltip>
                        }
                      >
                        <p className="flex items-center gap-2">
                          <span className="hover:text-[#4F97A5]">$0.00</span>{" "}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            enableBackground="new 0 0 11 11"
                            view-box="0 0 11 11"
                            x="0"
                            y="0"
                            width="11"
                            height="11"
                            fill="#636363"
                          >
                            <g>
                              <path d="m11 2.5c0 .1 0 .2-.1.3l-5 6c-.1.1-.3.2-.4.2s-.3-.1-.4-.2l-5-6c-.2-.2-.1-.5.1-.7s.5-.1.7.1l4.6 5.5 4.6-5.5c.2-.2.5-.2.7-.1.1.1.2.3.2.4z" />
                            </g>
                          </svg>
                        </p>
                      </Whisper>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-4 items-center gap-4">
              <div>
                <p className="text-gray-500">Shipping</p>
              </div>
              <div className="col-span-3">
                <div className="flex gap-2 text-sm">
                  <svg
                    className="mt-1"
                    xmlns="http://www.w3.org/2000/svg"
                    enableBackground="new 0 0 18 18"
                    view-box="0 0 18 18"
                    height="18"
                    width="18"
                    stroke="#000"
                  >
                    <path
                      d="m15 4s2.7-1.1 2.5 2c-1.8.7-5.6 2.6-5.6 2.6l-2.8 5.1-2.1 1.3 1.7-5-6.7 3v-2l-1.5-2 1.2-.9 1.6 1.6 2.5-1.3-2.8-2.4 2-1 3.3 2.2z"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>

                  <div className="flex gap-8 text-gray-500">
                    <div>
                      <p className="mb-2">Shipping time</p>
                      <p>Shipping fee</p>
                    </div>
                    <div>
                      <p className="mb-2">{product?.est_shipping_time} Days</p>
                      <Whisper
                        placement="auto"
                        controlId="control-id-hover"
                        trigger="hover"
                        speaker={
                          <Tooltip className="bg-white text-gray-500 border shadow">
                            <div className="p-4 text-sm">
                              <div className="flex justify-between gap-12">
                                <p className="min-w-max">Doorstep Delivery</p>
                                <p>
                                  {product?.shipping_type == "free"
                                    ? "Free"
                                    : product?.est_shipping_cost}
                                </p>
                              </div>
                            </div>
                          </Tooltip>
                        }
                      >
                        <p className="flex items-center gap-2">
                          <span className="hover:text-[#4F97A5]">
                            {" "}
                            {product?.shipping_type == "free"
                              ? "Free"
                              : product?.est_shipping_cost}
                          </span>{" "}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            enableBackground="new 0 0 11 11"
                            view-box="0 0 11 11"
                            x="0"
                            y="0"
                            width="11"
                            height="11"
                            fill="#636363"
                          >
                            <g>
                              <path d="m11 2.5c0 .1 0 .2-.1.3l-5 6c-.1.1-.3.2-.4.2s-.3-.1-.4-.2l-5-6c-.2-.2-.1-.5.1-.7s.5-.1.7.1l4.6 5.5 4.6-5.5c.2-.2.5-.2.7-.1.1.1.2.3.2.4z" />
                            </g>
                          </svg>
                        </p>
                      </Whisper>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {product?.colors?.length != 0 && (
            <div className="grid grid-cols-4 items-center gap-4">
              <div>
                <p className="text-gray-500">Color</p>
              </div>
              <div className="col-span-3">
                <div className="grid grid-cols-2 gap-2 text-sm">
                  {product?.colors?.map((color) => (
                    <button
                      key={color?.id}
                      className={`border p-2 flex gap-1 word-break hover:border-orange-500 ${
                        variant?.["color"] &&
                        variant?.["color"]?.length != 0 &&
                        variant?.["color"] == color?.name &&
                        "border-orange-500"
                      }`}
                      onClick={() => handleVariant("color", color?.name)}
                      onMouseOver={() => {
                        const findIndex = product?.photos?.findIndex(
                          (photo) => photo?.variant == color?.name
                        );
                        if (findIndex != -1) setActiveImage(findIndex);
                      }}
                    >
                      {product?.photos?.filter(
                        (photo) => photo?.variant == color?.name
                      )?.[0] && (
                        <Image
                          width={25}
                          height={25}
                          src={
                            product?.photos?.filter(
                              (photo) => photo?.variant == color?.name
                            )?.[0]?.path
                          }
                          alt=""
                        />
                      )}
                      {color?.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {product?.choice_options?.length != 0
            ? product?.choice_options?.map((choice, key) => (
                <div key={key} className="grid grid-cols-4 items-center gap-4">
                  <div>
                    <p className="text-gray-500">{choice?.title}</p>
                  </div>
                  <div className="col-span-3">
                    <div className="flex gap-2 text-sm">
                      {choice?.options.map((option) => (
                        <button
                          onClick={() => handleVariant(choice?.name, option)}
                          key={option}
                          className={`border px-4 py-1 flex gap-2 ${
                            variant?.[choice?.name] &&
                            variant?.[choice?.name]?.length != 0 &&
                            variant?.[choice?.name] == option &&
                            "border-orange-500 text-[#4F97A5]"
                          }`}
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              ))
            : null}
          <div className="grid grid-cols-4 items-center gap-4">
            <div>
              <p className="text-gray-500">Quantity</p>
            </div>
            <div className="col-span-3">
              <div className="flex gap-4 items-center text-sm">
                <NumberInput>
                  <NumberInput.Button
                    disabled={quantity === 0}
                    onClick={() => {
                      if (product?.current_stock > 0)
                        setQuantity((prev) => prev - 1);
                    }}
                  >
                    <Minus size={16} color="#455468" />
                  </NumberInput.Button>
                  <NumberInput.Input
                    className="w-16"
                    min={0}
                    max={100}
                    value={quantity}
                    onChange={(e) => setQuantity(+e.target.value)}
                  />
                  <NumberInput.Button
                    disabled={quantity === 100}
                    onClick={() => {
                      if (product?.current_stock > quantity)
                        setQuantity((prev) => prev + 1);
                    }}
                  >
                    <Plus size={16} color="#455468" />
                  </NumberInput.Button>
                </NumberInput>
                <p className="text-gray-500">
                  {product?.current_stock} piece available
                </p>
              </div>
            </div>
          </div>

          <div className="flex gap-6 pt-6">
            <button
              disabled={isLoading}
              onClick={handleAddToCart}
              className="bg-orange-100 border border-orange-500 text-[#4F97A5] px-8 py-2 flex justify-center items-center gap-2"
            >
              {isLoading ? (
                <>Adding...</>
              ) : (
                <>
                  <BsCartPlus /> Add To Cart
                </>
              )}
            </button>
            <button
              disabled={isLoading}
              onClick={(e) => {
                handleAddToCart(e);
                setIsBuyNow(true);
              }}
              className="bg-orange-500 border border-orange-500 text-white px-8 py-2"
            >
              Buy Now
            </button>
          </div>
          <Divider />
          <div className="flex items-center gap-4 text-sm">
            <p className="flex items-center gap-2">
              <span className="text-[#4F97A5]">
                <RiSecurePaymentLine size={24} />
              </span>
              LeezoBD Guarantee
            </p>
            <p className="text-ray-500">
              Get the items you ordered or get your money back.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
