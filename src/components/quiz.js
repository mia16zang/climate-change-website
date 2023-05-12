import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Quiz() {
  const navigate = useNavigate();
  // eslint-disable-next-line
  const [totalPoints, setTotalPoints] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState({});

  const questions = [
    {
      id: 1,
      question:
        "Hi! Wonderful morning isn't it? How do you wanna start this day?",
      options: [
        {
          text: "With a refreshing cold shower, of course.",
          points: 0,
          image:
            "https://media.istockphoto.com/id/1267626773/vector/man-taking-a-shower-of-frozen-water.jpg?s=612x612&w=0&k=20&c=vHALDo-PqQncEJy5dtAM-CcSPW8O59Jyo_UAXm0NtgE=",
        },
        {
          text: "A soothing warm shower sounds amazing right now.",
          points: 0.82,
          image:
            "https://t3.ftcdn.net/jpg/02/57/61/78/240_F_257617851_YATWlfMMWodKVwUMPSxQFYuYTkUWLurj.jpg",
        },
      ],
    },
    {
      id: 2,
      question: "I feel so fresh now! I am gonna have my breakfast while",
      options: [
        {
          text: "Reading the newspaper.",
          points: 0,
          image:
            "https://t3.ftcdn.net/jpg/01/25/16/24/240_F_125162474_8lfEO0xnZ2nOJE36qgAU4TGM45igB5OA.jpg",
        },
        {
          text: "Watching television.",
          points: 0.13,
          image:
            "https://t3.ftcdn.net/jpg/00/00/08/80/240_F_88032_g6TmZ1Jl3MJ6uYMok3LIEg7QMJkgUv.jpg",
        },
      ],
    },
    {
      id: 3,
      question:
        "Oh no! I got a little carried away. I am almost lat to work. I will",
      options: [
        {
          text: "drive my car to work, at my own convenience.",
          points: 4.6,
          image:
            "https://as1.ftcdn.net/v2/jpg/02/04/45/68/1000_F_204456881_51vJhhI3udmuQtOqZ2uZykISol60wjgs.jpg",
        },
        {
          text: "take the heavily crowded bus.",
          points: 0.25,
          image:
            "https://t3.ftcdn.net/jpg/01/62/34/70/240_F_162347025_0rmpBeEmabhAw1mQG2ApEFpxsGIRfX1V.jpg",
        },
      ],
    },
    {
      id: 4,
      question: "It's finally lunch break.I will",
      options: [
        {
          text: "Order the yummy chicken burger. I am absolutely starving!",
          points: 3.6,
          image:
            "https://t3.ftcdn.net/jpg/01/88/61/08/240_F_188610893_NehRehaawbcPuTYU5z2ZCByDjiqeChWP.jpg",
        },
        {
          text: "Have a salad, I am trying to be healthier.",
          points: 0.25,
          image:
            "https://t4.ftcdn.net/jpg/02/13/63/27/240_F_213632763_ewHQhkpUQstgvxIVXCKqLMEPo4LkCirh.jpg",
        },
      ],
    },
    {
      id: 5,
      question:
        "Thank god, I am finally home. Work was exhausting today. I am gonna",
      options: [
        {
          text: "Do the laundry, I have been ignoring it all week.",
          points: 6.5,
          image:
            "https://t4.ftcdn.net/jpg/02/74/16/21/240_F_274162141_JLJUPEwgevBGVU7uFQ4ZviCm2S1x3RxC.jpg",
        },
        {
          text: "Play some video games for an hour, I deserve to relax",
          points: 0.06,
          image:
            "https://t4.ftcdn.net/jpg/03/22/09/59/240_F_322095991_yA9omL3wevCYRDprDJP795WN41nw5tnu.jpg",
        },
      ],
    },
  ];
  //this is for selecting options
  const handleOptionSelect = (questionId, optionIndex) => {
    setSelectedOptions((prevSelectedOptions) => ({
      ...prevSelectedOptions,
      [questionId]: optionIndex,
    }));
    console.log(selectedOptions);
  };

  const handleSubmit = () => {
    let points = 0;
    questions.forEach((question) => {
      const selectedOptionIndex = selectedOptions[question.id];
      if (selectedOptionIndex !== undefined) {
        points += question.options[selectedOptionIndex].points;
      }
    });
    console.log(points);
    setTotalPoints(points);
    navigate("/results", { state: { points } });
  };

  return (
    <div className="container w-full h-full bg-blue-100 py-10">
      <div className="grid grid-cols-7">
        {questions.map((question) => (
          <div key={question.id} className="container col-start-2 col-span-5">
            <h3 className="container flex flex-cols items-center text-black w-3/4 bg-white shadow-lg p-4 rounded-md text-4xl font-medium p-8">
              {question.question}
            </h3>
            <div className="container w-3/4 space-y-2 flex flex-row items-center ">
              {question.options.map((option, index) => (
                <div
                  key={index}
                  className="space-y-2 flex flex-col items-center my-10"
                >
                  <img
                    src={option.image}
                    alt={`Option ${index + 1}`}
                    className="h-60 w-64 object-fit rounded-lg"
                  />
                  <button
                    className={`cursor-pointer w-1/2 p-2 text-black shadow-lg font-medium rounded-md m-4 mx-40 ${
                      selectedOptions[question.id] === index
                        ? "bg-blue-400 !important text-black !important hover:bg-blue-300"
                        : "bg-white text-black hover:bg-blue-300"
                    }`}
                    onClick={() => handleOptionSelect(question.id, index)}
                  >
                    {option.text}
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}
        <div className="container col-start-6">
          <button
            className="mt-4 bg-white shadow-lg hover:bg-gray-100 font-medium text-black px-4 py-2 rounded-md"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default Quiz;
