const { resolve } = require('path');

module.exports = {
  mode: process.env.LANDO ? 'development' : 'production',
  entry: {
    main: './js/main.js',
  },
  output: {
    path: resolve(__dirname, 'js'),
    filename: '[name].js',
    // Follow existing sourcemap nesting convention set in
    // gulpfile for CSS mapping.
    sourceMapFilename: 'sourcemaps/[name].js.map', 
  },
  externals: {
    Drupal: 'Drupal',
    jQuery: 'jQuery',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
    ],
  },
  devtool: 'source-map',
}
