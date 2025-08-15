module.exports = {
    // Other webpack configuration settings...
    module: {
      rules: [
        // Other rules...
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader', 'postcss-loader'],
        },
      ],
    },
  };
  