import React, { useState } from "react";

const CoverLetterSection = () => {
  const [editorValue, setEditorValue] = useState("");
  const maxWords = 200;

  // Function to calculate word count
  const wordCount = editorValue.split(/\s+/).filter(Boolean).length;

  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-600 mb-2">
        Cover Letter
      </label>

      <div className="relative">
        {/* Text Area with Word Count in the bottom-right */}
        <textarea
          rows="5"
          value={editorValue}
          onChange={(e) => setEditorValue(e.target.value)}
          placeholder="Write down a small cover letter to the hiring manager"
          className="w-full border border-gray-300 rounded-xl p-4 mt-1 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          style={{
            paddingBottom: "40px", // To make room for the word count at the bottom-right
          }}
        ></textarea>

        {/* Word count at the bottom-right inside the text field */}
        <p className="absolute text-sm text-gray-400 right-4 bottom-2">
          {wordCount}/{maxWords} words
        </p>
      </div>

      {/* Toolbar at the bottom */}
      <div className="flex gap-2 mt-2 justify-start">
        <button
          className="px-3 py-1 rounded-md bg-blue-100 text-blue-700 hover:bg-blue-200"
          onClick={() => setEditorValue(editorValue + "**Bold**")} // Just an example for Bold
        >
          Bold
        </button>
        <button
          className="px-3 py-1 rounded-md bg-blue-100 text-blue-700 hover:bg-blue-200"
          onClick={() => setEditorValue(editorValue + "_Italic_")} // Just an example for Italic
        >
          Italic
        </button>
        <button
          className="px-3 py-1 rounded-md bg-blue-100 text-blue-700 hover:bg-blue-200"
          onClick={() => setEditorValue(editorValue + "~Strikethrough~")} // Just an example for Strikethrough
        >
          Strike
        </button>
        <button
          className="px-3 py-1 rounded-md bg-blue-100 text-blue-700 hover:bg-blue-200"
          onClick={() =>
            setEditorValue(editorValue + "<ol><li>Item 1</li></ol>")
          } // Just an example for OL
        >
          OL
        </button>
        <button
          className="px-3 py-1 rounded-md bg-blue-100 text-blue-700 hover:bg-blue-200"
          onClick={() =>
            setEditorValue(editorValue + "<ul><li>Item 1</li></ul>")
          } // Just an example for UL
        >
          UL
        </button>
      </div>
    </div>
  );
};

export default CoverLetterSection;
