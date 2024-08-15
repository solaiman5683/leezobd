"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ImCross } from "react-icons/im";
import image from "/public/pop-up-img1.jpeg";

const PopUpModal = () => {
  const [isEventModalOpen, setIsEventModalOpen] = useState(false);

  useEffect(() => {
    const modalStatus = localStorage.getItem("modalOpen");
    if (modalStatus === null) {
      localStorage.setItem("modalOpen", true);
      setIsEventModalOpen(true);
    } else {
      setIsEventModalOpen(JSON.parse(modalStatus));
    }
  }, []);

  const closeModal = () => {
    localStorage.setItem("modalOpen", false);
    setIsEventModalOpen(false);
  };

  return (
    <div>
      {isEventModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="fixed inset-0 opacity-50"></div>
          <div className="modal-box relative z-10 rounded-md bg-cover">
            <div className="absolute z-10 -top-2.5 -right-2.5 shadow-xl flex items-center justify-end">
              <button onClick={closeModal} className="bg-black flex items-center justify-center px-2 py-2 rounded-full">
                <ImCross color="white" size={12} />
              </button>
            </div>
            <div className="h-[380px] w-[420px]">
              <Image src={image} alt="img" className="w-full h-full object-cover object-center" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PopUpModal;
