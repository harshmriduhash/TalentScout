import React, { useState } from "react";
import Group5 from "../../assets/Group 5.svg";

const faqs = [
  {
    question: "How do I prepare my bottles and cans for return?",
    answer:
      "Please place plastic bottles and aluminum cans in bags. It's extra helpful to use the bags we supply. For our employees' safety, glass must be separated into cardboard boxes or totes and will not be accepted in bags.",
  },
  {
    question: "How do I get paid for my returns?",
    answer:
      "Payments are processed directly through our system. You'll receive compensation based on the number of returned containers.",
  },
  {
    question: "Is there a limit to how many containers I can return at once?",
    answer:
      "There is no strict limit, but we encourage customers to contact us for large quantities so we can assist efficiently.",
  },
  {
    question: "How can I apply for a job?",
    answer:
      "To apply, fill out the required fields in the job application form, including your personal information, upload your resume, and submit the form.",
  },
  {
    question: "What documents do I need to upload?",
    answer:
      "You typically need to upload a resume and a cover letter in PDF, Word, or Docs format.",
  },
  {
    question: "Can I save my application and complete it later?",
    answer:
      "No, you must complete and submit the form in one sitting. Please ensure all details are ready before starting.",
  },
  {
    question: "What should I include in my cover letter?",
    answer:
      "Your cover letter should briefly highlight your skills, experiences, and why you are a good fit for the role.",
  },
  {
    question: "Is there a word limit for the cover letter?",
    answer:
      "Yes, the cover letter typically has a word limit. Check the instructions provided in the form.",
  },
  {
    question: "How will I know if my application was submitted successfully?",
    answer:
      "After submitting the application, you will receive a confirmation email or an on-screen confirmation message.",
  },
  {
    question: "Can I edit my application after submission?",
    answer:
      "No, once you submit your application, it cannot be edited. Double-check your information before submission.",
  },
  {
    question:
      "What if I don’t have all the required experience or skills listed?",
    answer:
      "You can still apply if you meet most of the requirements. Highlight your transferable skills in your resume and cover letter.",
  },
  {
    question: "What formats are accepted for resume uploads?",
    answer:
      "Accepted formats typically include PDF, Word (.doc or .docx), or Docs files.",
  },
  {
    question: "How will I know if I’ve been shortlisted for an interview?",
    answer:
      "Shortlisted candidates will be notified via email or phone with further instructions regarding the interview.",
  },
  {
    question: "Can I apply for more than one job position?",
    answer:
      "Yes, you can apply for multiple job positions, but you must submit a separate application for each.",
  },
  {
    question: "What happens after I submit my application?",
    answer:
      "After submission, the recruitment team will review your application. If shortlisted, you will be contacted for the next steps.",
  },
  {
    question: "How long does the recruitment process take?",
    answer:
      "The timeline varies by company, but you will typically hear back within a few weeks if you are shortlisted.",
  },
  {
    question:
      "Who can I contact if I encounter technical issues with the application?",
    answer:
      "If you face technical issues, check the job portal’s support page or contact the recruitment team using the provided contact details.",
  },
  {
    question: "Can I withdraw my application after submission?",
    answer:
      "Yes, you can withdraw your application by contacting the recruitment team or replying to the confirmation email.",
  },
  {
    question: "Do I need to create an account to apply for a job?",
    answer:
      "Some platforms require you to create an account for easy access to job updates, while others allow direct submissions.",
  },
  {
    question: "Is there an age limit for job applicants?",
    answer:
      "Age requirements, if applicable, will be mentioned in the job description.",
  },
  {
    question: "Will I receive feedback if I am not selected?",
    answer:
      "Unfortunately, most companies do not provide individual feedback unless otherwise mentioned.",
  },
  {
    question: "How can I prepare for the next steps after submission?",
    answer:
      "If shortlisted, you may be asked to provide additional information or attend an interview. Keep an eye on your email and phone for updates.",
  },
  {
    question: "Do I need to submit references with my application?",
    answer:
      "References are usually requested at a later stage. If needed upfront, the form will provide a section to include them.",
  },
];

const FAQPage = () => {
  //   const [openIndex, setOpenIndex] = useState(null);

  //   const toggleFAQ = (index) => {
  //     setOpenIndex(openIndex === index ? null : index);
  //   };

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div
      className="height-max"
      style={{ backgroundColor: "#F2FDFF", height: "100vh", margin: 0 }}
    >
      <header className="flex justify-between items-center p-4 bg-white">
        <div className="flex justify-between items-center">
          <img src={Group5} alt="TalentScout" className="w-30 h-15" />
          <h1 className="text-2xl font-bold text-gray-700 mx-10">
            FREQUENTLY ASKED QUESTIONS
          </h1>
        </div>
        <button
          className="text-white px-8 py-2 rounded hover:bg-blue-800"
          style={{ backgroundColor: "#144066" }}
          onClick={() => (window.location.href = "/job-application")}
        >
          Job Applicaiton
        </button>
      </header>

      <section className="mb-8 border-b pb-6 bg-white m-8 p-8 rounded-xl shadow">
        <h2 className="text-xl font-semibold mb-4" style={{ color: "#144066" }}>
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border rounded-lg overflow-hidden bg-[#F2FDFF] transition-colors duration-200"
            >
              <button
                className="w-full text-left p-4 focus:outline-none flex justify-between items-center"
                onClick={() => toggleFAQ(index)}
                style={{ color: "#069DD1" }}
              >
                <span className="font-medium">{faq.question}</span>
                <span className="text-4xl font-bold">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>
              {openIndex === index && (
                <div className="p-4 bg-[#F2FDFF] text-[#202020]">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default FAQPage;
