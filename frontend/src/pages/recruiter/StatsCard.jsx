import React from "react";

export function StatsCard({ title, value, percentage, variant = "default" }) {
  const bgColor = {
    default: "bg-white",
    light: "bg-[#F8FAFC]",
    dark: "bg-[#144066]",
  }[variant];

  const textColor = variant === "dark" ? "text-white" : "text-[#999999]";

  return (
    <div
      className={`${bgColor} p-6 rounded-tl-lg rounded-tr-3xl rounded-bl-3xl rounded-br-lg`}
      style={{ boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.15)" }}
    >
      <div className="flex justify-between items-start">
        <div>
          <p className={`text-md ${textColor}`}>{title}</p>
          <p
            className={`text-4xl font-semibold mt-1 ${
              variant === "dark" ? "text-white" : "text-[#999999]"
            }`}
          >
            {value}
          </p>
        </div>
        {percentage !== undefined && (
          <div className="relative w-20 h-20">
            <svg className="w-full h-full" viewBox="0 0 36 36">
              <circle
                cx="18"
                cy="18"
                r="16"
                fill="none"
                className="stroke-current text-blue-100"
                strokeWidth="2"
              />
              <circle
                cx="18"
                cy="18"
                r="16"
                fill="none"
                className="stroke-current text-white"
                strokeWidth="2"
                strokeDasharray={`${percentage} 100`}
                transform="rotate(-90 18 18)"
              />
            </svg>
            <span className="absolute inset-0 flex items-center justify-center text-sm text-white">
              {percentage}%
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
