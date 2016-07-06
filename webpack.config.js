module.exports = {
  externals: {
    "react": "React",
  },
  entry: "./src/index.js",
  output: {
    library: "ReactBlox",
    libraryTarget: "umd",
    path: __dirname + "/dist",
    filename: "ReactBlox.js"
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel"
      }
    ]
  }
}
