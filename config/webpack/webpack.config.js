// const { webpackConfig } = require('shakapacker')
const { webpackConfig, merge } = require('shakapacker')

// See the shakacode/shakapacker README and docs directory for advice on customizing your webpackConfig.
const options = {
    resolve: {
        extensions: ['.mjs', '.js', '.sass', ".scss", ".css", ".module.sass", ".module.scss", ".module.css", ".png", ".svg", ".gif", ".jpeg", ".jpg"]
    }
  }

  module.exports = merge(webpackConfig, options);
// module.exports = webpackConfig
