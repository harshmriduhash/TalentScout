import React from "react";

export function ShareModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-md w-full">
        <div className="flex flex-col items-center text-center">
          <div className="h-16 w-16 rounded-full bg-teal-500 flex items-center justify-center mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"
              />
            </svg>
          </div>
          <h2 className="text-xl font-semibold mb-2">Share the Job Post</h2>
          <p className="text-sm text-gray-600 mb-4">
            And find the best talents for the role!
          </p>
        </div>
        <input
          type="text"
          placeholder="job.sample.com"
          className="w-full px-3 py-2 border border-gray-300 rounded-md mb-4"
        />
        <button className="w-full px-4 py-2 bg-[#144066] hover:bg-[#0B2544] text-white rounded-md transition-colors">
          Share
        </button>
        <button
          onClick={onClose}
          className="mt-4 w-full px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-100 transition-colors"
        >
          Close
        </button>
      </div>
    </div>
  );
}
