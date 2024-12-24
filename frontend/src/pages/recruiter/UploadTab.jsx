"use client";

import { useState } from "react";

export default function JobDescriptionForm() {
  const defaultDescription = `We are seeking a skilled React Native Developer with at least 2 years of experience to join our dynamic development team. The ideal candidate will be responsible for building and maintaining mobile applications for both iOS and Android platforms using React Native. You will collaborate with cross-functional teams to design, develop, and implement innovative solutions, ensuring a seamless user experience.

Key Responsibilities:
• Develop and maintain high-quality mobile applications using React Native.
• Work with UI/UX designers to implement visually appealing and responsive user interfaces.
• Write clean, efficient, and reusable code.
• Integrate third-party libraries and APIs.
• Troubleshoot and debug application issues.
• Collaborate with backend developers to integrate frontend with backend systems.
• Participate in code reviews and follow best practices for mobile development.`;

  const [description, setDescription] = useState(defaultDescription);

  const handleGenerate = () => {
    // Handle AI generation here
    console.log("Generating description...");
  };

  return (
    <div>
      <div className="space-y-4">
        <h2 className="text-lg text-gray-700">
          Upload a concise description of the job
        </h2>

        <div className="rounded-lg border border-gray-200 bg-white shadow-sm">
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <div className="flex items-center gap-2">
              <div className="flex items-center justify-center w-6 h-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5 text-blue-500"
                >
                  <path d="M12 3v3m6.366 2.366a9 9 0 010 12.728M7.634 7.634a9 9 0 000 12.728M3 12h3m9-9h3M3 21h3m9-9h3m-3 9h3" />
                </svg>
              </div>
              <span className="text-sm font-medium text-gray-700">
                Generate with AI
              </span>
            </div>
            <button
              onClick={handleGenerate}
              className="px-4 py-2 text-sm font-medium text-white bg-[#0B2544] hover:bg-[#0B2544]/90 rounded-md transition-colors"
            >
              Upload
            </button>
          </div>

          <div className="p-4">
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Write Job description"
              className="w-full min-h-[200px] resize-none border-0 focus:outline-none focus:ring-0 text-sm"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
