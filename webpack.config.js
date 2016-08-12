const path = require('path');

module.exports = {
    entry: path.join(__dirname, 'UI', 'app.js'),
    output: {
        path: path.join(__dirname, 'dist'),
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
            	loader: 'babel',
            	include: path.join(__dirname, 'UI'),
            	test: /\.jsx/,
    	      	query: {
		        	plugins: ['transform-runtime']
		      	}
            }
        ]
    }
};