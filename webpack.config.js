const path = require("path");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

module.exports = {
  entry: "./src/app.js", // Replace with the path to your app's entry point
  output: {
    filename: "website.js", // Replace with the name you want for your output file
    path: path.resolve("website.js", "dist"), // Replace with the path to your output directory
  },
  module: {
    rules: [
      // Add any necessary loaders for your project's file types
      // For example, a rule for handling JavaScript files with Babel
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
    ],
  },
  plugins: [
    // Add any necessary plugins for your project
    // For example, a plugin for generating an HTML file
    new HtmlWebpackPlugin({
      template: "./public/index.html", // Replace with the path to your app's HTML file
      filename: "index.html", // Replace with the name you want for your output HTML file
    }),

    new ReactRefreshWebpackPlugin({
      // Options
    }),
  ],
};
