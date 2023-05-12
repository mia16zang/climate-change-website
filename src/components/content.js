import React from "react";
import MyChart from "./chart";
import MyStory from "./chart2";
import Carousel from "./carousel";
import MySankey from "./chart3";
import Navbar from "./navbar";

function Content() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="bg-white w-full grid justify-items-start w-2/3">
        <img src="/images/penguin-rsl.jpg" alt="Description of image" />
      </div>
      <div className="w-full p-4 mb-2 bg-blue-100 grid grid-cols-3">
        <div className="container mr-8 p-4 pr-8 pt-40  col-span-1 flex-col items-center">
          <div>
            <h2 className="text-3xl font-bold my-4">Rising Sea Levels</h2>
          </div>
          <div className="flex flex-col">
            <p className="block text-justify ">
              Rising sea levels are caused by a combination of factors,
              including the melting of glaciers and ice sheets, the thermal
              expansion of seawater due to warming temperatures, and changes in
              ocean currents. The effects of rising sea levels include coastal
              flooding, saltwater intrusion, coastal erosion, displacement of
              people, and economic impacts. These effects pose significant
              threats to human societies and ecosystems around the world and
              require action to mitigate the impacts of climate change.{" "}
            </p>
          </div>
        </div>
        <div className="col-span-2 col-start-2 items-end">
          <div className="w-full">
            <MyChart />
          </div>
        </div>
      </div>
      <div className="container bg-white w-full items-end">
        <img src="/images/penguin-mic.jpg" alt="Description of image" />
      </div>
      <div className="w-full p-4 mb-2 bg-blue-100 grid grid-cols-3">
        <div className="col-span-2">
          <MyStory />
        </div>
        <div className="flex justify-center ml-8 p-4 col-span-1  flex-col items-center">
          <div>
            <h2 className="text-3xl font-bold my-4">Rising Temperatures</h2>
          </div>
          <div className="flex flex-col">
            <p className="block text-justify ">
              {" "}
              Global warming is the long-term increase in the Earth's average
              temperature due to human activities, such as burning fossil fuels
              and deforestation. This leads to an increase in greenhouse gases
              in the atmosphere, which trap more heat and cause temperatures to
              rise.
            </p>
          </div>
        </div>
      </div>
      <div className="container w-full bg-white p-10">
        <div>
          <h2 className="text-3xl font-bold my-4">
            What are Greenhouse Gas emissions?
          </h2>
        </div>
        <div className="flex flex-col">
          <p className="block text-justify ">
            {" "}
            The most common greenhouse gases are carbon dioxide, methane, and
            nitrous oxide, which are emitted by a variety of human and natural
            sources.Human activities are the primary source of greenhouse gas
            emissions. The burning of fossil fuels, such as coal, oil, and gas,
            is the largest source of carbon dioxide emissions. When we use these
            fuels to generate electricity, power our transportation systems, and
            heat our homes and businesses, carbon dioxide is released into the
            atmosphere. the major factors responsible for greenhouse gas
            emissions include the burning of fossil fuels, deforestation,
            agriculture, industrial processes, and natural sources such as
            volcanic activity and wildfires. It is essential to reduce these
            emissions to mitigate the impacts of climate change.
          </p>
        </div>
      </div>
      <div className="bg-blue-100  w-full pb-10">
        <div className="container w-2/3">
          <Carousel />
        </div>
      </div>
      <div className="container bg-white w-full p-10">
        <h2 className="font-bold text-2xl">
          So what does all of this have to do with you?{" "}
        </h2>
        <p className="block text-justify">
          You might think that this was a bit unfair, you are not solely
          responsible for the penguins losing their homes. And you are not, but
          even though the CO2 emissions you spent today seem small, the
          cumulative effect of billions of people doing numerous activities that
          release greenhouse gas emissions is massive.It is vital for each of us
          to recognize the impact of our daily CO2 actions on climate change.The
          cumulative effect of these actions on the environment contributes to a
          "butterfly effect" that can lead to severe consequences such as rising
          sea levels, extreme weather conditions, and displacement of people. As
          we go about our daily lives, it is essential to be mindful of the
          actions we take and their impact on the environment. Small changes
          such as reducing energy consumption, using public transportation, and
          limiting single-use plastics can add up over time to make a
          significant difference in mitigating climate change. We must also
          recognize that tackling climate change requires collaboration at all
          levels, from individuals to businesses and governments. By working
          together, we can implement larger-scale solutions such as
          transitioning to renewable energy sources and sustainable
          infrastructure. So, let us all take responsibility for our daily CO2
          emissions and take steps to reduce our carbon footprint. By doing so,
          we can play our part in creating a sustainable future for ourselves
          and future generations and protect our planet from the adverse effects
          of climate change.
        </p>
      </div>
    </div>
  );
}

export default Content;
