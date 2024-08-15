import { postAddToCart } from "@/hooks/frontend/cartApi";
import { setCartHash } from "@/hooks/frontend/useCart";
import { NumberInput } from "keep-react";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Minus, Plus } from "phosphor-react";
import { useState } from "react";
import toast from "react-hot-toast";
import { BsCartPlus } from "react-icons/bs";
import { useMutation, useQueryClient } from "react-query";
import { Drawer } from "rsuite";

export function AddToCartMobile({
  product,
  redirect = false,
  buttonName = "Add To Cart",
}) {
  const [showMobileCart, setShowMobileCart] = useState(false);
  const [variant, setVariant] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);

  const session = useSession();
  const router = useRouter();

  const queryClient = useQueryClient();

  const { mutate, isLoading } = useMutation(postAddToCart, {
    onSuccess: async (data) => {
      if (data?.data?.message) {
        setQuantity(0);
        setVariant(0);
        setCartHash(data?.data?.temp_user_id);
        toast.success(data?.data?.message);
        setShowMobileCart(false);
        // refetch query for cart count with query id: cart_count
        queryClient.invalidateQueries("cart_count");

        if (redirect) {
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

    if (!variant?.name && product?.colors?.length != 0) {
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

    if (variant?.name) {
      obj.variant = variant?.name;
    }
    if (session?.data?.user) {
      obj.user_id = session.data?.user?.id;
    }

    mutate(obj);
  };
  return (
    <>
      <button
        onClick={() => setShowMobileCart(true)}
        className="flex flex-col items-center"
      >
        {buttonName === "Add To Cart" ? (
          <BsCartPlus className="text-2xl text-orange-500" />
        ) : (
          <></>
        )}
        <span>{buttonName}</span>
      </button>
      <Drawer
        placement="bottom"
        size="md"
        open={showMobileCart}
        onClose={() => setShowMobileCart(false)}
      >
        <Drawer.Body>
          <div className="flex gap-4 items-end pb-4 border-b-2 border-dashed">
            <div>
              <Image
                src={
                  product?.photos?.[activeImage]?.path
                    ? product?.photos?.[activeImage]?.path
                    : product?.photos?.[0]?.path
                }
                alt=""
                width={120}
                height={120}
                className={`object-cover`}
              />
            </div>
            <div>
              <p className="text-orange-600 text-lg flex items-center gap-1">
                <span className="text-gray-500 line-through text-sm">
                  {product?.stroked_price}
                </span>{" "}
                {product?.main_price}
              </p>
              <p className="text-gray-600 text-sm">
                Stock: {product?.current_stock}
              </p>
            </div>
          </div>
          <div className="py-4 border-b-2 border-dashed">
            <div>
              <p className="text-gray-500">Color</p>
            </div>
            <div className="">
              <div className="flex gap-2 text-sm">
                {product?.colors?.map((color) => (
                  <button
                    key={color?.id}
                    className={`border p-2 flex gap-1 word-break hover:border-orange-500 ${
                      variant?.id === color?.id && "border-orange-500"
                    }`}
                    onClick={() => setVariant(color)}
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
          <div className="flex items-center justify-between py-4 border-b-2 border-dashed">
            <div>
              <p className="text-gray-500">Quantity</p>
            </div>
            <div className="">
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
              </div>
            </div>
          </div>
          <button
            onClick={handleAddToCart}
            className="w-full my-4 bg-orange-500 p-2 text-white"
          >
            {isLoading ? "Adding..." : buttonName}
          </button>
        </Drawer.Body>
      </Drawer>
    </>
  );
}
