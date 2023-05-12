import { useState } from "react";

function MyChart() {
  const [chartUrl, setChartUrl] = useState(
    "https://public.flourish.studio/visualisation/13726678/embed?auto=1&header=0&footer=0"
  );

  return (
    <div>
      <div>
        <iframe
          src={chartUrl}
          width="100%"
          height="600"
          frameBorder="0"
        ></iframe>
      </div>
    </div>
  );
}

export default MyChart;
