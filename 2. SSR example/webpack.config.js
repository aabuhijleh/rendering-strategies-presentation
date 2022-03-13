const path = require("path");
const nodeExternals = require("webpack-node-externals");

const commonConfig = {
  mode: "development",
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
};

const serverConfig = {
  ...commonConfig,
  target: "node",
  externals: [nodeExternals()],
  entry: "./src/server.tsx",
  output: {
    filename: "server.js",
    path: path.resolve(__dirname, "dist"),
  },
};

const frontendConfig = {
  ...commonConfig,
  entry: "./src/frontend.tsx",
  output: {
    filename: "frontend.js",
    path: path.resolve(__dirname, "public"),
  },
};

module.exports = [serverConfig, frontendConfig];
