import React, { useState } from "react";
import CandidateLayout from "./CandidateLayout";
import CandidateButton from "./CandidateButton";

export default function InterviewCompletion() {
  return (
    <CandidateLayout>
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="max-w-md mx-auto p-6 rounded-lg border-4 border-teal-500">
          <div className="text-center space-y-4">
            <h1 className="text-2xl font-bold">
              Great Job{" "}
              <span role="img" aria-label="clapping hands">
                👏
              </span>
            </h1>
            <p className="text-gray-600">
              Thank you for completing the interview.
            </p>
            <div className="space-y-1">
              <p>Your performance will be reviewed by our team.</p>
              <p>We will contact you shortly.</p>
            </div>
          </div>
        </div>
      </div>
    </CandidateLayout>
  );
}
