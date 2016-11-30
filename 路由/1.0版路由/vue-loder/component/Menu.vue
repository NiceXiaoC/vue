<template>
	<h1>这个是第二个组件哦！！！</h1>
	<ul>
		<li v-for='val in lists'>{{val}}</li>
	</ul>
</template>
<script>
	export default{
		data:function(){
			return {
				lists : [111111111,222222222,3333333333,44444]
			}
		}
	}
</script>