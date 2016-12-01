<template>
	<h3>这是新闻页</h3>
	<ul>
		<li><a v-link="{path:'/news/detail/001'}">第一条新闻</a></li>
		<li><a v-link="{path:'/news/detail/002'}">第二条新闻</a></li>
	</ul>
	<router-view></router-view>
</template>
