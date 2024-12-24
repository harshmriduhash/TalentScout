import React from "react";
import TalentScout from "../../assets/Group 5.svg";

const JobDashboard = () => {
  const applicants = [
    {
      name: "Shahmeer Sheraz",
      education: "Bachelors",
      experience: "3 years",
      evaluationScore: "Pending Interview",
      image: "/placeholder.svg?height=32&width=32",
    },
    {
      name: "Shahmeer Sheraz",
      education: "Bachelors",
      experience: "3 years",
      evaluationScore: "67",
      image: "/placeholder.svg?height=32&width=32",
    },
    {
      name: "Shahmeer Sheraz",
      education: "Bachelors",
      experience: "3 years",
      evaluationScore: "67",
      image: "/placeholder.svg?height=32&width=32",
    },
    {
      name: "Shahmeer Sheraz",
      education: "Bachelors",
      experience: "3 years",
      evaluationScore: "Pending Interview",
      image: "/placeholder.svg?height=32&width=32",
    },
  ];

  return (
    <div className="flex min-h-screen bg-[#F2FDFF]">
      <aside className="w-1/7 bg-white p-0">
        <img src={TalentScout} alt="TalentScout" className="w-56 h-28 mx-6" />
        <nav>
          <ul className="space-y-0">
            <li className="text-[#5E5E5E] py-3 px-6 font-bold">Dashboard</li>
            <li className="text-white bg-[#144066] py-3 px-6 font-bold">
              Jobs
            </li>
          </ul>
        </nav>
      </aside>

      <main className="flex-1 p-8">
        <header className="flex justify-between items-center mb-8">
          <h2 className="text-xl font-bold">
            OPENED JOBS &gt; REACT JS DEVELOPER &gt; SHORTLISTED CANDIDATES
          </h2>
        </header>

        <section className="mb-8 bg-white m-6 p-6 rounded-xl shadow">
          <h2 className="text-xl font-semibold mb-6 text-[#144066]">
            Shortlisted Applicants
          </h2>

          <div className="bg-[#E6EDFF] rounded-xl overflow-hidden">
            {/* Table Header */}
            <div className="grid grid-cols-6 gap-4 p-4 text-sm font-medium text-black">
              <div className="text-center">Name</div>
              <div className="text-center">Education</div>
              <div className="text-center">Experience</div>
              <div className="text-center">Evaluation Score</div>
              <div className="text-center">Profile</div>
              <div className="text-center">Report</div>
            </div>

            {/* Applicant Rows */}
            <div className="divide-y divide-gray-200">
              {applicants.map((applicant, index) => (
                <div
                  key={index}
                  className="grid grid-cols-6 gap-4 p-4 bg-white items-center text-sm"
                >
                  <div className="flex items-center gap-3">
                    <img
                      src={applicant.image}
                      alt={applicant.name}
                      className="w-8 h-8 rounded-full object-cover"
                    />
                    <span className="font-medium text-[#121212]">
                      {applicant.name}
                    </span>
                  </div>
                  <div className="text-[#121212] text-center">
                    {applicant.education}
                  </div>
                  <div className="text-[#121212] text-center">
                    {applicant.experience}
                  </div>
                  <div className="text-center">
                    {applicant.evaluationScore === "Pending Interview" ? (
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-amber-50 text-amber-600">
                        • Pending Interview
                      </span>
                    ) : (
                      <span className="text-[#121212]">
                        {applicant.evaluationScore}
                      </span>
                    )}
                  </div>
                  <div className="flex justify-center">
                    <button className="px-4 py-2 text-[#121212] hover:text-gray-900 flex items-center gap-2 border border-gray-400 rounded-md shadow-sm">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        ></path>
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        ></path>
                      </svg>
                      View Profile
                    </button>
                  </div>
                  <div className="flex justify-center">
                    <button className="px-4 py-2 text-sm text-white rounded-md bg-[#144066] hover:bg-[#0B2544] transition-colors shadow-sm flex items-center gap-2">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"
                        />
                      </svg>
                      Download Report
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="p-8" style={{ marginTop: -40 }}>
          <div className="flex justify-end mt-6 space-x-4">
            <button className="px-6 py-2 text-[#121212] hover:text-gray-900 flex items-center gap-2 border border-gray-400 rounded-md shadow-sm">
              Back
            </button>
            <button className="px-6 py-2 text-sm text-white rounded-md bg-[#144066] hover:bg-[#0B2544] transition-colors shadow-sm">
              Next
            </button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default JobDashboard;
