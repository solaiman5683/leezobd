import { postAddToCart } from "@/hooks/frontend/cartApi";
import { NumberInput } from "keep-react";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { Minus, Plus } from "phosphor-react";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { BsCartPlus } from "react-icons/bs";
import { useMutation, useQueryClient } from "react-query";
import { Drawer } from "rsuite";
import NewAddressForm from "./new-address-form";
import AddressList from "./address-list";
import { makeDefaultShippingAddress } from "@/hooks/auth/address";

export function AddressModal({ addresses, summary, refetchSummary, refetch }) {
  const [showChangeModal, setShowChangeModal] = useState(false);
  const [addressess, setAddresses] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);

  const editAddress = (index) => {
    console.log(index);
    setEditingIndex(index);
  };

  useEffect(() => {
    if (addresses?.length == 0 && !showChangeModal) {
      setShowChangeModal(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [addresses]);
  return (
    <>
      <button
        onClick={() => setShowChangeModal(true)}
        className="flex flex-col items-center"
      >
        <p>
          {addresses?.filter(
            (address) => address?.id == summary?.address_id
          )?.[0]?.address || "Select Address"}
        </p>
        <span className="text-sm text-gray-500">Change</span>
      </button>
      <Drawer
        placement="bottom"
        size="md"
        open={showChangeModal}
        onClose={() => setShowChangeModal(false)}
      >
        <Drawer.Body>
          <div className="max-w-md mx-auto mt-10">
            {editingIndex !== null || addresses?.length == 0 ? (
              <NewAddressForm refetch={refetch} />
            ) : (
              <AddressList
                addresses={addresses}
                editAddress={editAddress}
                refetch={refetch}
                refetchSummary={refetchSummary}
                setShowChangeModal={setShowChangeModal}
                cartAddress={
                  addresses?.filter(
                    (address) => address?.id == summary?.address_id
                  )?.[0]
                }
              />
            )}
          </div>
        </Drawer.Body>
      </Drawer>
    </>
  );
}
