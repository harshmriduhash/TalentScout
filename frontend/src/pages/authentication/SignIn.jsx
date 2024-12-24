// Import necessary libraries
import React from "react";
import Logo from "../../assets/Logo.svg"; // Adjust the path if necessary
import Layout from "./Layout";

const SignupPage = () => {
  return (
    <Layout buttonText="SIGN UP">
      <div
        className="relative flex items-center justify-center h-full bg-white"
        style={{ zindex: 2 }}
      >
        <div className="w-[572px] bg-white shadow-md rounded-md px-8 py-10">
          {/* Logo and Header */}
          <div className="text-center mb-8">
            <h1 className="text-2xl font-semibold text-gray-800">
              Log in to TalentScout
            </h1>
            <p className="text-gray-500 text-sm mt-2">
              Quick & Simple way to Automate your payment
            </p>
          </div>

          {/* Form Fields */}
          <form className="space-y-4">
            {/* First Name */}
            {/* <div>
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
            </div> */}

            {/* Email Address */}
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

            {/* Password */}
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

            {/* Terms and Conditions */}
            {/* Terms and Conditions */}
            <div className="flex items-center justify-between mt-4">
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
                  <u>Remember Me</u>
                </label>
              </div>
              <div>
                <a
                  href="/forgotpassword"
                  className="text-sm text-blue-600 hover:underline"
                >
                  Forgot Password?
                </a>
              </div>
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="button"
                onClick={() => (window.location.href = "/recruiter")}
                className="w-full text-white px-4 py-2 rounded-md shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                style={{ background: "#144066" }}
              >
                PROCEED
              </button>
            </div>
          </form>

          {/* Divider */}
          <div className="my-6 flex items-center">
            <div className="border-t border-gray-300 flex-grow"></div>
            <span className="mx-4 text-gray-500">OR</span>
            <div className="border-t border-gray-300 flex-grow"></div>
          </div>

          {/* Google Sign-In */}
          <div>
            <button className="w-full flex items-center justify-center border border-gray-300 text-gray-700 px-4 py-2 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
              <img src={Logo} alt="Google" className="w-10 h-10 mr-0" />
              Sign in with Google
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SignupPage;
