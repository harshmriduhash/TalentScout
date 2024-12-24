import React, { useState } from "react";
import OpenedJob from "./OpenedJob";
import ClosedJob from "./ClosedJob";

const OpenedJobs = () => {
  const [activeTab, setActiveTab] = useState("opened");

  return (
    <div className="flex h-screen">
      <aside className="w-1/4 bg-gray-100 p-6">
        <h1 className="text-2xl font-bold mb-6">TalentScout</h1>
        <nav>
          <ul className="space-y-4">
            <li className="text-gray-600">Dashboard</li>
            <li className="text-blue-600 font-semibold">Open a job</li>
          </ul>
        </nav>
      </aside>
      <main className="flex-1 p-8">
        <header className="flex justify-between items-center mb-8">
          <h2 className="text-xl font-bold">OPEN A JOB</h2>
          <button className="bg-blue-600 text-white px-4 py-2 rounded">
            + Open a Job
          </button>
        </header>

        <div className="flex border-b mb-8">
          <button
            className={`px-6 py-2 ${
              activeTab === "opened"
                ? "border-b-2 border-blue-600 font-semibold"
                : "text-gray-600"
            }`}
            onClick={() => setActiveTab("opened")}
          >
            Opened Jobs
          </button>
          <button
            className={`px-6 py-2 ${
              activeTab === "closed"
                ? "border-b-2 border-blue-600 font-semibold"
                : "text-gray-600"
            }`}
            onClick={() => setActiveTab("closed")}
          >
            Closed Jobs
          </button>
        </div>

        {activeTab === "opened" && <OpenedJob />}
        {activeTab === "closed" && <ClosedJob />}
      </main>
    </div>
  );
};

export default OpenedJobs;
