var path = require('path');

module.exports = {
  mode: 'development',
  entry: './scripts/core/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.bundle.js'
  }
};