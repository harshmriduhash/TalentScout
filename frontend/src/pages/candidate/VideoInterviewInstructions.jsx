import React from "react";
import CandidateLayout from "./CandidateLayout";
import CandidateButton from "./CandidateButton";
import { useNavigate } from "react-router-dom";

export default function CandidateInstructions() {
  const instructions = [
    {
      title: "AI Monitoring:",
      description:
        "This interview is AI-powered, so do not seek third-party help. If detected, the interview will be terminated immediately, and you will not proceed to the next round.",
    },
    {
      title: "Question Types and Timing:",
      description:
        "The interview includes MCQs, audio responses, video responses, and coding tasks, each with dedicated time limits. A demo question will be provided before the actual questions begin.",
    },
    {
      title: "Submission Finality:",
      description:
        "Once an answer is submitted, you won't be able to change it. Your responses will be evaluated at the end of the interview.",
    },
  ];

  const navigate = useNavigate();

  const handleNext = () => {
    navigate("/candidate/video-interview");
  }

  return (
    <CandidateLayout>
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center space-y-2 mb-12">
          <h1 className="text-3xl font-bold">Interview Instructions</h1>
          <p className="text-gray-600">
            Follow these guidelines to complete your interview successfully.
            Each question type has a specific time limit.
          </p>
        </div>

        <div className="space-y-6">
          {instructions.map((instruction, index) => (
            <div key={index} className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 rounded-full bg-[#E5F9F9] text-[#05B4B4] flex items-center justify-center font-medium">
                  {index + 1}
                </div>
              </div>
              <div className="space-y-1">
                <h2 className="font-semibold text-lg">{instruction.title}</h2>
                <p className="text-gray-600 leading-relaxed">
                  {instruction.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <CandidateButton onClick={handleNext}>Start Interview</CandidateButton>
        </div>
      </div>
    </CandidateLayout>
  );
}
