import React, { useState } from "react";
import CandidateLayout from "./CandidateLayout";
import CandidateButton from "./CandidateButton";
import { useNavigate } from "react-router-dom";

export default function CandidatePermissions() {
  const [permissions, setPermissions] = useState({
    camera: false,
    microphone: false,
    screen: false,
  });

  const navigate = useNavigate();
  const handleNext = () => {
    navigate("/candidate/interview");
  }

  const requestPermission = async (type) => {
    try {
      switch (type) {
        case "camera":
          await navigator.mediaDevices.getUserMedia({ video: true });
          setPermissions((prev) => ({ ...prev, camera: true }));
          break;
        case "microphone":
          await navigator.mediaDevices.getUserMedia({ audio: true });
          setPermissions((prev) => ({ ...prev, microphone: true }));
          break;
        case "screen":
          await navigator.mediaDevices.getDisplayMedia();
          setPermissions((prev) => ({ ...prev, screen: true }));
          break;
      }
    } catch (error) {
      console.error(`Error requesting ${type} permission:`, error);
    }
  };

  return (
    <CandidateLayout>
      <div className="max-w-2xl mx-auto space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold">Enable Camera and Microphone</h1>
          <p className="text-gray-600 max-w-xl mx-auto">
            To proceed with the interview, we need access to your camera and
            microphone. Please grant the necessary permissions.
          </p>
        </div>

        <div className="space-y-4 mt-8">
          {/* Camera Permission */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-gray-50 rounded-lg">
                  <svg
                    className="w-6 h-6 text-gray-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <span className="font-medium">Grant permission to WebCam</span>
              </div>
              <button
                onClick={() => requestPermission("camera")}
                className={`w-12 h-6 rounded-full p-1 transition-colors duration-200 ease-in-out ${
                  permissions.camera ? "bg-[#05B4B4]" : "bg-gray-200"
                }`}
              >
                <div
                  className={`w-4 h-4 bg-white rounded-full shadow-md transform transition-transform duration-200 ease-in-out ${
                    permissions.camera ? "translate-x-6" : "translate-x-0"
                  }`}
                />
              </button>
            </div>
          </div>

          {/* Microphone Permission */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-gray-50 rounded-lg">
                  <svg
                    className="w-6 h-6 text-gray-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                    />
                  </svg>
                </div>
                <span className="font-medium">
                  Grant permission to Microphone
                </span>
              </div>
              <button
                onClick={() => requestPermission("microphone")}
                className={`w-12 h-6 rounded-full p-1 transition-colors duration-200 ease-in-out ${
                  permissions.microphone ? "bg-[#05B4B4]" : "bg-gray-200"
                }`}
              >
                <div
                  className={`w-4 h-4 bg-white rounded-full shadow-md transform transition-transform duration-200 ease-in-out ${
                    permissions.microphone ? "translate-x-6" : "translate-x-0"
                  }`}
                />
              </button>
            </div>
          </div>

          {/* Screen Share Permission */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-gray-50 rounded-lg">
                  <svg
                    className="w-6 h-6 text-gray-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <span className="font-medium">
                  Grant Permission for Entire Screen Share
                </span>
              </div>
              <button
                onClick={() => requestPermission("screen")}
                className={`w-12 h-6 rounded-full p-1 transition-colors duration-200 ease-in-out ${
                  permissions.screen ? "bg-[#05B4B4]" : "bg-gray-200"
                }`}
              >
                <div
                  className={`w-4 h-4 bg-white rounded-full shadow-md transform transition-transform duration-200 ease-in-out ${
                    permissions.screen ? "translate-x-6" : "translate-x-0"
                  }`}
                />
              </button>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-8">
          <CandidateButton onClick={handleNext}>Next</CandidateButton>
        </div>
      </div>
    </CandidateLayout>
  );
}
