import React from "react";

function Area() {
  const chartUrl =
    "https://public.flourish.studio/visualisation/13728373//embed?auto=1&header=0&footer=0";

  return (
    <div style={{ height: "800px" }}>
      <iframe
        title="Chart 4"
        className="w-full h-full"
        src={chartUrl}
        allowFullscreen
        frameBorder="0"
      ></iframe>
    </div>
  );
}

export default Area;
