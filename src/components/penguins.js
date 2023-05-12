import React from "react";
import { useNavigate } from "react-router-dom";

function Penguins() {
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate("/content");
  };
  return (
    <div className="bg-blue-100 p-10">
      <div className="container w-1/2 flex flex-rows items-center shadow-lg bg-white rounded-xl p-4 mt-10 mb-5">
        <h3 className="justify-center text-black font-medium text-3xl">
          Oh no! You helped make some penguins homeless.
        </h3>
      </div>
      <img
        src="https://media.istockphoto.com/id/1178519000/vector/cute-penguin-crying-on-ice-floe.jpg?s=612x612&w=0&k=20&c=Cp3wGqjXB2W-86r01U3Xs_PLPTmbJ0B8-pCmGeX1Ax4="
        alt=""
        className="container w-1/3 h-auto align-start"
      />
      <div className="container w-1/2 flex flex-rows justify-center">
        <h5 className="justify-center text-xl my-10 font-medium">
          Want to find out what happened?
        </h5>
      </div>
      <div className="flex justify-end m-4">
        <button
          className="rounded-2xl bg-white shadow-lg text-black text-xl p-3 font-medium hover:bg-gray-100 mr-4"
          onClick={handleSubmit}
        >
          Next <strong>></strong>
        </button>
      </div>
    </div>
  );
}

export default Penguins;
