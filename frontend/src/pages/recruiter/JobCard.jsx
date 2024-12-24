import React from "react";

export function JobCard({
  title,
  datePosted,
  status,
  hires,
  totalApplications,
  shortlistedApplications,
}) {
  return (
    <a href="/recruiter/job-dashboard" className="block">
      <div
        className="bg-white shadow-md shadow-black/60 rounded-2xl px-6 shadow-sm m-8 py-8"
        //   style={{ boxShadow: "0px 4px 24px rgba(0, 0, 0, 0.1)" }}
      >
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <div className="mt-2 flex items-center gap-2 text-sm">
          <span className="text-gray-600">Date Posted:</span>
          <span className="text-green-600 font-medium">{status}</span>
        </div>
        <div className="text-sm text-gray-600">Hires: {hires}</div>

        <div className="mt-6">
          <p className="text-center text-sm font-medium text-gray-900 mb-4">
            Applications
          </p>
          <div className="flex justify-center gap-4">
            <div className="flex flex-col items-center">
              <span className="w-16 h-16 rounded-lg bg-[#144066] text-white flex items-center justify-center text-xl font-semibold">
                {totalApplications}
              </span>
              <span className="mt-2 text-sm text-gray-600">Total</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="w-16 h-16 rounded-lg border-2 border-gray-200 text-gray-900 flex items-center justify-center text-xl font-semibold">
                {shortlistedApplications}
              </span>
              <span className="mt-2 text-sm text-gray-600">Shortlisted</span>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
}
