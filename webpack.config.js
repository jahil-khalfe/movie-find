module.exports = {
	entry: './src/js/index.js',
	output: {
		filename: 'bundle.js',
		path: './app/js'
	},
	resolve: {
		extensions: ['', '.js', '.jsx']
	},
	module: {
		loaders: [
			{
				test: /\.js?$/,
				exclude: /node_modules/,
				loader: 'babel',
				query: {
					presets: ['es2015','stage-0', 'react']
				}
			}
		]
	}
};