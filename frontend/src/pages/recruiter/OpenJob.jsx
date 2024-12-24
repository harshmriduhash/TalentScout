import React, { useState } from "react";
import Layout from "./RecruiterLayout";
import { useNavigate } from "react-router-dom";

const OpenJobForm = () => {
  const navigate = useNavigate();

  const handleNextClick = () => {
    navigate("/recruiter/job-description"); // Replace "/next-page" with your desired path
  };

  const [hires, setHires] = useState(0);

  const incrementHires = () => setHires(hires + 1);
  const decrementHires = () => {
    if (hires > 0) setHires(hires - 1);
  };

  return (
    <Layout>
      <header className="mb-8">
        <h2 className="text-xl font-bold">OPEN A JOB</h2>
      </header>

      <section className="mb-8 border-b pb-6 bg-white p-6 rounded-xl shadow-sm flex justify-between items-center">
        <p className="text-black">TELL US ABOUT THE JOB</p>
        <div className="w-1/5 flex justify-between items-center">
          <div className="w-full h-1 bg-gray-200">
            <div className="w-1/2 h-full bg-[#144066]"></div>
          </div>
          <p className="text-black text-right">1/2</p>
        </div>
      </section>

      <form className="bg-white rounded-xl shadow-sm p-6">
        <div className="mb-6">
          <label className="block text-sm font-medium mb-2">JOB TITLE*</label>
          <input
            type="text"
            placeholder="React Developer"
            className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#144066]"
          />
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium mb-2">
            WHAT SKILLS SHOULD I HAVE?*
          </label>
          <div className="flex items-center space-x-2 border rounded-md px-4 py-2">
            <span className="bg-[#144066] text-white px-3 py-1 rounded-full text-sm">
              React <button className="ml-2">✕</button>
            </span>
            <input
              type="text"
              placeholder="Add more skills..."
              className="focus:outline-none flex-1"
            />
          </div>
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium mb-2">
            HOW MANY HIRES?
          </label>
          <div className="flex items-center space-x-4">
            <button
              type="button"
              onClick={decrementHires}
              className="px-4 py-2 border rounded-md text-lg bg-[#144066] text-white"
            >
              -
            </button>
            <span className="text-lg">{hires}</span>
            <button
              type="button"
              onClick={incrementHires}
              className="px-4 py-2 border rounded-md text-lg bg-[#144066] text-white"
            >
              +
            </button>
          </div>
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium mb-2">
            JOB LOCATION*
          </label>
          <div className="flex items-center space-x-4 mb-2">
            <label className="px-4 py-2 border rounded-md text-lg flex items-center space-x-2">
              <input type="radio" name="location" className="form-radio" />
              <span>Fully Remote</span>
            </label>
            <label className="px-4 py-2 border rounded-md text-lg flex items-center space-x-2">
              <input type="radio" name="location" className="form-radio" />
              <span>Hybrid</span>
            </label>
            <label className="px-4 py-2 border rounded-md text-lg flex items-center space-x-2">
              <input type="radio" name="location" className="form-radio" />
              <span>Onsite</span>
            </label>
          </div>
          <input
            type="text"
            placeholder="e.g. Karachi, Lahore etc."
            className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#144066]"
          />
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium mb-2">
            EMPLOYMENT TYPE
          </label>
          <div className="flex items-center space-x-4">
            <button
              type="button"
              className="px-4 py-2 border rounded-md text-sm bg-[#144066] text-white"
            >
              Full time
            </button>
            <button
              type="button"
              className="px-4 py-2 border rounded-md text-sm text-[#144066]"
            >
              Part time
            </button>
          </div>
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium mb-2">
            EXPECTED MONTHLY SALARY?
          </label>
          <div className="flex items-center space-x-4">
            <button
              type="button"
              className="px-4 py-2 border rounded-md text-sm bg-[#144066] text-white"
            >
              50-100k
            </button>
            <button
              type="button"
              className="px-4 py-2 border rounded-md text-sm text-[#144066]"
            >
              100-200k
            </button>
            <button
              type="button"
              className="px-4 py-2 border rounded-md text-sm text-[#144066]"
            >
              200k+
            </button>
          </div>
        </div>

        <div className="flex justify-between mt-8">
          <button
            type="button"
            className="px-6 py-2 border border-gray-300 rounded-md text-sm text-gray-700"
          >
            Back
          </button>
          <button
            type="button" // Changed to type="button" to prevent form submission behavior
            onClick={handleNextClick}
            className="px-6 py-2 bg-[#144066] text-white rounded-md text-sm"
          >
            Next
          </button>
        </div>
      </form>
    </Layout>
  );
};

export default OpenJobForm;
