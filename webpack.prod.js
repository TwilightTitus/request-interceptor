const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const project = require("./package.json");

module.exports = merge(common,{
    mode: 'production',
    output : {
	    filename : project.name + '-' + project.version + '.min.js',
        path : path.resolve(__dirname, 'dist')
    }
});
