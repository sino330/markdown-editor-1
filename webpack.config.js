const path = require("path");

module.exports = {
  //始めに読み込むfile
  entry: "./src/index.tsx",
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
    extensions: [".js", ".ts", ".tsx"],
  },
  //出力するfileの設定
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
    publicPath: "dist/",
  },
  devServer: {
    static: {
      //webpack dev serverのdefaultのdocument rootがpublicになっているので設定
      //webpack5系ではstatic propertyで指定
      directory: path.join(__dirname, "dist"),
    },
    //fileを変更すると自動的にブラウザに反映させるフラグ
    hot: true,
    //起動時にブラウザで開くフラグ
    open: true,
  },
};
