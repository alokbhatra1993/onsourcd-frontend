const path = require('path');

module.exports = {
  // other configurations
  devtool: 'source-map', // or adjust according to your needs

  module: {
    rules: [
      // other rules

      // JavaScript source map handling
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader',
        exclude: [
          // Exclude problematic source maps
          /node_modules\/@react-aria\/ssr\/dist/
        ],
      },

      // CSS handling
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: false, // or true, based on your preference
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: false, // or true, based on your preference
            },
          },
        ],
      },
    ],
  },
};
