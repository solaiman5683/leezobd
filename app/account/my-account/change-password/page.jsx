"use client";
import { postUpdateProfile } from "@/hooks/user/user";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useMutation } from "react-query";

const MyAccountPage = () => {
  const { isLoading: updateLoading, mutate } = useMutation(postUpdateProfile, {
    onSuccess: (data) => {
      if (data?.data?.message) {
        toast.success("Successfully Password Changed!");
      } else {
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
  });

  const [formdata, setFormdata] = useState({
    password: "",
    confirmPassword: "",
  });

  const handleChange = async (e) => {
    setFormdata({
      ...formdata,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formdata.password !== formdata.confirmPassword) {
      toast.error("Password does not match");
      return;
    }

    mutate(formdata);
  };

  return (
    <div className="bg-white p-6 text-gray-600">
      <h2 className="capitalize text-lg font-bold">change password</h2>
      <p className="text-sm">Manage and secure your account</p>
      <hr className="my-3" />

      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-2 border-r p-6">
          <table className="w-full">
            <tbody>
              <tr>
                <td className="text-right pb-8 align-start">New Password</td>
                <td className="w-full pb-8 pl-4">
                  <input
                    type="password"
                    name="password"
                    className="border px-3 py-1 w-full"
                    onChange={handleChange}
                    value={formdata.password}
                  />
                </td>
              </tr>
              <tr>
                <td className="text-right pb-8 align-start">
                  Confirm New Password
                </td>
                <td className="w-full pb-8 pl-4">
                  <input
                    type="password"
                    name="confirmPassword"
                    className="border px-3 py-1 w-full"
                    onChange={handleChange}
                    value={formdata.confirmPassword}
                  />
                </td>
              </tr>
              <tr>
                <td></td>
                <td className="w-full pb-8 pl-4">
                  <button
                    onClick={handleSubmit}
                    className="bg-orange-500 text-white px-6 py-2"
                  >
                    {updateLoading ? <>Saving...</> : <>Save</>}
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyAccountPage;
