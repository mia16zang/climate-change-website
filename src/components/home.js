import React from "react";
import Navbar from "./navbar";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate("/quiz");
  };

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="flex align-center pt-40 px-40 z-10">
        <h1 className="text-5xl font-bold flex justify-center">
          Welcome! This is my project on visualizing Climate Change using Fun
          Theory.
        </h1>
      </div>
      <div>
        <button
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md"
          onClick={handleSubmit}
        >
          Start
        </button>
      </div>
    </div>
  );
}

export default Home;
