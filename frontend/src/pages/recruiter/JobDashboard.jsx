import React, { useState } from "react";
import TalentScout from "../../assets/Group 5.svg";
import ProfileModal from "./ProfileModal";
import Layout from "./RecruiterLayout";

const JobDashboard = () => {
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);

  const applicants = [
    {
      name: "Shahmeer Sheraz",
      education: "Bachelors",
      experience: "3 years",
      resumeScore: "67",
      image: "/placeholder.svg?height=32&width=32",
    },
    {
      name: "Shahmeer Sheraz",
      education: "Bachelors",
      experience: "3 years",
      resumeScore: "67",
      image: "/placeholder.svg?height=32&width=32",
    },
    {
      name: "Shahmeer Sheraz",
      education: "Bachelors",
      experience: "3 years",
      resumeScore: "67",
      image: "/placeholder.svg?height=32&width=32",
    },
    {
      name: "Shahmeer Sheraz",
      education: "Bachelors",
      experience: "3 years",
      resumeScore: "67",
      image: "/placeholder.svg?height=32&width=32",
    },
  ];

  return (
    <div>
      <Layout>
        <header className="flex justify-between items-center mb-8">
          <h2 className="text-xl font-bold">
            Opened Jobs &gt; React JS Developer
          </h2>
        </header>

        <section className="mb-8 border-b pb-6 bg-white m-6 p-6 rounded-xl shadow">
          <h2
            className="text-xl font-semibold mb-4"
            style={{ color: "#144066" }}
          >
            Job Specific Information
          </h2>
          <p className="text-gray-500 mb-2">
            <strong>
              Job Title: Junior ReactJS Frontend Engineer required at
              CodeVenture LLC
            </strong>
          </p>

          <p className="text-gray-600 mb-4">
            <strong className="text-gray-500">Job Description:</strong>
            <textarea
              className="w-full bg-white text-gray-500 border border-gray-500 rounded p-2 mt-2 rounded-xl resize-none"
              readOnly
              rows="8"
            >
              We are seeking a skilled React Native Developer with at least 2
              years of experience to join our dynamic development team. The
              ideal candidate will be responsible for building and maintaining
              mobile applications for both iOS and Android platforms using React
              Native. You will collaborate with cross-functional teams to
              design, develop, and implement innovative solutions, ensuring a
              seamless user experience. Key Responsibilities: Develop and
              maintain high-quality mobile applications using React Native. Work
              with UI/UX designers to implement visually appealing and
              responsive user interfaces. Write clean, efficient, and reusable
              code. Integrate third-party libraries and APIs. Troubleshoot and
              debug application issues. Collaborate with backend developers to
              integrate frontend with backend systems. Participate in code
              reviews and follow best practices for mobile development. Skills:
              Proficient in React Native, with expertise in building and
              maintaining cross-platform mobile applications for iOS and
              Android. Strong understanding of UI/UX design principles,
              responsive design, and implementing visually appealing interface.
            </textarea>
          </p>

          <p className="font-medium text-gray-500 mb-2">Required Skills:</p>
          <div className="flex gap-2 flex-wrap mb-4">
            {["React", "JavaScript", "Node", "HTML", "CSS"].map((skill) => (
              <span
                key={skill}
                className="text-white px-3 py-1 rounded-2xl text-sm"
                style={{ backgroundColor: "#144066" }}
              >
                {skill}
              </span>
            ))}
          </div>
          <div>
            <p className="font-medium text-gray-500">Number Of Vacancies: 3</p>
          </div>

          <div className="font-medium text-gray-500">
            <p className="font-medium text-gray-500">
              Job Location: Karachi, Pakistan
            </p>
          </div>

          <div>
            <p className="font-medium text-gray-500 mb-2">Employment Type:</p>
            <div className="flex gap-2 flex-wrap mb-4">
              {["Part-time", "On-site"].map((type) => (
                <span
                  key={type}
                  className="p-3 rounded-lg text-sm bg-white text-[#21315C] border border-gray-300"
                >
                  {type}
                </span>
              ))}
            </div>
          </div>

          <div>
            <p className="font-medium text-gray-500 mb-2">Experience:</p>
            <div className="flex gap-2 flex-wrap mb-4">
              {["Junior-level"].map((type) => (
                <span
                  key={type}
                  className="p-3 rounded-lg text-sm bg-white text-[#21315C] border border-gray-300"
                >
                  {type}
                </span>
              ))}
            </div>
          </div>
          <div>
            <p className="font-medium text-gray-500 mb-2">
              Expected Monthly Salary?
            </p>
            <div className="flex gap-2 flex-wrap">
              {["Rs. 100k-150k"].map((type) => (
                <span
                  key={type}
                  className="p-3 rounded-lg text-sm bg-white text-[#21315C] border border-gray-300"
                >
                  {type}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="mb-8 bg-white m-6 p-6 rounded-xl shadow">
          <h2 className="text-xl font-semibold mb-6 text-[#144066]">
            Job Applicants
          </h2>

          <div className="bg-[#E6EDFF] rounded-xl overflow-hidden">
            {/* Table Header */}
            <div className="grid grid-cols-6 gap-4 p-4 text-sm font-medium text-black">
              <div className="text-center">Name</div>
              <div className="text-center">Education</div>
              <div className="text-center">Experience</div>
              <div className="text-center">Resume Score</div>
              <div className="text-center">Profile</div>
              <div className="text-center">Action</div>
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
                  <div className="text-[#121212] text-center">
                    {applicant.resumeScore}
                  </div>
                  <div className="flex justify-center">
                    <button
                      className="px-4 py-2 text-[#121212] hover:text-gray-900 flex items-center gap-2 border border-gray-400 rounded-md shadow-sm"
                      onClick={() => setIsProfileModalOpen(true)}
                    >
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
                    <button className="px-4 py-2 text-sm text-white rounded-md bg-[#144066] hover:bg-[#0B2544] transition-colors shadow-sm">
                      Invite for Interview
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
      </Layout>

      <ProfileModal
        isOpen={isProfileModalOpen}
        onClose={() => setIsProfileModalOpen(false)}
      />
    </div>
  );
};

export default JobDashboard;
