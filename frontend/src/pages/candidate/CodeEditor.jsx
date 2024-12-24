import React, { useState } from "react";

export default function CodeEditor() {
  const [code, setCode] = useState(`// React component
function HelloMessage({ name }) {
  return (
    <div>
      Hello {name}
    </div>
  );
}`);

  const handleClear = () => {
    setCode("");
  };

  const handleSave = () => {
    // Add save functionality here
    console.log("Saving code:", code);
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-4">
      <div className="relative border border-gray-300 rounded">
        <div className="absolute left-0 top-0 bottom-0 w-12 bg-gray-100 flex flex-col items-center pt-4 text-sm text-gray-400">
          {code.split("\n").map((_, i) => (
            <div key={i} className="h-6">
              {i + 1}
            </div>
          ))}
        </div>
        <textarea
          value={code}
          onChange={(e) => setCode(e.target.value)}
          className="w-full min-h-[200px] pl-16 pr-4 py-4 font-mono text-sm bg-white resize-none focus:outline-none"
          spellCheck="false"
        />
      </div>
      <div className="flex justify-end gap-2 mt-4">
        <button
          onClick={handleClear}
          className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300"
        >
          Clear
        </button>
        <button
          onClick={handleSave}
          className="px-4 py-2 bg-teal-500 text-white rounded hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-300"
        >
          Save
        </button>
      </div>
    </div>
  );
}
