import React from "react";
import { StatsCard } from "./StatsCard";
import { JobCard } from "./JobCard";

export default function Dashboard() {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <StatsCard title="Total Open Jobs" value={4} variant="dark" />
        <StatsCard title="Total Applicants" value={100} variant="light" />
        <StatsCard
          title="Shortlisted Application"
          value={10}
          percentage={38}
          variant="dark"
        />
      </div>
      <div className="p-6  bg-white min-h-screen rounded-xl flex flex-col">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-grow px-8">
          {[...Array(4)].map((_, i) => (
            <JobCard
              key={i}
              title="Junior-Level React Frontend Engineer"
              datePosted="2024-01-15"
              status="Active"
              hires={0}
              totalApplications={30}
              shortlistedApplications={5}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
