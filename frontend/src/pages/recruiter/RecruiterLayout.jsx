import React, { useState, useEffect } from "react";
import TalentScout from "../../assets/Group 5.svg";

export default function SidebarLayout({ children }) {
  // Get the current selection from localStorage, or default to 'dashboard'
  const storedSelection = localStorage.getItem("currentSelection") || "dashboard";
  const [currentSelection, setCurrentSelection] = useState(storedSelection);

  // Update localStorage whenever currentSelection changes
  useEffect(() => {
    localStorage.setItem("currentSelection", currentSelection);
  }, [currentSelection]);

  return (
    <div className="flex h-screen bg-[#F2FDFF] overflow-hidden">
      {/* Sidebar: Fixed on the left */}
      <aside className="w-1/7 bg-white p-0 h-screen flex-shrink-0 fixed top-0 left-0">
        <img onClick={() => (window.location.href = "/recruiter")} src={TalentScout} alt="TalentScout" className="w-56 h-28 mx-6" />
        <nav>
          <ul className="space-y-0">
            {/* Dashboard Button */}
            <a
              href="/recruiter/dashboard"
              className="block"
              onClick={() => setCurrentSelection("dashboard")}
            >
              <li
                className={`py-3 px-6 font-bold cursor-pointer ${
                  currentSelection === "dashboard"
                    ? "text-white bg-[#144066]" // Active state
                    : "text-[#5E5E5E]"
                }`}
              >
                Dashboard
              </li>
            </a>
            {/* Jobs Button */}
            <a
              href="/recruiter"
              className="block"
              onClick={() => setCurrentSelection("jobs")}
            >
              <li
                className={`py-3 px-6 font-bold cursor-pointer ${
                  currentSelection === "jobs"
                    ? "text-white bg-[#144066]" // Active state
                    : "text-[#5E5E5E]"
                }`}
              >
                Jobs
              </li>
            </a>
          </ul>
        </nav>
      </aside>
      {/* Main content area */}
      <main className="flex-1 p-8 overflow-y-auto max-h-screen ml-[16.67%]">
        {children}
      </main>{" "}
      {/* Adjusting for sidebar width */}
    </div>
  );
}
