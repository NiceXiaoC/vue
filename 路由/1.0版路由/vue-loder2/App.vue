<template>
	<!--<h1>这是一个简单的小vue</h1>
	<ul>
		<li v-for='val in arr' v-text='val'></li>
	</ul>
	
	<my-menu></my-menu>-->
	
	<div id="app">
		<h3>vue-router</h3>
		<div>
			<a v-link="{path:'/home'}">主页</a>
			<a v-link="{path:'/news'}">新闻</a>
		</div>
		<router-view></router-view>
	</div>
</template>

<script>
	
</script>
<style>
	body{padding:100px;}
	.v-link-active{color:red;}
</style>