/* eslint-disable @next/next/no-img-element */

"use client";
import { Divider } from "keep-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";
import { CiLock } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { FiHelpCircle, FiPhone } from "react-icons/fi";
import { MdOutlineFacebook } from "react-icons/md";
import { getSession, signIn, useSession } from "next-auth/react";
import toast from "react-hot-toast";
import { getCartHash } from "@/hooks/frontend/useCart";
import image from "/public/image/login.png";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoginWPass, setIsLoginWPass] = useState(true);
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const [formdata, setFormdata] = useState({
    email: "",
    password: "",
    login_by: "email",
  });

  const handleBack = useCallback(() => {
    router.back();
  }, [router]);

  const handleChange = async (e) => {
    setFormdata({
      ...formdata,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (!formdata.email || !formdata.password) {
      toast.error("Please enter email and password");
      setLoading(false);
      return;
    }

    //check if phone or email
    if (!formdata.email.includes("@")) {
      setFormdata({
        ...formdata,
        login_by: "phone",
      });
      formdata.login_by = "phone";
    } else if (formdata.email.includes("@")) {
      setFormdata({
        ...formdata,
        login_by: "email",
      });
      formdata.login_by = "email";
    }

    if (loading) {
      return;
    }

    const response = await signIn("credentials", {
      email: formdata.email,
      password: formdata.password,
      login_by: formdata.login_by,
      temp_user_id: getCartHash(),
      redirect: false,
    });

    if (response.error) {
      toast.error(response.error);
      setLoading(false);
      return;
    }

    if (response.ok) {
      toast.success("Login successfully");
      router.push("/account/my-account");
    }
  };

  return (
    <>
      <div className="lg:block hidden">
        <div className="bg-white">
          <div className="container">
            <div className="flex items-center justify-between py-2">
              <div className="flex items-center">
                <Link href="/" className="">
                  <Image
                    src="/image/logo-white.png"
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
        <div className="bg-[#4F97A5]">
          <div
            className="p-16 max-w-6xl mx-auto bg-contain bg-left bg-no-repeat flex justify-end items-center"
            style={{
              backgroundImage: 'url("/image/login.png")',
            }}
          >
            <div className="bg-white p-6 rounded-lg w-[400px] space-y-6">
              <div className="flex justify-between items-center">
                <p className="text-lg">Login</p>
                <div className="flex gap-6">
                  <div className="border-2 border-[#ffbf00] bg-[#fefaec] text-[#ffbf00] p-2 px-4 text-sm font-semibold relative login-with-qr">
                    {isLoginWPass ? "Login with QR" : "Login with Password"}
                  </div>
                  <button onClick={() => setIsLoginWPass(!isLoginWPass)}>
                    {isLoginWPass ? (
                      <svg
                        width="40"
                        height="40"
                        fill="none"
                        className="XITohy"
                      >
                        <g clipPath="url(#clip0)">
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M18 0H0v18h18V0zM3 15V3h12v12H3zM18 22H0v18h18V22zm-3 15H3V25h12v12zM40 0H22v18h18V0zm-3 15H25V3h12v12z"
                            fill="#4F97A5"
                          ></path>
                          <path
                            d="M37 37H22.5v3H40V22.5h-3V37z"
                            fill="#4F97A5"
                          ></path>
                          <path
                            d="M27.5 32v-8h-3v8h3zM33.5 32v-8h-3v8h3zM6 6h6v6H6zM6 28h6v6H6zM28 6h6v6h-6z"
                            fill="#4F97A5"
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
                    ) : (
                      <svg
                        width="40"
                        height="40"
                        fill="none"
                        className="XITohy"
                      >
                        <g clipPath="url(#clip0)">
                          <rect
                            x="1.5"
                            y="1.5"
                            width="37"
                            height="28"
                            rx="2.5"
                            stroke="#4F97A5"
                            strokeWidth="3"
                          ></rect>
                          <path
                            stroke="#4F97A5"
                            strokeWidth="3"
                            d="M22 38.5h11"
                          ></path>
                          <path
                            stroke="#4F97A5"
                            strokeWidth="10"
                            d="M21 29v9"
                          ></path>
                          <path
                            fill="#fff"
                            d="M-12.28 0l43.933 43.933-22.72 22.72L-35 22.72z"
                          ></path>
                          <path
                            d="M10.997 16.545l-2.76-.782.519-1.591 2.733 1.098-.176-3.067h1.723l-.176 3.129 2.663-1.081.519 1.608-2.813.783 1.846 2.338-1.397.993-1.6-2.567-1.582 2.479-1.397-.95 1.898-2.39zm8.156 0l-2.76-.782.52-1.591 2.732 1.098-.175-3.067h1.722l-.175 3.129 2.663-1.081.518 1.608-2.812.783 1.845 2.338-1.397.993-1.6-2.567-1.582 2.479-1.397-.95 1.898-2.39zm8.157 0l-2.76-.782.518-1.591 2.734 1.098-.176-3.067h1.723l-.176 3.129 2.663-1.081.519 1.608-2.813.783 1.846 2.338-1.398.993-1.6-2.567-1.581 2.479-1.398-.95 1.899-2.39z"
                            fill="#4F97A5"
                          ></path>
                        </g>
                        <defs>
                          <clipPath id="clip0">
                            <path fill="#fff" d="M0 0h40v40H0z"></path>
                          </clipPath>
                        </defs>
                      </svg>
                    )}
                  </button>
                </div>
              </div>
              {isLoginWPass ? (
                <form className="space-y-6" onSubmit={handleLogin}>
                  <input
                    type="text"
                    name="email"
                    className="py-2 px-3 border w-full text-sm"
                    placeholder="Phone Number / Username / Email"
                    onChange={handleChange}
                  />
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      className="py-2 px-3 border w-full text-sm"
                      placeholder="Password"
                      onChange={handleChange}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute top-0 right-0 h-full flex items-center justify-end px-3"
                    >
                      {showPassword ? (
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
                            d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
                          />
                        </svg>
                      ) : (
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
                            d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                          />
                        </svg>
                      )}
                    </button>
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="uppercase text-sm bg-[#4F97A5] text-white w-full py-2 px-3"
                    >
                      {loading ? "Loading..." : "Login"}
                    </button>
                    <div className="flex items-center justify-between text-xs p-2">
                      <Link href="/" className="text-blue-500">
                        Forgot Password
                      </Link>
                      <Link href="/" className="text-blue-500">
                        Login with Phone Number
                      </Link>
                    </div>
                    <Divider variant="center">OR</Divider>
                  </div>
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

                  <p className="text-center text-sm text-gray-500">
                    New to LeezoBD ?{" "}
                    <Link
                      href="/auth/register"
                      className="font-semibold text-[#4F97A5]"
                    >
                      Sign Up
                    </Link>
                  </p>
                </form>
              ) : (
                <div className="space-y-6">
                  <img
                    src="/image/login-qr.png"
                    className="w-[200px] mx-auto"
                    alt=""
                  />
                  <p className="text-lg text-center">
                    Scan QR code with LeezoBD App
                  </p>
                  <p className="text-blue-600 text-center">How to Scan</p>
                  <p className="text-center text-sm text-gray-500">
                    New to LeezoBD ?{" "}
                    <Link
                      href="/auth/register"
                      className="font-semibold text-[#4F97A5]"
                    >
                      Sign Up
                    </Link>
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="lg:hidden h-screen flex flex-col">
        <div className="flex items-center justify-between p-4 bg-white border-b">
          <div className="flex items-center gap-2 text-sm">
            <button className="text-[#4F97A5]" onClick={handleBack}>
              <FaArrowLeftLong />
            </button>
            Login
          </div>

          <span className="text-red-500">
            <FiHelpCircle />
          </span>
        </div>
        <div className="flex-grow flex flex-col items-center justify-center">
          {/* <Link href="/" className="">
            <Image src="/image/logo-white.png" alt="" width={150} height={60} />
          </Link> */}
          <div className="h-[250px]">
            <Image className="w-full h-full object-center" src={image} alt="image"/>
          </div>
          <form className="px-3 space-y-4 my-8 w-full" onSubmit={handleLogin}>
            {isLoginWPass ? (
              <>
                <div className="border-b flex items-center gap-4 w-full p-2 text-gray-500">
                  <label htmlFor="email">
                    <FaRegUser size={16} />
                  </label>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    placeholder="Phone / Email / Username"
                    className="w-full text-sm focus:outline-none"
                    onChange={handleChange}
                    value={formdata.email}
                  />
                </div>
                <div className="border-b flex items-center gap-4 w-full p-2 text-gray-500">
                  <label htmlFor="password">
                    <CiLock size={20} />
                  </label>
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    name="password"
                    placeholder="Password"
                    className="w-full text-sm focus:outline-none"
                    onChange={handleChange}
                    value={formdata.password}
                  />
                  <div className="flex min-w-max relative">
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="flex items-center justify-end pr-2 border-r border-dashed border-gray-500"
                    >
                      {showPassword ? (
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
                            d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
                          />
                        </svg>
                      ) : (
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
                            d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                          />
                        </svg>
                      )}
                    </button>
                    <button className="pl-2 text-blue-600 text-xs">
                      Forgot?
                    </button>
                  </div>
                </div>
                <button
                  type="submit"
                  className="text-center w-full p-2 text-sm bg-[#4F97A5] text-white"
                >
                  {loading ? "Loading..." : "Login"}
                </button>
              </>
            ) : (
              <>
                <div className="border-b flex items-center gap-4 w-full p-2 text-gray-500">
                  <label htmlFor="phone">
                    <FiPhone size={16} />
                  </label>
                  <input
                    type="text"
                    id="username"
                    name="phone"
                    placeholder="Phone Number"
                    className="w-full text-sm focus:outline-none"
                  />
                </div>
                <button
                  type="submit"
                  className="text-center w-full p-2 text-sm bg-gray-200 text-gray-500"
                >
                  Next
                </button>
              </>
            )}
            <div className="flex items-center justify-between text-xs text-blue-500">
              <Link href="/auth/register">Signup</Link>
              <span
                onClick={() => setIsLoginWPass(!isLoginWPass)}
                className="cursor-pointer"
              >
                {isLoginWPass
                  ? "Log in with Phone Number"
                  : "Log in with Password"}
              </span>
            </div>
            <div className="w-[60%] mx-auto pt-5">
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
        </div>
      </div>
    </>
  );
};

export default LoginPage;
