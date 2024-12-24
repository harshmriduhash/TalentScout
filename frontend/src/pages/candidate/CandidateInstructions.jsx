import React, { useState } from "react";
import CandidateLayout from "./CandidateLayout";
import CandidateButton from "./CandidateButton";
import VideoPlaceholder from "../../assets/VideoPlaceholder.svg";
import { useNavigate } from "react-router-dom";

export default function CandidateInstructions() {
  const [isPlaying, setIsPlaying] = useState(false);

  const navigate = useNavigate();

  const handleNext = () => {
    navigate("/candidate/permissions");
  };

  return (
    <CandidateLayout>
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold">
            How to Complete Your AI Video Interview
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Follow these steps for a smooth interview experience. Make sure to
            have a quiet space, good lighting, and a stable internet connection.
          </p>
        </div>

        <div className="relative aspect-video rounded-lg overflow-hidden bg-black/5 max-w-xl mx-auto">
          {/* Video Container */}
          <div className="absolute inset-0">
            <img
              src={VideoPlaceholder}
              alt="Interview instructions"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Video Controls */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-4">
            <div className="flex items-center gap-4 text-white">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="p-2 hover:bg-white/10 rounded-full transition-colors"
              >
                {isPlaying ? (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 9v6m4-6v6"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                )}
              </button>

              {/* Time */}
              <span className="text-sm">1:45 / 9:15</span>

              {/* Progress Bar */}
              <div className="flex-1 h-1 bg-white/30 rounded-full mx-4">
                <div className="w-[20%] h-full bg-white rounded-full" />
              </div>

              {/* Volume & Settings */}
              <button className="p-2 hover:bg-white/10 rounded-full transition-colors">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15.414l-.586.586h-.828a2 2 0 01-2-2v-4a2 2 0 012-2h.828l.586.586a2 2 0 001.414.586h2.828a2 2 0 001.414-.586l.586-.586h.828a2 2 0 012 2v4a2 2 0 01-2 2h-.828l-.586-.586a2 2 0 00-1.414-.586H8.414a2 2 0 00-1.414.586z"
                  />
                </svg>
              </button>
              <button className="p-2 hover:bg-white/10 rounded-full transition-colors">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-6">
          <CandidateButton onClick={handleNext}>Next</CandidateButton>
        </div>
      </div>
    </CandidateLayout>
  );
}
