import {
  deleteShippingAddress,
  makeDefaultShippingAddress,
  updateShippingAddressInCart,
} from "@/hooks/auth/address";
import React from "react";
import toast from "react-hot-toast";
import { useMutation } from "react-query";

const AddressList = ({
  addresses,
  editAddress,
  setShowChangeModal,
  cartAddress,
  refetch,
  refetchSummary,
}) => {
  const { mutate: updateAddressInCart, isLoading } = useMutation(
    updateShippingAddressInCart,
    {
      onSuccess: (data) => {
        console.log(data);
        if (data?.data?.message) {
          toast.success(data?.data?.message);
        }
        refetch();
        setShowChangeModal(false);
        refetchSummary();
      },
      onError: (error) => {
        if (error?.data?.error) {
          console.log(error);
          toast.error(error?.data?.error);
        } else {
          toast.error("Something went wrong");
        }
      },
    }
  );

  const { mutate: makeDefaultAddress } = useMutation(
    makeDefaultShippingAddress,
    {
      onSuccess: (data) => {
        console.log(data);
        if (data?.data?.message) {
          toast.success(data?.data?.message);
        }
        refetch();
      },
      onError: (error) => {
        if (error?.data?.error) {
          console.log(error);
          toast.error(error?.data?.error);
        } else {
          toast.error("Something went wrong");
        }
      },
    }
  );

  const { mutate: deleteAddress } = useMutation(deleteShippingAddress, {
    onSuccess: (data) => {
      console.log(data);
      if (data?.data?.message) {
        toast.success(data?.data?.message);
      }
      refetch();
    },
    onError: (error) => {
      if (error?.data?.error) {
        console.log(error);
        toast.error(error?.data?.error);
      } else {
        toast.error("Something went wrong");
      }
    },
  });
  return (
    <div className="p-4">
      {addresses?.map((address, index) => (
        <div
          key={index}
          disabled={isLoading}
          className={`mb-4 p-4 border border-gray-300 rounded-md ${
            isLoading && "opacity-50"
          } ${
            cartAddress?.id == address.id ? "bg-gray-100 border-orange-500" : ""
          }`}
          onClick={() => {
            updateAddressInCart({ address_id: address.id });
          }}
        >
          <div className="flex justify-between items-center mb-2">
            <div>
              <div className="font-bold">{address?.fullName}</div>
              <div>{address?.phone}</div>
              <div>{address?.address}</div>
              <div>{address?.country_name}</div>
              <div>{address?.state_name}</div>
              <div>{address?.city_name}</div>
              <div>{address?.postal_code}</div>
            </div>
            <button
              onClick={() => deleteAddress({ id: address.id })}
              className="text-blue-500 hover:underline"
            >
              Delete
            </button>
          </div>
          <div className="flex justify-between items-center">
            <div>
              {address?.set_default == 1 ? (
                <span className="text-orange-500">Default</span>
              ) : (
                <button
                  onClick={() => {
                    makeDefaultAddress({ id: address.id });
                  }}
                  className="text-orange-500 hover:underline"
                >
                  Set as Default
                </button>
              )}
            </div>
          </div>
        </div>
      ))}
      <button
        className="bg-white hover:bg-gray-100 text-gray-800 font-bold py-2 px-4 border border-gray-400 rounded shadow"
        onClick={() =>
          editAddress(addresses?.length == 0 ? "new" : addresses?.length)
        }
      >
        Add New Address
      </button>
    </div>
  );
};

export default AddressList;
