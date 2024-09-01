"use client";

import { useState, useEffect } from "react";
import { ImCross } from "react-icons/im";
import image from "/public/pop-up-img1.jpeg";
import Image from "next/image";

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
          <div className="fixed inset-0 bg-black opacity-50"></div>
          <div className="modal-box bg-black relative z-10 rounded-md bg-cover">
            <div className="sticky top-1 right-1 flex items-center justify-end">
              <button onClick={closeModal} className="hover:text-gray-800 px-4 pt-3">
                <ImCross color="white" size={18} />
              </button>
            </div>
            <div className="h-[370px] w-[380px] pl-2 pr-10 pb-6">
              <Image src={image} alt="img" className="w-full h-full object-center" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PopUpModal;
