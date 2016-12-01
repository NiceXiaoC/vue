<template>
  <ul>
  	<li v-for="(item,index) in arr">{{item}}-{{index}}</li>
  </ul>
</template>

<script>
	export default{
		data:function(){
			return {
				arr:['新闻','新闻','新闻']
			}
		}
	}
</script>



