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
      <div className="bg-white flex align-center pt-40 px-40 z-10 py-20">
        <h1 className="text-5xl font-bold flex justify-center">
          Welcome! This is my project on visualizing Climate Change using Fun
          Theory.
        </h1>
      </div>
      <div className="container p-4 grid grid-cols-4">
        <h2 className="text-2xl font-medium col-start-2 my-5">
          Go to quiz here:
        </h2>
        <button
          className="flex justify-center col-start-3 mt-4 bg-white shadow-lg hover:bg-gray-100 font-medium items-center text-black px-4 py-2 rounded-md"
          onClick={handleSubmit}
        >
          Start
        </button>
      </div>
    </div>
  );
}

export default Home;
