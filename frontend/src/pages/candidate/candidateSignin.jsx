import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CandidateLayout from "./CandidateLayout";
import CandidateButton from "./CandidateButton";

export default function CandidateSignin() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    interviewId: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  const navigate = useNavigate();

  const handleNext = () => {
    navigate("/candidate/instructions");
  };

  return (
    <CandidateLayout>
      <div className="max-w-2xl mx-auto space-y-4">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold">AI-powered assessment</h1>
          <p className="text-gray-600">
            Please check your email for interview details
          </p>
        </div>

        <div className="bg-white shadow-sm rounded-lg border border-gray-200 mt-8">
          <div className="p-6">
            <h2 className="text-2xl font-semibold mb-6">
              Interview credentials
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-medium">
                  Your Name
                </label>
                <input
                  id="name"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#05B4B4]"
                  placeholder="Asad ur Rehman"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#05B4B4]"
                  placeholder="asad@gmail.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="interviewId"
                  className="block text-sm font-medium"
                >
                  Interview ID
                </label>
                <input
                  id="interviewId"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#05B4B4]"
                  value={formData.interviewId}
                  onChange={(e) =>
                    setFormData({ ...formData, interviewId: e.target.value })
                  }
                />
              </div>

              <div className="flex justify-end space-x-4 pt-4">
                <CandidateButton variant="secondary" type="button">
                  Back
                </CandidateButton>
                <CandidateButton type="submit" onClick={handleNext}>Next</CandidateButton>
              </div>
            </form>
          </div>
        </div>
      </div>
    </CandidateLayout>
  );
}
