import React from "react";
import Group5 from "../../assets/Group 5.svg"; // Adjust the path if necessary
import CoverLetterSection from "./CoverLetterSection";
import Cloud from "../../assets/cloud.svg";

const JobApplication = () => {
  return (
    <div>
      <div className="" style={{ backgroundColor: "#F2FDFF" }}>
        {/* Header */}
        <header className="flex justify-between items-center p-4 bg-white">
          <div className="flex justify-between items-center">
            <img src={Group5} alt="TalentScout" className="w-30 h-15" />
            <h1 className="text-2xl font-bold text-gray-700 mx-10">
              Job Application
            </h1>
          </div>
          <button
            className="text-white px-8 py-2 rounded hover:bg-blue-800"
            style={{ backgroundColor: "#144066" }}
            onClick={() => (window.location.href = "/faq")}
          >
            FAQs
          </button>
        </header>

        {/* Section 1: Job Details */}
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
              rows="6"
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
          {/* Additional Details */}
          {/* <div className="space-y-4 mb-4"> */}
          <div>
            <p className="font-medium text-gray-500">Number Of Vacancies: 3</p>
            {/* <p className="text-gray-600">3</p> */}
          </div>

          <div className="font-medium text-gray-500">
            <p className="font-medium text-gray-500">
              Job Location: Karachi, Pakistan
            </p>
            {/* <p className="text-gray-600"></p> */}
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
            {/* Alternative static text option */}
            {/* <p className="text-gray-600">Part-time, On-site</p> */}
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
            {/* Alternative static text option */}
            {/* <p className="text-gray-600">Part-time, On-site</p> */}
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
            {/* Alternative static text option */}
            {/* <p className="text-gray-600">Part-time, On-site</p> */}
          </div>
          {/* </div> */}
        </section>

        {/* Section 2: Applicant's Information */}
        <section className="mb-8 border-b pb-6 bg-white m-8 p-8 rounded-xl shadow">
          <h2
            className="text-xl font-semibold mb-4"
            style={{ color: "#144066" }}
          >
            Applicant's Information
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { label: "First Name", placeholder: "React Developer" },
              { label: "Last Name", placeholder: "React Developer" },
              { label: "Date Of Birth", type: "date" },
              { label: "Email", placeholder: "shahmeer@gmail.com" },
              { label: "Contact Number", placeholder: "03332521327" },
              { label: "Country Of Residence", placeholder: "Pakistan" },
            ].map(({ label, type = "text", placeholder }, idx) => (
              <div key={idx}>
                <label className="block text-sm font-medium text-gray-500 mb-2">
                  {label}
                </label>
                <input
                  type={type}
                  placeholder={placeholder}
                  className="w-full border border-gray-300 text-[#21315C] rounded-md py-2 px-4 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            ))}
          </div>
        </section>

        {/* Section 3: Applicant's Experience */}
        <section className="mb-8 border-b pb-6 bg-white m-8 p-8 rounded-xl shadow">
          <h2
            className="text-xl font-semibold mb-4"
            style={{ color: "#144066" }}
          >
            Applicant's Experience
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Education Level */}
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">
                Education Level
              </label>
              <div className="flex gap-2 mt-1">
                {["Intermediate", "Bachelor's", "Masters", "Other"].map(
                  (level) => (
                    <button
                      key={level}
                      className="bg-blue-100 text-blue-900 px-3 py-1 rounded hover:bg-blue-200"
                    >
                      {level}
                    </button>
                  )
                )}
              </div>
            </div>

            {/* Other Education */}
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">
                If Other (Specify)
              </label>
              <input
                type="text"
                placeholder="e.g PHD"
                className="w-full border border-gray-300 rounded-md p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* Work Experience */}
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">
                Work Experience (In Years)
              </label>
              <input
                type="number"
                placeholder="3"
                className="w-full border border-gray-300 rounded-md p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>
        </section>

        {/* Section 4: Job-Specific Information */}
        <section className="mb-8 border-b pb-6 bg-white m-8 p-8 rounded-xl shadow">
          <h2
            className="text-xl font-semibold mb-4"
            style={{ color: "#144066" }}
          >
            Job-Specific Information
          </h2>

          {/* Cover Letter */}
          {/* <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600 mb-2">
              Cover Letter
            </label>
            <textarea
              rows="5"
              placeholder="Write down a small cover letter to the hiring manager"
              className="w-full border border-gray-300 rounded-md p-2 mt-1 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            ></textarea>
            <p className="text-right text-sm text-gray-400">10/200 words</p>
          </div> */}
          <CoverLetterSection />

          {/* Resume Upload */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-2">
              Resume
            </label>
            <div className="p-12 rounded-md text-center bg-[#F1F2F4]">
              <img src={Cloud} alt="Cloud" className="w-20 h-20 mx-auto" />
              <p className="text-gray-500">
                <strong>Browse files</strong> or drop here
              </p>
              <p className="text-sm text-gray-400 mt-1">
                Supported format: PDF, Word, Docs.
              </p>
            </div>
          </div>
        </section>

        {/* Submit Button */}
        <section className="p-8" style={{ marginTop: -40 }}>
          <div className="text-right mt-6">
            <button className="bg-[#144066] text-white px-6 py-2 rounded hover:bg-blue-800">
              Submit
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default JobApplication;
