// webpack.config.js
module.exports = {
  // ... other configurations
  devtool: 'source-map',
  module: {
    rules: [
      // ... other rules
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader',
        exclude: [
          // exclude problematic source maps
          /node_modules\/@react-aria\/ssr\/dist/
        ],
      },
    ],
  },
};
