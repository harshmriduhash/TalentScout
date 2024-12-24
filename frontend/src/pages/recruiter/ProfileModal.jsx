export default function ProfileModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <button
        onClick={onClose}
        className="absolute h-10 w-10 bg-white right-4 top-4 text-black text-center hover:text-gray-600 z-10 rounded-3xl"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>

      <div className="bg-white rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto relative">
        {/* Close Button - Positioned relative to modal */}

        <div className="p-8">
          {/* Profile Header */}
          <div className="flex items-start gap-4">
            <img
              src="/placeholder.svg?height=80&width=80"
              alt=""
              className="w-20 h-20 rounded-full bg-gray-200"
            />
            <div className="flex-1">
              <h2 className="text-2xl font-semibold text-gray-900">
                Shahmeer Sheraz
              </h2>
              <p className="text-gray-600">Website Designer (UI/UX)</p>
            </div>
            <button className="px-6 py-2 text-sm text-white font-medium rounded-md bg-[#144066] hover:bg-[#0B2544] transition-colors">
              Shortlist
            </button>
          </div>

          {/* Two-column Layout */}
          <div className="mt-8 grid grid-cols-[2fr,1fr] gap-12">
            {/* Left Column: Cover Letter */}
            <div>
              <h3 className="text-lg font-semibold mb-6">COVER LETTER</h3>
              <div className="space-y-4 text-gray-600">
                <p>Dear Sir,</p>
                <p>
                  I am writing to express my interest in the fourth grade
                  instructional position that is currently available in the Fort
                  Wayne Community School System. I learned of the opening
                  through a notice posted on JobZone, IPFW's job database. I am
                  confident that my academic background and curriculum
                  development skills would be successfully utilized in this
                  teaching position.
                </p>
                <p>
                  I have just completed my Bachelor of Science degree in
                  Elementary Education and have successfully completed Praxis I
                  and Praxis II. During my student teaching experience, I
                  developed and initiated a three-week curriculum sequence on
                  animal species and earth resources. This collaborative unit
                  involved working with three other third grade teachers within
                  my team, and culminated in a field trip to the Indianapolis
                  Zoo Animal Research Unit.
                </p>
                <p>Sincerely,</p>
                <p>Esther Howard</p>
              </div>
            </div>

            {/* Right Column: Other Details */}
            <div className="space-y-8">
              {/* Personal Details Grid */}
              <div className="grid grid-cols-2 gap-x-8 gap-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 text-[#144066]">
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">DATE OF BIRTH</p>
                    <p className="font-medium">14 June, 2021</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 text-[#144066]">
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">NATIONALITY</p>
                    <p className="font-medium">Pakistan</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 text-[#144066]">
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">EXPERIENCE</p>
                    <p className="font-medium">7 Years</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 text-[#144066]">
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 14l9-5-9-5-9 5 9 5z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">EDUCATIONS</p>
                    <p className="font-medium">Master Degree</p>
                  </div>
                </div>
              </div>

              {/* Resume Download */}
              <div>
                <h3 className="text-lg font-semibold mb-4">
                  Download My Resume
                </h3>
                <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-gray-500">
                      PDF
                    </div>
                    <div>
                      <p className="font-medium">Esther Howard</p>
                      <p className="text-sm text-gray-500">PDF</p>
                    </div>
                  </div>
                  <button className="text-[#144066] hover:text-[#0B2544]">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Contact Information */}
              <div>
                <h3 className="text-lg font-semibold mb-4">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 text-[#144066]">
                      <svg
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">EMAIL ADDRESS</p>
                      <p className="font-medium">esther.howard@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 text-[#144066]">
                      <svg
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">PHONE</p>
                      <p className="font-medium">+92 123456789</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
