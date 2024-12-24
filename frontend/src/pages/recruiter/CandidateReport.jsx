// Import necessary libraries
import React from "react";

const CandidateReport = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">
          Candidate Assessment
        </h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
          Hire Candidate
        </button>
      </div>

      {/* Candidate Information Section */}
      <div className="bg-white shadow-md rounded-md p-6 mb-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-semibold text-gray-800">Name name</h2>
            <p className="text-gray-500">oct10,2024 | Karachi</p>
            <p className="text-gray-500">testing@123</p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="text-center">
              <h3 className="text-lg font-medium text-gray-700">
                Technical skills
              </h3>
              <p className="text-blue-600 text-2xl font-bold">68%</p>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-medium text-gray-700">
                Communication
              </h3>
              <p className="text-blue-600 text-2xl font-bold">60%</p>
            </div>
          </div>
        </div>
      </div>

      {/* Assessment Scores */}
      <div className="bg-white shadow-md rounded-md p-6 mb-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Assessment Status
        </h2>
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-blue-50 p-4 rounded-md text-center">
            <h3 className="text-lg font-medium text-gray-700">MCQ Test</h3>
            <p className="text-blue-600 font-bold">72%</p>
          </div>
          <div className="bg-blue-50 p-4 rounded-md text-center">
            <h3 className="text-lg font-medium text-gray-700">HR Interview</h3>
            <p className="text-blue-600 font-bold">63%</p>
          </div>
          <div className="bg-blue-50 p-4 rounded-md text-center">
            <h3 className="text-lg font-medium text-gray-700">
              Technical Interview
            </h3>
            <p className="text-blue-600 font-bold">75%</p>
          </div>
        </div>
      </div>

      {/* Recorded Session */}
      <div className="bg-white shadow-md rounded-md p-6 mb-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Recorded Session
        </h2>
        <video controls className="w-full rounded-md shadow-sm">
          <source src="session.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Detailed Reports */}
      <div className="bg-white shadow-md rounded-md p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Detailed Reports
        </h2>
        <div className="space-y-4">
          <div className="border p-4 rounded-md">
            <h3 className="text-lg font-medium text-gray-700">
              MCQ Test Report
            </h3>
            <p className="text-gray-600">Name of the assessment: name</p>
            <p className="text-gray-600">Aptitude: 8/10 Questions</p>
            <p className="text-gray-600">Technical: 8/10 Questions</p>
          </div>
          <div className="border p-4 rounded-md">
            <h3 className="text-lg font-medium text-gray-700">
              Technical Interview Report
            </h3>
            <p className="text-gray-600">
              Type of interview: AI-based interview
            </p>
            <p className="text-gray-600">Level of interview: Medium</p>
            <p className="text-gray-600">Number of questions: 8</p>
          </div>
          <div className="border p-4 rounded-md">
            <h3 className="text-lg font-medium text-gray-700">
              HR Interview Report
            </h3>
            <p className="text-gray-600">
              Type of interview: AI-based interview
            </p>
            <p className="text-gray-600">Level of interview: Medium</p>
            <p className="text-gray-600">Number of questions: 8</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CandidateReport;
