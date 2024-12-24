import React, { useState } from "react";
import CandidateLayout from "./CandidateLayout";
import CandidateButton from "./CandidateButton";
import SmallVideoPlaceholder from "../../assets/SmallVideoPlaceholder.svg";
import InterviewPlaceholder from "../../assets/InterviewPlaceholder.svg";
import { useNavigate } from "react-router-dom";

export default function CandidateInterview() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isRecording, setIsRecording] = useState(false);
  const navigate = useNavigate();

  const questions = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ?",
    "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat?",
    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur?",
    "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum?",
  ];

  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handleSubmit = () => {
    navigate("/candidate/coding-interview");
  };

  return (
    <CandidateLayout>
      <div className="max-w-4xl mx-auto px-4">
        {/* Back Button, Progress Bar, and Question Count */}
        <div className="flex items-center justify-between mb-12">
          <button
            onClick={handleBack}
            className="flex items-center text-gray-600 hover:text-gray-900"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back
          </button>

          <div className="flex-1 mx-4">
            {/* Progress Bar */}
            <div className="flex gap-2">
              {[...Array(4)].map((_, index) => (
                <div
                  key={index}
                  className={`h-1 flex-1 rounded-full ${
                    index <= currentQuestion ? "bg-[#05B4B4]" : "bg-gray-200"
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="text-gray-600">
            ({String(currentQuestion + 1).padStart(2, "0")}/04)
          </div>
        </div>

        {/* Question Content */}
        <div className="space-y-8">
          <h1 className="text-3xl font-bold text-center">Video Question</h1>

          <div className="flex flex-row w-full gap-4 px-6">
            <div className="w-2/5 bg-[#F2FDFF] p-6 rounded-lg shadow-md">
              <p className="text-gray-700 text-lg leading-relaxed">
                Hi Asad! Can you tell me about React Hooks, their use, with
                examples
              </p>
            </div>
            <div className="w-3/5 flex items-center justify-center">
              <img
                src={InterviewPlaceholder}
                alt="Video Question Image"
                className="rounded-lg shadow-lg max-w-full h-auto"
              />
            </div>
          </div>

          {/* Submit Button and Note */}
          <div className="mt-8 space-y-4">
            <div className="flex justify-center">
              <CandidateButton
                onClick={
                  currentQuestion === questions.length - 1
                    ? handleSubmit
                    : handleNext
                }
              >
                {currentQuestion === questions.length - 1
                  ? "Submit"
                  : "Submit & Continue"}
              </CandidateButton>
            </div>

            <p className="text-center text-sm text-gray-500">
              Note: Do not refresh the page or you'll lose your data
            </p>
          </div>
        </div>

        {/* Video Preview */}
        <div className="fixed bottom-4 right-4 w-50 h-30 bg-white rounded-lg overflow-hidden">
          <img
            src={SmallVideoPlaceholder}
            alt=""
            className="w-full h-full object-cover"
          />
          {/* Status Indicators */}
          {/* <div className="absolute bottom-2 right-2 flex gap-2">
            <div className="w-4 h-4 bg-[#05B4B4] rounded-full" />
            <div className="w-4 h-4 bg-[#05B4B4] rounded-full" />
          </div> */}
        </div>
      </div>
    </CandidateLayout>
  );
}
