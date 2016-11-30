
module.exports={
	entry:'./main.js',
	output:{
		path:__dirname,
		filename:'build.js'
	},
	module:{
		loaders:[
			{test:/\.vue$/,loader:'vue'},
			{test:/\.js$/,loader:'babel?presets=es2015',exclude:/node_modules/}, // 除了node_modules文件夹下面的文件，其他的js都需要用babel编译
		],
		babel:{
			presets:['es2015'], //es6转es5
			plugins:['transform-runtime'] // 修改后实时加载7
		}
	}
}
