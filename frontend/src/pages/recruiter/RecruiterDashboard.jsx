import React, { useState } from "react";
import TalentScout from "../../assets/Group 5.svg";
import Frame from "../../assets/Frame.svg";
import Layout from "./RecruiterLayout";

const OpenJobForm = () => {
  return (
    <Layout>
      <header className="mb-8">
        <h2 className="text-xl font-bold">OPEN A JOB</h2>
      </header>
      <a href="/recruiter/open-job" className="block">
        <div className="h-[600px] flex flex-col">
          <section className="mb-8 border-b pb-6 bg-white p-6 rounded-xl shadow-sm flex justify-center items-center h-full">
            <img src={Frame} alt="Frame" className="w-1/5" />
          </section>
        </div>
      </a>
    </Layout>
  );
};

export default OpenJobForm;
