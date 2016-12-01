<template>
	<h3>这是主页</h3>
	<ul>
		<li><a v-link="{path:'/home/login'}">用户登录</a></li>
		<li><a v-link="{path:'/home/reg'}">用户注册</a></li>
	</ul>
	<div class="box">
		<router-view></router-view>
	</div>	
</template>
<style>
	.box{height:auto;padding:0 20px;background: #ccc;border:1px solid red}
</style>