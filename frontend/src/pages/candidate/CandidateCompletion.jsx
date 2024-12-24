import React from "react";
import CandidateLayout from "./CandidateLayout";

export default function CandidateCompletion() {
  return (
    <CandidateLayout>
      <div className="max-w-xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-8 relative overflow-hidden">
          {/* Teal accent border */}
          <div className="absolute top-0 right-0 bottom-0 w-1 bg-[#05B4B4]" />

          <div className="text-center space-y-4">
            <h1 className="text-3xl font-bold flex items-center justify-center gap-2">
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
              <p>we will contact you shortly.</p>
            </div>
          </div>
        </div>

        <div className="text-center mt-12 text-gray-600">
          For any queries, please reach out to{" "}
          <a
            href="mailto:contact@talentscout.com"
            className="text-[#05B4B4] hover:underline"
          >
            contact@talentscout.com
          </a>
        </div>
      </div>
    </CandidateLayout>
  );
}
