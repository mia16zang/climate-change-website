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
      <div className="container p-4 bg-white">
        <h2 className="text-2xl font-medium m-2">About</h2>
        <p className="text-justify">
          I made this project to explore the potential of combining data
          visualization with the principles of fun theory to create engaging and
          interactive experiences. Fun theory is the concept of incorporating
          fun and playfulness into non-game contexts to encourage positive
          behavior change and engagement. Through this project, I aim to develop
          interactive visualizations that not only present data in a visually
          compelling manner but also stimulate curiosity, encourage exploration,
          and evoke emotions. By integrating fun and playfulness into the design
          of the visualizations, I hope to enhance the user experience, increase
          engagement, and ultimately improve data comprehension and retention.
        </p>
      </div>
    </div>
  );
}

export default Home;
