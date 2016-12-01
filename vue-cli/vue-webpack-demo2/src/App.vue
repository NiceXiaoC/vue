<template>
  <div id="app">
  	<h1>vue-webpack-demo</h1>
  		<a v-link="{path:'/home'}">主页</a>
			<a v-link="{path:'/news'}">新闻</a>
			<router-view></router-view>
 	</div>
</template>

<style>
	html {
	  height: 100%;
	}
	body {
	  display: flex;
	  align-items: center;
	  justify-content: center;
	  height: 100%;
	   font-family: Source Sans Pro, Helvetica, sans-serif;
	}
	
	#app {
	  color: #2c3e50;
	  width: 600px;
	  text-align: center;
	  height:300px;
	  border:1px solid #ccc;
	}
	#app a{
		color:#666;
	}
	#app .v-link-active{color:red;font-size:18px;}
</style>
