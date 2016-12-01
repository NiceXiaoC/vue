<template>
  <div class="hello">
    <h1>这是新闻页</h1>
    <div>
 				<a v-link="{path:'/news/detail'}">查看新闻列表</a>
 		</div>
 		<router-view></router-view>
  </div>
</template>



