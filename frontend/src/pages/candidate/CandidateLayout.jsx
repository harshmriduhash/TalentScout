import React from "react";
import CandidateButton from "./CandidateButton";
import TalentScout from "../../assets/Group 5.svg";
import Star from "../../assets/Star 1.svg";

export default function CandidateLayout({ children }) {
  return (
    <div className="min-h-screen relative bg-white">
      <header className="border-b">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img
              src={TalentScout}
              alt="TalentScout Logo"
              className="h-20 w-40"
            />
            <span className="text-[#484642] font-medium">
              AI-powered Evaluation
            </span>
          </div>
          <CandidateButton href="/faqs">FAQs</CandidateButton>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">{children}</main>

      <div className="fixed bottom-0 left-0 pointer-events-none">
        <img src={Star} alt="" className="w-32 h-32" />
      </div>
    </div>
  );
}
