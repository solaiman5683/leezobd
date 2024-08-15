"use client";
import { postRegister } from "@/hooks/auth/authApi";
import { getCartHash } from "@/hooks/frontend/useCart";
import { Divider } from "keep-react";
import { signIn } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";
import toast from "react-hot-toast";
import { FaArrowLeftLong, FaEnvelope, FaLock, FaUser } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { FiHelpCircle } from "react-icons/fi";
import { MdOutlineFacebook } from "react-icons/md";
import { useMutation } from "react-query";

import image from "/public/image/signup.png";

const SignupPage = () => {
  const router = useRouter();

  const [signLoading, setSignLoading] = useState(false);

  const [formdata, setFormdata] = useState({
    name: "",
    email_or_phone: "",
    password: "",
    password_confirmation: "",
    register_by: "email",
  });

  const { isLoading: loading, mutate } = useMutation(postRegister, {
    onSuccess: async (data) => {
      if (data?.data?.user) {
        setSignLoading(true);
        const response = await signIn("credentials", {
          email: formdata.email_or_phone,
          password: formdata.password,
          login_by: formdata.register_by,
          temp_user_id: getCartHash(),
          redirect: false,
        });

        if (response.error) {
          toast.error(response.error);
        } else {
          router.push("/account/my-account");
        }
        setSignLoading(false);
      } else {
        toast.error("Something went wrong");
      }
    },
    onError: (error) => {
      toast.error(error.response.data.message);
    },
  });

  const handleChange = async (e) => {
    setFormdata({
      ...formdata,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    if (!formdata.email_or_phone || !formdata.password) {
      toast.error("Please enter email and password");
      return;
    }

    if (loading) {
      return;
    }
    //check if phone or email
    if (!formdata.email_or_phone.includes("@")) {
      setFormdata({
        ...formdata,
        register_by: "phone",
      });
      formdata.register_by = "phone";
    } else if (formdata.email_or_phone.includes("@")) {
      setFormdata({
        ...formdata,
        register_by: "email",
      });
      formdata.register_by = "email";
    }

    await mutate({
      ...formdata,
      password_confirmation: formdata.password,
    });
  };

  const handleBack = useCallback(() => {
    router.back();
  }, [router]);

  return (
    <>
      <div className="lg:block hidden">
        <div className="bg-white">
          <div className="container">
            <div className="flex items-center justify-between py-2">
              <div className="flex items-center">
                <Link href="/" className="">
                  <Image
                    src="/image/logo.png"
                    alt=""
                    width={150}
                    height={50}
                  />
                </Link>
              </div>
              <Link href="/help">Need Help?</Link>
            </div>
          </div>
        </div>
        <div className="bg-[#F4580E]">
          <div
            className="p-16 max-w-6xl mx-auto bg-contain bg-left bg-no-repeat flex justify-end items-center"
            style={{
              backgroundImage: 'url("/image/signup.png")',
            }}
          >
            <div className="bg-white p-6 rounded-lg w-[400px] space-y-6">
              <div className="flex justify-between items-center">
                <p className="text-lg">Sign Up</p>
                <div className="flex gap-6">
                  <svg width="40" height="40" fill="none" className="XITohy">
                    <g clipPath="url(#clip0)">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M18 0H0v18h18V0zM3 15V3h12v12H3zM18 22H0v18h18V22zm-3 15H3V25h12v12zM40 0H22v18h18V0zm-3 15H25V3h12v12z"
                        fill="#F4580E"
                      ></path>
                      <path
                        d="M37 37H22.5v3H40V22.5h-3V37z"
                        fill="#F4580E"
                      ></path>
                      <path
                        d="M27.5 32v-8h-3v8h3zM33.5 32v-8h-3v8h3zM6 6h6v6H6zM6 28h6v6H6zM28 6h6v6h-6z"
                        fill="#F4580E"
                      ></path>
                      <path
                        fill="#fff"
                        d="M-4.3 4l44 43.9-22.8 22.7-43.9-44z"
                      ></path>
                    </g>
                    <defs>
                      <clipPath id="clip0">
                        <path fill="#fff" d="M0 0h40v40H0z"></path>
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
              <form className="space-y-6" onSubmit={handleRegister}>
                <input
                  type="text"
                  name="name"
                  className="py-2 px-3 border w-full text-sm"
                  placeholder="Name"
                  onChange={handleChange}
                />

                <input
                  type="text"
                  name="email_or_phone"
                  className="py-2 px-3 border w-full text-sm"
                  placeholder="Phone Number or Email"
                  onChange={handleChange}
                />

                <input
                  type="password"
                  name="password"
                  className="py-2 px-3 border w-full text-sm"
                  placeholder="Password"
                  onChange={handleChange}
                />

                <button
                  disabled={loading || signLoading}
                  type="submit"
                  className="uppercase text-sm bg-[#F4580E] text-white w-full py-2 px-3"
                >
                  {loading || signLoading ? (
                    <div className="flex justify-center items-center">
                      <div className="w-5 h-5 border-2 border-white rounded-full animate-spin"></div>
                    </div>
                  ) : (
                    "Submit"
                  )}
                </button>
                <Divider variant="center">OR</Divider>
                <div className="flex gap-3">
                  <button
                    type="button"
                    className="p-2 flex justify-center items-center gap-2 w-full border text-sm"
                  >
                    <span className="text-[#1877F2]">
                      <MdOutlineFacebook size={18} />
                    </span>
                    Facebook
                  </button>
                  <button
                    type="button"
                    className="p-2 flex justify-center items-center gap-2 w-full border text-sm"
                  >
                    <span>
                      <FcGoogle size={18} />
                    </span>
                    Google
                  </button>
                </div>

                <p className="text-center text-sm">
                  By signing up, you agree to Leezo&apos;s{" "}
                  <Link href="/" className="text-[#F4580E]">
                    Terms of Service
                  </Link>{" "}
                  &{" "}
                  <Link href="/" className="text-[#F4580E]">
                    Privacy Policy
                  </Link>
                </p>

                <p className="text-center text-sm text-gray-500">
                  Have an Account ?{" "}
                  <Link
                    href="/auth/login"
                    className="font-semibold text-[#F4580E]"
                  >
                    Log In
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:hidden h-screen flex flex-col">
        <div className="flex items-center justify-between p-4 bg-white border-b">
          <div className="flex items-center gap-2 text-sm">
            <button className="text-[#F4580E]" onClick={handleBack}>
              <FaArrowLeftLong />
            </button>
            Sign Up
          </div>

          <span className="text-red-500">
            <FiHelpCircle />
          </span>
        </div>
        <div className="h-[250px]">
          <Image
            className="w-full h-full object-center"
            src={image}
            alt="images"
          />
        </div>
        <div className="flex-grow flex flex-col items-center">
          <form
            className="px-3 space-y-4 mt-8 w-full"
            onSubmit={handleRegister}
          >
            <div className="border-b flex items-center gap-4 w-full p-2 text-gray-500">
              <label htmlFor="name">
                <FaUser />
              </label>

              <input
                type="text"
                name="name"
                className="w-full text-sm focus:outline-none"
                placeholder="Name"
                onChange={handleChange}
              />
            </div>

            <div className="border-b flex items-center gap-4 w-full p-2 text-gray-500">
              <label htmlFor="email_or_phone">
                <FaEnvelope />
              </label>
              <input
                type="text"
                name="email_or_phone"
                className="w-full text-sm focus:outline-none"
                placeholder="Phone Number or Email"
                onChange={handleChange}
              />
            </div>

            <div className="border-b flex items-center gap-4 w-full p-2 text-gray-500">
              <label htmlFor="password">
                <FaLock />
              </label>
              <input
                type="password"
                name="password"
                className="w-full text-sm focus:outline-none"
                placeholder="Password"
                onChange={handleChange}
              />
            </div>

            <button
              type="submit"
              className="text-center w-full p-2 text-sm bg-[#F4580E] text-white"
            >
              {loading || signLoading ? (
                <div className="flex justify-center items-center">
                  <div className="w-5 h-5 border-2 border-white rounded-full animate-spin"></div>
                </div>
              ) : (
                "Submit"
              )}
            </button>
            <div className="w-[60%] mx-auto">
              <Divider variant="center">OR</Divider>
            </div>
            <button
              type="button"
              className="p-2 flex justify-between items-center gap-2 w-full border text-sm"
            >
              <span className="text-[#1877F2]">
                <MdOutlineFacebook size={18} />
              </span>
              Login with Facebook
              <span></span>
            </button>
            <button
              type="button"
              className="p-2 flex justify-between items-center gap-2 w-full border text-sm"
            >
              <span>
                <FcGoogle size={18} />
              </span>
              Login with Google
              <span></span>
            </button>
          </form>
          <p className="text-center text-xs p-6">
            By signing up, you agree to Leezo&apos;s{" "}
            <Link href="/" className="text-[#F4580E]">
              Terms of Service
            </Link>{" "}
            &{" "}
            <Link href="/" className="text-[#F4580E]">
              Privacy Policy
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default SignupPage;
