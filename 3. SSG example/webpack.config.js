const path = require("path");
const nodeExternals = require("webpack-node-externals");

const config = {
  entry: path.resolve(__dirname, "src/generator.ts"),
  output: {
    filename: "generator.js",
    path: path.resolve(__dirname, "dist"),
  },
  target: "node",
  mode: "development",
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  experiments: {
    topLevelAwait: true,
  },
};

module.exports = config;
