var path = require('path');

module.exports = {
  entry: [
    './src/root.js'
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
	{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['react', 'es2015', 'stage-1']
      }
    },{
		test: /\.less$/, loader: 'style!css!less'
	}
	]
  },
  resolve: {
	root: [path.join(__dirname, "./src")]
  },
  devtool: 'source-map',
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  }
};
