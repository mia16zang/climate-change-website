function MyChart() {
  const chartUrl =
    "https://public.flourish.studio/visualisation/13726678/embed?auto=1&header=0&footer=0";
  return (
    <div>
      <div>
        <iframe
          title="Chart 1"
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
