import React, { useState } from "react";
import OpenedJob from "./OpenedJob";
import ClosedJob from "./ClosedJob";
import TalentScout from "../../assets/Group 5.svg";
import Layout from "./RecruiterLayout";

const RecruiterHome = () => {
  const [activeTab, setActiveTab] = useState("opened");

  return (
    <Layout>
      <header className="flex justify-between items-center mb-8">
        {activeTab === "opened" && (
          <h2 className="text-xl font-bold">OPENED JOBS</h2>
        )}
        {activeTab === "closed" && (
          <h2 className="text-xl font-bold">CLOSED JOBS</h2>
        )}

        <button
          className="text-white px-4 py-2 rounded"
          style={{ backgroundColor: "#144066" }}
          onClick={() => (window.location.href = "/recruiter/open-job")}
        >
          + Open a Job
        </button>
      </header>

      <div className="flex border-b mb-8">
        <button
          className={`px-6 py-2 ${
            activeTab === "opened"
              ? "border-b-2 border-black font-semibold"
              : "text-gray-600"
          }`}
          onClick={() => setActiveTab("opened")}
        >
          Opened Jobs
        </button>
        <button
          className={`px-6 py-2 ${
            activeTab === "closed"
              ? "border-b-2 border-black font-semibold"
              : "text-gray-600"
          }`}
          onClick={() => setActiveTab("closed")}
        >
          Closed Jobs
        </button>
      </div>

      {activeTab === "opened" && <OpenedJob />}
      {activeTab === "closed" && <ClosedJob />}
    </Layout>
  );
};

export default RecruiterHome;
