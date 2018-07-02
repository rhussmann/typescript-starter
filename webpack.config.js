const path = require("path");

module.exports = {
  entry: "./src/index.tsx",
  devtool: "source-map",
  mode: "development",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "awesome-typescript-loader",
      },
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader",
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js", ".tsx"],
    modules: ["node_modules", "src"],
  },
  output: {
    filename: "bundle.js",
    publicPath: "/build/",
    path: path.resolve(__dirname, "dist/build"),
  },
  externals: {
    react: "React",
    "react-dom": "ReactDOM",
  },
};
