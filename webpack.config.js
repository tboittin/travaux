const MiniCssExtractPlugin = require("mini-css-extract-plugin")

const config = {
  module: {
    rules: [
      {
        test: /(\.module)?.(sass|scss)$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: {
                localIdentName: "[path][name]__[local]--[hash:base64:5]",
              },
              sourceMap: true,
            },
          },
          "sass-loader",
        ],
      },
    ],
  },
}
