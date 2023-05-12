import React from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Results() {
  const location = useLocation();
  const navigate = useNavigate();
  const totalPoints = location.state.points;

  const handleSubmit = () => {
    navigate("/penguins");
  };

  return (
    <div className="container w-full h-full bg-blue-100 p-10">
      <div className="container flex justify-center bg-white shadow-lg rounded-xl p-8 mx-40 my-60 w-4/5">
        <h2 className="flex justify-center  text-black font-medium text-4xl">
          Oh! Your actions today emitted {totalPoints}kg of CO2.
        </h2>
      </div>
      <div className="container flex justify-center">
        <button
          className="mt-4 bg-white text-black shadow-lg px-4 py-2 rounded-md text-3xl font-semibold hover:bg-gray-100 transform motion-safe:hover:scale-110 shadow-2xl drop-shadow-lg"
          onClick={handleSubmit}
        >
          Next <strong>></strong>
        </button>
      </div>
    </div>
  );
}

export default Results;
