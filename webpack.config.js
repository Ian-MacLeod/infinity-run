module.exports = {
  entry: "./js/infinityRun.js",
  output: {
    filename: "./bundle.js"
  },
  module: {
    loaders: [
      {
        test: [/\.jsx?$/],
        exclude: /(node_modules)/,
        loader: "babel-loader",
        query: {
          presets: ["env"]
        }
      }
    ]
  },
  devtool: "source-map",
  resolve: {
    extensions: [".js", "*"]
  }
};
