import React from "react";

function Area() {
  const chartUrl =
    "https://public.flourish.studio/visualisation/13728373//embed?auto=1&header=0&footer=0";

  return (
    <div style={{ height: "800px" }}>
      <iframe
        className="w-full h-full"
        src="https://public.flourish.studio/visualisation/13728373/embed?auto=1&header=0&footer=0"
        allowFullscreen
        frameBorder="0"
      ></iframe>
    </div>
  );
}

export default Area;
