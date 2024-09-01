"use client";

import { useState } from "react";

import { Checkbox, NumberInput } from "keep-react";
import Image from "next/image";
import Link from "next/link";
import { Minus, Plus } from "phosphor-react";
import { FaAngleRight, FaCaretDown } from "react-icons/fa6";
import { useMutation, useQuery, useQueryClient } from "react-query";
import {
  getCart,
  postCartProcess,
  postChangeQuantity,
  postRemoveFromCart,
} from "@/hooks/frontend/cartApi";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { getCartHash } from "@/hooks/frontend/useCart";
import { useSession } from "next-auth/react";

const CartContent = () => {
  const [selectedItems, setSelectedItems] = useState([]);
  const router = useRouter();
  const queryClient = useQueryClient();
  const session = useSession();

  const { data: cart, refetch } = useQuery("cart", () =>
    getCart({
      temp_user_id: getCartHash(),
    })
  );

  const { isLoading: isQuantityLoading, mutate } = useMutation(
    postChangeQuantity,
    {
      onSuccess: (data) => {
        toast.dismiss();
        if (data?.data?.message) {
          toast.success(data?.data?.message);
        } else {
          toast.error(data?.message);
        }
        refetch();
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

  const { mutate: deleteCartItem, isLoading: isDeleteLoading } = useMutation(
    postRemoveFromCart,
    {
      onSuccess: (data) => {
        toast.dismiss();
        if (data?.data?.message) {
          toast.success(data?.data?.message);
        } else {
          toast.error(data?.message);
        }
        refetch();

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

  const { mutate: processToCheckout, isLoading: isProcessLoading } =
    useMutation(postCartProcess, {
      onSuccess: (data) => {
        toast.dismiss();
        if (data?.data?.message) {
          if (session?.status === "authenticated") {
            toast.success(data?.data?.message);
            router.push("/checkout");
          } else {
            toast.success("Please login to access checkout!");
            router.push("/auth/login");
          }
        } else {
          toast.error(data?.message);
        }
      },
      onError: (error) => {
        toast.dismiss();
        if (error?.response?.data?.message) {
          toast.error(error?.response?.data?.message);
        } else if (error?.message) {
          toast.error(error?.response?.message);
        }
      },
    });

  const cart_items = cart?.data?.data?.[0]?.cart_items;

  const handleProcessToCheckout = () => {
    const cart_ids = cart_items?.map((item) => item?.id).join(",");
    const cart_quantities = cart_items?.map((item) => item?.quantity).join(",");

    processToCheckout({
      cart_ids,
      cart_quantities,
    });
  };
  return (
    <>
      <div className="sm:block hidden">
        <div className="flex items-center border border-[#de9f82] my-4 gap-2 px-4 py-3 bg-[#fffdf8]">
          {/* <div className="max-w-10 h-auto ">
            <Image
              className="w-full h-full object-cover "
              src="/image/card/free.png"
              width={100}
              height={100}
              alt="img"
            />
          </div>
          <h1 className="font-medium text-gray-600 text-sm">
            Stack Free Shipping Vouchers with Shopee and Shop Vouchers to enjoy
            maximum savings
          </h1> */}
        </div>
        <div className="flex items-center justify-between bg-white shadow py-3 px-6">
          <div className="w-2/4 flex items-center gap-4">
            <Checkbox
            // checked={
            //   selectedItems?.length === cartItems.length &&
            //   cartItems.length > 0
            // }
            // onChange={() => {
            //   if (selectedItems?.length === cartItems.length) {
            //     setSelectedItems([]);
            //   } else {
            //     setSelectedItems(cartItems);
            //   }
            // }}
            />

            <div className="w-full">
              <p className="line-clamp-2 font-medium text-gray-600 leading-5">
                {/* {item.title} */}
                Product
              </p>
            </div>
          </div>
          <div className="flex items-center gap-1">Unit Price</div>
          <div className="flex gap-4 items-center text-sm">Quantity</div>
          <h5 className="text-sm text-primaryColor min-w-max">Total Price</h5>

          <div className="text-sm font-medium text-primaryColor">Action</div>
        </div>

        {cart?.data?.data?.map((cart) => (
          <div key={cart?.name} className="bg-white shadow p-6 my-3 space-y-3">
            <h1 className="text-lg font-semibold">{cart?.name}</h1>

            {cart_items?.length === 0 && (
              <p className="text-center">Your cart is empty</p>
            )}

            {cart_items?.map((item) => (
              <div key={item?.id} className="border">
                {/* <div className="flex gap-2 bg-[#faf6eb] p-4 items-center text-sm">
                  <h1 className="border-2 rounded border-borderPrimary px-2 font-semibold text-primaryColor">
                    Free Gift
                  </h1>{" "}
                  <p className="font-semibold"> Spend ৳1.00 get 1 free</p>
                  <span className="flex items-center text-[18px] font-semibold text-primaryColor">
                    Add more <FaAngleRight />
                  </span>
                </div> */}
                <div className="flex items-center justify-between p-6">
                  <div className="w-2/4 flex items-center gap-4">
                    <Checkbox
                      checked={
                        selectedItems?.findIndex(
                          (cartItem) => cartItem.id === item.id
                        ) !== -1
                      }
                      onChange={() => {
                        if (
                          selectedItems?.find(
                            (cartItem) => cartItem.id === item.id
                          )
                        ) {
                          setSelectedItems((prev) =>
                            prev.filter((cartItem) => cartItem.id !== item.id)
                          );
                        } else {
                          setSelectedItems((prev) => [...prev, item]);
                        }
                      }}
                    />
                    <div className="min-w-20 h-[70px]">
                      <Image
                        className="w-full h-full object-cover object-center "
                        src={item.product_thumbnail_image}
                        width={100}
                        height={100}
                        alt="img"
                      />
                    </div>
                    <div>
                      <p className="line-clamp-2 font-medium text-gray-600 leading-5">
                        {item.product_name}
                      </p>
                      {/* <button className="border mt-2 rounded border-borderPrimary px-2 py-0.5 font-semibold text-primaryColor w-fit text-xs">
                  Pre-Order
                </button> */}
                    </div>
                    <div className="w-[230px]">
                      <p className="flex items-center  gap-1">
                        Variants :
                        <span>
                          <FaCaretDown />
                        </span>
                      </p>
                      <p>{item.variation}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <p className="text-gray-400 line-through">{item.price}</p>
                    <h5 className="text-xl text-primaryColor">
                      ৳{item.sale_price}
                    </h5>
                  </div>
                  <div
                    className="flex gap-4 items-center text-sm"
                    disabled={isQuantityLoading}
                  >
                    <NumberInput>
                      <NumberInput.Button
                        // onClick={() => {
                        //   setCartItems((prev) => {
                        //     const updated = prev.map((cartItem) => {
                        //       if (cartItem.id === item.id) {
                        //         return {
                        //           ...item,
                        //           quantity: item.quantity - 1,
                        //         };
                        //       }
                        //       return cartItem;
                        //     });
                        //     return updated;
                        //   });
                        //   setSelectedItems((prev) => {
                        //     const updated = prev.map((cartItem) => {
                        //       if (cartItem.id === item.id) {
                        //         return {
                        //           ...item,
                        //           quantity: item.quantity - 1,
                        //         };
                        //       }
                        //       return cartItem;
                        //     });
                        //     return updated;
                        //   });
                        // }}

                        disabled={
                          isQuantityLoading || item.lower_limit > item.quantity
                        }
                        onClick={() => {
                          if (
                            isQuantityLoading ||
                            item.lower_limit > item.quantity
                          ) {
                            return;
                          } else {
                            mutate({
                              id: item.id,
                              quantity: item.quantity - 1,
                            });
                          }
                        }}
                      >
                        <Minus size={16} color="#455468" />
                      </NumberInput.Button>
                      <NumberInput.Input
                        className="w-16"
                        min={0}
                        max={100}
                        value={item.quantity}
                        // onChange={(e) => setQuantity(+e.target.value)}
                        // onChange={(e) => {
                        //   setCartItems((prev) => {
                        //     const updated = prev.map((cartItem) => {
                        //       if (cartItem.id === item.id) {
                        //         return {
                        //           ...item,
                        //           quantity: e.target.value,
                        //         };
                        //       }
                        //       return cartItem;
                        //     });
                        //     return updated;
                        //   });
                        //   setSelectedItems((prev) => {
                        //     const updated = prev.map((cartItem) => {
                        //       if (cartItem.id === item.id) {
                        //         return {
                        //           ...item,
                        //           quantity: e.target.value,
                        //         };
                        //       }
                        //       return cartItem;
                        //     });
                        //     return updated;
                        //   });
                        // }}

                        onChange={(e) => {
                          mutate({
                            id: item.id,
                            quantity: e.target.value,
                          });
                        }}
                      />
                      <NumberInput.Button
                        // onClick={() => {
                        //   setCartItems((prev) => {
                        //     const updated = prev.map((cartItem) => {
                        //       if (cartItem.id === item.id) {
                        //         return {
                        //           ...item,
                        //           quantity: item.quantity + 1,
                        //         };
                        //       }
                        //       return cartItem;
                        //     });
                        //     return updated;
                        //   });
                        //   setSelectedItems((prev) => {
                        //     const updated = prev.map((cartItem) => {
                        //       if (cartItem.id === item.id) {
                        //         return {
                        //           ...item,
                        //           quantity: item.quantity + 1,
                        //         };
                        //       }
                        //       return cartItem;
                        //     });
                        //     return updated;
                        //   });
                        // }}
                        disabled={
                          isQuantityLoading || item.upper_limit <= item.quantity
                        }
                        onClick={() => {
                          if (
                            isQuantityLoading ||
                            item.upper_limit <= item.quantity
                          ) {
                            return;
                          } else {
                            mutate({
                              id: item.id,
                              quantity: item.quantity + 1,
                            });
                          }
                        }}
                      >
                        <Plus size={16} color="#455468" />
                      </NumberInput.Button>
                    </NumberInput>
                  </div>
                  <h5 className="text-xl text-primaryColor w-[60px]">
                    ৳{item.price_with_quantities}
                  </h5>

                  <button
                    // onClick={() =>
                    //   setCartItems((prev) => {
                    //     const updated = prev.filter(
                    //       (cartItem) => cartItem.id !== item.id
                    //     );
                    //     return updated;
                    //   })
                    // }
                    disabled={isDeleteLoading}
                    onClick={() => deleteCartItem(item.id)}
                    className="text-lg font-medium text-primaryColor"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        ))}

        {/* <div className="flex items-center border my-3 shadow gap-2 px-4 py-3">
          <div className="max-w-10 h-auto ">
            <Image
              className="w-full h-full object-cover"
              src="/image/card/free.png"
              width={100}
              height={100}
              alt="img"
            />
          </div>
          <h1 className="font-medium text-gray-600 text-sm">
            Up to ৳1.99 off shipping on orders from ৳15.00{" "}
            <span className="text-blue-700">Learn more</span>
          </h1>
        </div> */}

        <div className="bg-white shadow py-3 px-6 space-y-6">
          {/* <div className="flex justify-end items-center gap-4 border-b pb-3">
            <p>Platform Voucher</p>
            <div className="flex items-center border p-2 gap-3 min-w-[150px]">
              <input
                type="text"
                placeholder="Enter your voucher"
                className="w-full focus:outline-none"
              />
            </div>
          </div> */}
          <div className="flex items-center justify-between">
            <div className="w-2/4 flex items-center gap-4">
              <Checkbox
              // checked={
              //   selectedItems?.length === cartItems.length &&
              //   cartItems.length > 0
              // }
              // onChange={() => {
              //   if (selectedItems?.length === cartItems.length) {
              //     setSelectedItems([]);
              //   } else {
              //     setSelectedItems(cartItems);
              //   }
              // }}
              />
              <div className="w-full flex gap-3">
                <button
                  // onClick={() => {
                  //   if (selectedItems?.length === cartItems.length) {
                  //     setSelectedItems([]);
                  //   } else {
                  //     setSelectedItems(cartItems);
                  //   }
                  // }}
                  className="font-medium text-gray-600 leading-5"
                >
                  Select All
                </button>
                <button
                  // onClick={() => {
                  //   selectedItems?.forEach((item) => {
                  //     setCartItems((prev) =>
                  //       prev.filter((cartItem) => cartItem.id !== item.id)
                  //     );
                  //     setSelectedItems([]);
                  //   });
                  // }}
                  className="text-red-500"
                >
                  Delete
                </button>
              </div>
            </div>

            <div className="flex items-center">
              <p>
                Total Amount:
                <span className="text-[#4F97A5] font-medium ml-2">
                  {cart?.data?.grand_total}
                </span>
              </p>
              <button
                disabled={isProcessLoading}
                onClick={handleProcessToCheckout}
                className="bg-primaryColor font-medium ml-2 px-4 py-2 rounded-md text-white"
              >
                {isProcessLoading ? "Processing..." : "Proceed to Checkout"}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="sm:hidden space-y-3 pb-36">
        <div className="flex items-center justify-between py-3 px-6">
          <div className="flex items-center gap-2.5">
            <Checkbox
            // checked={
            //   selectedItems?.length === cartItems.length &&
            //   cartItems.length > 0
            // }
            // onChange={() => {
            //   if (selectedItems?.length === cartItems.length) {
            //     setSelectedItems([]);
            //   } else {
            //     setSelectedItems(cartItems);
            //   }
            // }}
            />

            {/* <button
              // onClick={() => {
              //   if (selectedItems?.length === cartItems.length) {
              //     setSelectedItems([]);
              //   } else {
              //     setSelectedItems(cartItems);
              //   }
              // }}
              className="font-medium text-sm text-gray-600 leading-5 flex gap-2"
            >
              <span className="text-xs bg-primaryColor text-white p-1 rounded-md">
                Preferred
              </span>
              Wonderlust SG
            </button> */}
          </div>
        </div>
        {cart_items?.map((item, i) => (
          <div key={i} className="border">
            {/* <div className="flex gap-2 bg-[#faf6eb] p-4 items-center text-sm">
              <button className="border rounded border-borderPrimary p-1 text-xs font-semibold text-primaryColor">
                Free Gift
              </button>{" "}
              <p className="lg:font-semibold lg:text-base text-xs">
                {" "}
                Spend ৳1.00 get 1 free
              </p>
              <span className="flex items-center lg:text-[18px] text-xs font-semibold text-primaryColor">
                Add more <FaAngleRight />
              </span>
            </div> */}
            <div className="flex items-center justify-between p-3">
              <div className="flex items-center gap-2.5">
                <Checkbox
                // checked={
                //   selectedItems?.findIndex(
                //     (cartItem) => cartItem.id === item.id
                //   ) !== -1
                // }
                // onChange={() => {
                //   if (
                //     selectedItems?.find((cartItem) => cartItem.id === item.id)
                //   ) {
                //     setSelectedItems((prev) =>
                //       prev.filter((cartItem) => cartItem.id !== item.id)
                //     );
                //   } else {
                //     setSelectedItems((prev) => [...prev, item]);
                //   }
                // }}
                />

                <div className="flex justify-between gap-3">
                  <div className="min-w-24 h-[70px]">
                    <Image
                      className="w-full h-full object-cover object-center "
                      src={item?.product_thumbnail_image}
                      width={100}
                      height={100}
                      alt="img"
                    />
                  </div>
                  <div className="space-y-3">
                    <p className="line-clamp-2 text-xs font-medium text-gray-600 leading-5">
                      {item.title}
                    </p>
                    <div className="flex items-center gap-3 mt-2">
                      <button className="border text-xs rounded border-borderPrimary px-2 py-0.5 font-semibold text-primaryColor w-fit min-w-max">
                        Pre-Order
                      </button>
                      <div className="flex items-center text-xs gap-1">
                        <p className="text-gray-400 line-through">
                          {item.price}
                        </p>
                        <h5 className="text-base text-primaryColor">
                          ৳{item.sale_price}
                        </h5>
                      </div>
                    </div>
                    <div className="flex gap-4 items-center text-sm">
                      <NumberInput>
                        <NumberInput.Button
                          disabled={
                            isQuantityLoading ||
                            item.lower_limit > item.quantity
                          }
                          onClick={() => {
                            if (
                              isQuantityLoading ||
                              item.lower_limit > item.quantity
                            ) {
                              return;
                            } else {
                              mutate({
                                id: item.id,
                                quantity: item.quantity - 1,
                              });
                            }
                          }}
                        >
                          <Minus size={16} color="#455468" />
                        </NumberInput.Button>
                        <NumberInput.Input
                          className="w-8"
                          min={0}
                          max={100}
                          value={item.quantity}
                          // onChange={(e) => setQuantity(+e.target.value)}
                          // onChange={(e) => {
                          //   setCartItems((prev) => {
                          //     const updated = prev.map((cartItem) => {
                          //       if (cartItem.id === item.id) {
                          //         return {
                          //           ...item,
                          //           quantity: e.target.value,
                          //         };
                          //       }
                          //       return cartItem;
                          //     });
                          //     return updated;
                          //   });
                          //   setSelectedItems((prev) => {
                          //     const updated = prev.map((cartItem) => {
                          //       if (cartItem.id === item.id) {
                          //         return {
                          //           ...item,
                          //           quantity: e.target.value,
                          //         };
                          //       }
                          //       return cartItem;
                          //     });
                          //     return updated;
                          //   });
                          // }}
                          onChange={(e) => {
                            mutate({
                              id: item.id,
                              quantity: e.target.value,
                            });
                          }}
                        />
                        <NumberInput.Button
                          // onClick={() => {
                          //   setCartItems((prev) => {
                          //     const updated = prev.map((cartItem) => {
                          //       if (cartItem.id === item.id) {
                          //         return {
                          //           ...item,
                          //           quantity: item.quantity + 1,
                          //         };
                          //       }
                          //       return cartItem;
                          //     });
                          //     return updated;
                          //   });
                          //   setSelectedItems((prev) => {
                          //     const updated = prev.map((cartItem) => {
                          //       if (cartItem.id === item.id) {
                          //         return {
                          //           ...item,
                          //           quantity: item.quantity + 1,
                          //         };
                          //       }
                          //       return cartItem;
                          //     });
                          //     return updated;
                          //   });
                          // }}
                          disabled={
                            isQuantityLoading ||
                            item.upper_limit <= item.quantity
                          }
                          onClick={() => {
                            if (
                              isQuantityLoading ||
                              item.upper_limit <= item.quantity
                            ) {
                              return;
                            } else {
                              mutate({
                                id: item.id,
                                quantity: item.quantity + 1,
                              });
                            }
                          }}
                        >
                          <Plus size={16} color="#455468" />
                        </NumberInput.Button>
                      </NumberInput>
                    </div>
                    <div className="flex justify-between">
                      <h5 className="text-lg text-primaryColor ">
                        ৳{item.price_with_quantities}
                      </h5>
                      <button
                        // onClick={() =>
                        //   setCartItems((prev) => {
                        //     const updated = prev.filter(
                        //       (cartItem) => cartItem.id !== item.id
                        //     );
                        //     return updated;
                        //   })
                        // }

                        disabled={isDeleteLoading}
                        onClick={() => deleteCartItem(item.id)}
                        className="text-xs font-medium text-primaryColor"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
                {/* <div className="w-[230px]">
                  <p className="flex items-center  gap-1">
                    Variants :
                    <span>
                      <FaCaretDown />
                    </span>
                  </p>
                  <p>black, 35</p>
                </div> */}
              </div>
            </div>
          </div>
        ))}

        <div className="bg-white fixed bottom-0 w-full z-10 shadow p-3 space-y-3">
          {/* <div className="flex justify-between items-center gap-4 border-b pb-3 w-full">
            <p className="text-xs text-primaryColor min-w-max">
              LeezoBD Voucher
            </p>
            <div className="flex items-center border p-2 gap-3 min-w-[100px]">
              <input
                type="text"
                placeholder="Enter voucher"
                className="w-full focus:outline-none text-xs"
              />
            </div>
          </div> */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Checkbox
              // checked={
              //   selectedItems?.length === cartItems.length &&
              //   cartItems.length > 0
              // }
              // onChange={() => {
              //   if (selectedItems?.length === cartItems.length) {
              //     setSelectedItems([]);
              //   } else {
              //     setSelectedItems(cartItems);
              //   }
              // }}
              />
              <div className="w-full flex gap-3">
                <button
                  // onClick={() => {
                  //   if (selectedItems?.length === cartItems.length) {
                  //     setSelectedItems([]);
                  //   } else {
                  //     setSelectedItems(cartItems);
                  //   }
                  // }}
                  className="font-medium text-xs text-gray-600 min-w-max"
                >
                  Select All
                </button>
                {/* <button
                  onClick={() => {
                    selectedItems?.forEach(item => {
                      setCartItems(prev => prev.filter(cartItem => cartItem.id !== item.id));
                      setSelectedItems([]);
                    })
                  }}
                  className="text-red-500">
                  Delete
                </button> */}
              </div>
            </div>

            <div className="flex items-center">
              <div>
                <p className="min-w-max text-xs">
                  Total :
                  <span className="text-[#4F97A5] font-medium ml-2">
                    {cart?.data?.grand_total}
                  </span>
                </p>
                <p className="min-w-max text-[10px] text-right">
                  Saved :
                  <span className="text-[#4F97A5] font-medium ml-2">
                    {(
                      selectedItems?.reduce(
                        (acc, item) => acc + item.price * item.quantity,
                        0
                      ) -
                      selectedItems?.reduce(
                        (acc, item) => acc + item.salePrice * item.quantity,
                        0
                      )
                    ).toFixed(2)}
                  </span>
                </p>
              </div>
              <button
                disabled={isProcessLoading}
                onClick={handleProcessToCheckout}
                className="bg-primaryColor font-medium ml-2 px-2.5 py-1 rounded-md text-white text-xs"
              >
                {isProcessLoading ? "Processing..." : "Proceed to Checkout"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartContent;
