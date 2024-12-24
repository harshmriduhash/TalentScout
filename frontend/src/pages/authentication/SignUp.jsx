import React from "react";
import Logo from "../../assets/Logo.svg";
import Layout from "./Layout";

const SignupPage = () => {
  return (
    <Layout buttonText="SIGN IN">
      <div
        className="relative flex items-center justify-center h-full bg-white"
        style={{ zindex: 2 }}
      >
        <div className="w-[572px] bg-white shadow-md rounded-md px-8 py-10">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-semibold text-gray-800">
              Sign up to TalentScout
            </h1>
            <p className="text-gray-500 text-sm mt-2">
              Quick & Simple way to Automate your payment
            </p>
          </div>

          <form className="space-y-4">
            <div>
              <label
                htmlFor="firstName"
                className="block text-sm font-medium text-gray-700"
              >
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                placeholder="John"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                placeholder="johndoe@example.com"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="********"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>

            <div className="flex items-center">
              <input
                id="terms"
                type="checkbox"
                className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <label
                htmlFor="terms"
                className="ml-2 block text-sm text-gray-700"
              >
                I agree to the{" "}
                <a href="#" className="text-blue-500">
                  Terms of Service
                </a>{" "}
                and{" "}
                <a href="#" className="text-blue-500">
                  Privacy Policy
                </a>
              </label>
            </div>

            <div>
              <button
                type="button"
                onClick={() => (window.location.href = "/recruiter")}
                className="w-full text-white px-4 py-2 rounded-md shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                style={{ background: "#144066" }}
              >
                CREATE AN ACCOUNT
              </button>
            </div>
          </form>

          <div className="my-6 flex items-center">
            <div className="border-t border-gray-300 flex-grow"></div>
            <span className="mx-4 text-gray-500">OR</span>
            <div className="border-t border-gray-300 flex-grow"></div>
          </div>

          <div>
            <button className="w-full flex items-center justify-center border border-gray-300 text-gray-700 px-4 py-2 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
              <img src={Logo} alt="Google" className="w-10 h-10 mr-0" />
              Sign in with Google
            </button>
          </div>
        </div>
      </div>
    </Layout>
    // <div
    //   className="min-h-screen relative flex items-center justify-center h-full"
    //   style={{
    //     backgroundColor: "#F2FDFF",
    //   }}
    // >
    //   <div
    //     className="absolute top-0 left-0 w-full h-full"
    //     style={{
    //       backgroundColor: "rgba(255, 255, 255, 0)",
    //       zIndex: 0,
    //     }}
    //   ></div>

    //   {/* Top-left image */}
    //   <img
    //     src={Group5}
    //     alt="Top-left decoration"
    //     className="absolute top-0 left-10 w-40 h-20 m-4"
    //   />

    //   {/* Top-right sign-in button */}
    //   <button
    //     onClick={() => (window.location.href = "/sign-in")}
    //     className="absolute top-10 right-20 border w-35 border-black text-black font-bold px-4 py-2"
    //   >
    //     SIGN IN
    //   </button>

    //   <div
    //     className="absolute top-0 left-0 w-full h-full bg-white"
    //     style={{
    //       clipPath: "polygon(0 50%, 100% 25%, 100% 100%, 0 100%)",
    //       //opacity: 0.25,
    //     }}
    //   ></div>

    // </div>
  );
};

export default SignupPage;
