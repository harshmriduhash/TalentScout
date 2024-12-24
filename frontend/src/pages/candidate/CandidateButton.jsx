import React from "react";

export default function CandidateButton({
  href,
  children,
  variant = "primary",
  type = "button",
  onClick,
  className = "",
}) {
  const baseStyles = "px-8 py-2 rounded-md transition-colors text-center";
  const variants = {
    primary: "bg-[#05B4B4] text-white hover:bg-[#049A9A]",
    secondary:
      "bg-transparent text-[#05B4B4] border border-[#05B4B4] hover:bg-[#05B4B4] hover:text-white",
  };

  const ButtonComponent = href ? "a" : "button";
  const buttonProps = href ? { href } : { type, onClick };

  return (
    <ButtonComponent
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...buttonProps}
    >
      {children}
    </ButtonComponent>
  );
}
