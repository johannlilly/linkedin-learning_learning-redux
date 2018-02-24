module.exports = {
	// where to start
	entry: "./src/index.js",
	// place bunder in assets folder
	output: {
		path: "dist/assets",
		filename: "bundle.js",
		publicPath: "assets"
	},
	//  dev server
	devServer: {
		// use client entry point
		inline: true,
		// where to serve content from
		contentBase: "./dist",
		port: 3000
	},
	// instructions on how to transpile code that goes into this bundle
	module: {
		// used when you import modules to transpile them
		loaders: [
			{
				// start with babel on anything ending in .js
				test: /\.js$/,
				// exclude anything in the node_modules folder
				exclude: /(node_modules)/,
				// which loader?
				loader: ['babel'],
				// which presets to transpile our code?
				// use same presets as in .babelrc file
				query: {
					presets: ['latest', 'stage-0']
				}
			},
			// add a loader for json
			{
				// test for the json extension
				test: /\.json$/,
				exclude: /(node_modules)/,
				loader: ['json-loader'],
			}
		]
	}
}