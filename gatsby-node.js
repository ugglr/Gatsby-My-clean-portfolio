const webpack = require("webpack")

exports.onCreateWebpackConfig = ({ stage, actions, plugins }) => {
  actions.setWebpackConfig({
    plugins: [
      plugins.define({
        "global.GENTLY": false,
      }),
    ],
  })
}
