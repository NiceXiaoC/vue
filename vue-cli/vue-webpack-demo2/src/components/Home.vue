<template>
  <div class="hello">
    <h1>这是主页</h1>
    <p>
    	<a v-link="{path:'/home/login'}">这是登录页面</a>
    	<a v-link="{path:'/home/reg'}">这是注册页面</a>
    </p>
    <router-view></router-view>
  </div>
</template>

<style>
	h1 {
	  color: #42b983;
	}
</style>
