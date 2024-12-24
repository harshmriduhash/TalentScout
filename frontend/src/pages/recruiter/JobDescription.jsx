import React, { useState } from "react";
import TalentScout from "../../assets/Group 5.svg";
import UploadTab from "./UploadTab";
import WriteYourselfTab from "./WriteYourselfTab";
import Layout from "./RecruiterLayout";
import { ShareModal } from "./ShareModal";

const JobDescription = () => {
  const [uploadTab, setUploadTab] = useState("opened");
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);

  return (
    <Layout>
      <header className="flex justify-between items-center mb-8">
        <h2 className="text-xl font-bold">OPEN A JOB</h2>
      </header>

      <section className="mb-8 border-b bg-white p-6 rounded-xl shadow">
        <h2 className="text-xl font-bold">Job Description</h2>
      </section>

      <section className="mb-8 border-b bg-white p-6 rounded-xl shadow">
        <div className="flex border-b mb-8">
          <button
            className={`px-6 py-2 ${
              uploadTab === "closed"
                ? "border-b-2 border-blue-600 font-semibold"
                : "text-gray-600"
            }`}
            onClick={() => setUploadTab("closed")}
          >
            Write Yourself
          </button>
          <button
            className={`px-6 py-2 ${
              uploadTab === "opened"
                ? "border-b-2 border-blue-600 font-semibold"
                : "text-gray-600"
            }`}
            onClick={() => setUploadTab("opened")}
          >
            Upload a PDF
          </button>
        </div>

        {uploadTab === "opened" && <UploadTab />}
        {uploadTab === "closed" && <WriteYourselfTab />}
      </section>
      <section className="p-8" style={{ marginTop: -40 }}>
        <div className="flex justify-end mt-6 space-x-4">
          <button className="px-6 py-2 text-[#121212] hover:text-gray-900 flex items-center gap-2 border border-gray-400 rounded-md shadow-sm">
            Back
          </button>
          <button
            onClick={() => setIsShareModalOpen(true)}
            className="px-6 py-2 text-sm text-white rounded-md bg-[#144066] hover:bg-[#0B2544] transition-colors shadow-sm"
          >
            Next
          </button>
        </div>
      </section>
      <ShareModal
        isOpen={isShareModalOpen}
        onClose={() => setIsShareModalOpen(false)}
      />
    </Layout>
  );
};

export default JobDescription;
