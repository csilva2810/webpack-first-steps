module.exports = {
    entry: './scripts/main.js',
    output: {
        filename: './scripts/bundle.js'
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          enforce: 'pre',
          exclude: /node_modules/,
          loader: 'jshint-loader'
        },
        {
          test: /\.js$/,
          enforce: 'post',
          exclude: /node_modules/,
          loader: 'babel-loader',
          query: {
            presets: ['es2015']
          }
        },
        {
          test: /\.scss$/,
          enforce: 'post',
          exclude: /node_modules/,
          loader: 'style-loader!css-loader!sass-loader'
        },
        {
          test: /\.(jpg|png|gif)$/,
          enforce: 'post',
          include: /images/,
          loader: 'url-loader'
        }
      ],
      loaders: []
    }
};