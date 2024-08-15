/* eslint-disable @next/next/no-img-element */
"use client";
import {
  getUserByToken,
  postUpdateProfile,
  postUpdateProfileImage,
} from "@/hooks/user/user";
import Link from "next/link";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { IoHomeOutline } from "react-icons/io5";
import { useMutation, useQuery } from "react-query";
import { Radio, RadioGroup } from "rsuite";

const MyAccountPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const {
    data: user,
    isLoading: loading,
    refetch,
  } = useQuery("user", () => getUserByToken());

  const { isLoading: updateLoading, mutate } = useMutation(postUpdateProfile, {
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
  });

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

  const handleFormDataChange = (e) => {
    setFormdata({
      ...formdata,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    mutate(formdata);
  };

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

  return (
    <>
      <div className="text-gray-600 bg-white p-6 hidden lg:block">
        <h2 className="capitalize text-lg font-bold">my profile</h2>
        <p className="text-sm">Manage and protect your account</p>
        <hr className="my-3" />

        <div className="grid grid-cols-3 gap-6" disabled={loading}>
          <div className="col-span-2 border-r p-6">
            <table className="w-full">
              <tbody>
                <tr>
                  <td className="text-right">Username</td>
                  <td className="w-full pl-4">
                    <input
                      type="text"
                      className="border px-3 py-1 w-full"
                      onChange={handleFormDataChange}
                      value={formdata.username}
                      name="username"
                    />
                  </td>
                </tr>
                <tr>
                  <td></td>
                  <td className="pb-8 pl-4">
                    <span className="text-xs">
                      Username can only be changed once.
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="text-right pb-8 align-start">Name</td>
                  <td className="w-full pb-8 pl-4">
                    <input
                      type="text"
                      className="border px-3 py-1 w-full"
                      onChange={handleFormDataChange}
                      value={formdata.name}
                      name="name"
                    />
                  </td>
                </tr>
                <tr>
                  <td className="text-right pb-8 align-start">Email</td>
                  <td className="w-full pb-8 pl-4">
                    <p className="flex items-center gap-2">
                      {formdata?.email}{" "}
                    </p>
                    {/* <input type="email" defaultValue="example@gmail.com" className='border px-3 py-1 w-full' /> */}
                  </td>
                </tr>
                <tr>
                  <td className="text-right pb-8 align-start">Phone</td>
                  <td className="w-full pb-8 pl-4">
                    <input
                      type="text"
                      className="border px-3 py-1 w-full"
                      onChange={handleFormDataChange}
                      value={formdata.phone}
                      name="phone"
                    />
                  </td>
                </tr>
                <tr>
                  <td className="text-right pb-8 align-start">Gender</td>
                  <td className="w-full pb-8 pl-4">
                    <RadioGroup
                      name="radio-group-inline"
                      inline
                      defaultValue="male"
                      onChange={(value) => {
                        let e = {
                          target: {
                            name: "gender",
                            value,
                          },
                        };
                        handleFormDataChange(e);
                      }}
                      value={formdata.gender}
                    >
                      <Radio color="orange" value="male">
                        Male
                      </Radio>
                      <Radio color="orange" value="female">
                        Female
                      </Radio>
                      <Radio color="orange" value="other">
                        Other
                      </Radio>
                    </RadioGroup>
                  </td>
                </tr>
                <tr>
                  <td className="text-right pb-8 align-start">
                    <span className="whitespace-nowrap">Date of birth</span>
                  </td>
                  <td className="w-full pb-8 pl-4">
                    <input
                      type="date"
                      className="border px-3 py-1 w-full"
                      onChange={handleFormDataChange}
                      value={formdata.date_of_birth}
                      name="date_of_birth"
                    />
                  </td>
                </tr>
                <tr>
                  <td></td>
                  <td className="w-full pb-8 pl-4">
                    <button
                      onClick={handleSubmit}
                      disabled={updateLoading || loading}
                      className="bg-orange-500 text-white px-6 py-2"
                    >
                      {updateLoading ? <>Saving...</> : <>Save</>}
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="p-6 flex flex-col items-center space-y-4">
            <input
              type="file"
              id="upload-btn"
              accept=".jpg, .jpeg, .png"
              style={{ display: "none" }}
              onChange={handleFileChange}
            />
            <div
              className="h-28 w-28 border rounded-full overflow-hidden cursor-pointer"
              onClick={() => document.getElementById("upload-btn").click()}
            >
              {selectedImage ? (
                <img
                  src={selectedImage}
                  className="w-full h-full object-cover"
                  alt=""
                />
              ) : formdata?.avatar ? (
                <img
                  src={formdata?.avatar}
                  className="w-full h-full object-cover"
                  alt=""
                />
              ) : (
                <span className="w-full h-full flex items-center justify-center text-2xl text-gray-500 font-semibold">
                  JD
                </span>
              )}
            </div>
            <button
              className="border py-2 px-4 text-sm"
              onClick={() => document.getElementById("upload-btn").click()}
            >
              Select Image
            </button>
            <div className="text-center text-xs">
              File size: maximum 1 MB
              <br />
              File extension: .JPEG, .PNG
            </div>
          </div>
        </div>
      </div>
      <div className="md:hidden">
        <div className="flex bg-[#F4580E] items-center justify-between px-4 text-white py-3">
          <h1 className="text-lg">Edit Account</h1>
          <Link href={"/account/my-account"}>
            <button className="flex items-center justify-center">
              <IoHomeOutline size={22} />
            </button>
          </Link>
        </div>
        <div className="p-4 ">
          <div className="">
            <label htmlFor="username">User Name</label>
            <input
              type="text"
              className="border p-2 w-full"
              onChange={handleFormDataChange}
              value={formdata.username}
              name="username"
              id="username"
            />
          </div>
          <div className="pt-4">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="border p-2 w-full"
              onChange={handleFormDataChange}
              value={formdata.name}
              name="name"
            />
          </div>
          <div className="pt-4">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              disabled
              className="border p-2 w-full bg-slate-300"
              value={formdata?.email}
              name="email"
            />
          </div>
          <div className="pt-4">
            <label htmlFor="phone">Phone</label>
            <input
              type="text"
              className="border px-3 py-1 w-full"
              onChange={handleFormDataChange}
              value={formdata.phone}
              name="phone"
            />
          </div>

          <div className="pt-4">
            <label>Gender</label>
            <RadioGroup
              name="radio-group-inline"
              inline
              defaultValue="male"
              onChange={(value) => {
                let e = {
                  target: {
                    name: "gender",
                    value,
                  },
                };
                handleFormDataChange(e);
              }}
              value={formdata.gender}
            >
              <Radio color="orange" value="male">
                Male
              </Radio>
              <Radio color="orange" value="female">
                Female
              </Radio>
              <Radio color="orange" value="other">
                Other
              </Radio>
            </RadioGroup>
          </div>
          <div className="pt-4">
            <label htmlFor="phone">Date of Birth</label>
            <input
              type="date"
              className="border px-3 py-1 w-full"
              onChange={handleFormDataChange}
              value={formdata.date_of_birth}
              name="date_of_birth"
            />
          </div>
          <div className="flex items-center justify-center mt-4">
            <button
              onClick={handleSubmit}
              disabled={updateLoading || loading}
              className="bg-orange-500 text-white px-6 py-2"
            >
              {updateLoading ? <>Saving...</> : <>Save</>}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyAccountPage;
