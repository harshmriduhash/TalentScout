import { Link, useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import Group5 from "../../assets/Group 5.svg";

export default function Layout({ children, buttonText }) {
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleClick = () => {
    buttonText === "SIGN IN" ? navigate("/login") : navigate("/register");
  };

  return (
    <div
      className="min-h-screen relative flex items-center justify-center h-full"
      style={{
        backgroundColor: "#F2FDFF",
      }}
    >
      <div
        className="absolute top-0 left-0 w-full h-full"
        style={{
          backgroundColor: "rgba(255, 255, 255, 0)",
          zIndex: 0,
        }}
      ></div>

      {/* Top-left image */}
      <img
        src={Group5}
        alt="Top-left decoration"
        className="absolute top-0 left-10 w-40 h-20 m-4"
      />

      {/* Top-right sign-in button */}
      <button
        onClick={handleClick} // Use navigate for routing
        className="absolute top-10 right-20 border w-35 border-black text-black font-bold px-4 py-2"
      >
        {buttonText} {/* Use buttonText instead of props.text */}
      </button>

      <div
        className="absolute top-0 left-0 w-full h-full bg-white"
        style={{
          clipPath: "polygon(0 50%, 100% 25%, 100% 100%, 0 100%)",
        }}
      ></div>

      {children}

      <footer className="absolute bottom-0 w-full text-center py-4 text-sm text-gray-500">
        © 2024 - {new Date().getFullYear()} All Rights Reserved TalentScout
      </footer>
    </div>
  );
}
