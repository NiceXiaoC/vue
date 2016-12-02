1、在每个组件中，不在支持片段代码，必须有一个根源素
	如：以前：
		<template id="box">
			<p>标题</p>
			<p>副标题</p>
		</template>
		
		现在
		<template id="box">
			<div>
				<p>标题</p>
				<p>副标题</p>
			</div>
		</template>
		
		
2.关于组件的定义
	Vue.extend   在2.0中有改动，一般不用这种写法
	
	定义方法：Vue.component('组件名'，{
		template:'',
		data:(()={
		}),
	});
	
	子组件：
	new Vue({
			el:'#box',
			data:{
				msg:'hello'
			}，
			components:{
				'aaa':Home
			}
		})
	

3.生命周期
	1.0:
		init
		created
		beforeCompile
		compiled
		ready   ----> mounted
		beforeDestroy
		destroyed
		
	
	2.0
		beforeCreate:组件实例刚刚被创建，属性都没有
		create:组件已经创建成功，属性已经绑定
		beforeMount : 模板编译之前
		mounted : (代替1.0的compiled和ready两个状态)  模板编译之后
		beforeUpdate： 组件更新之前触发
		updated : 组件更新之后触发
		beforeDestroy : 组件销毁前
		destroyed : 组件销毁后



4.循环 v-for 
	接近原生
	1.0 
		 默认不能添加重复数据  使用属性： track-by="$index" 解决
		 $index   --- 索引
		 $key --- key 
		 v-for="(index,val) in arr"
	
	2.0  
		 默认可以添加重复数据
		 
		 去掉隐式变量，如：$index,$key
		v-for="(val,index) in arr"
		v-for="(val,index,key) in arr"
		
		track-by="index"  修改为： :key="index"
		
		
5.自定义键盘的指令
	1.0
		Vue.directive('on').keyCodes.enter = 13
	
	2.0
		Vue.config.keyCodes.enter = 13
		
		
6.过滤器
	
	1.0 系统自带很多过滤器
	
		{{msg|currency}} //货币转换
		{{msg|json}} //对象
		
		limitBy
		filterBy
		
		自定义：
			Vue.filter('toDou',function(num,a,b){
			console.log("a:"+a+",b:"+b);
				return num>9?num+'0'+num;
			});
			
			{{msg | toDou '1234' 'baads'}}
		
	2.0 
		推荐使用 ： lodash 工具库  (自己实现)
	
		{{msg | toDou('1234','baads')}}
		
		系统自带的过滤器 已经废除，，，自己实现
		

7.组件的通信	

	1.0
	
		子组件调用父组件数据所用props 接收， :msg
		子组件可以修改父组件信息，可以同步：sync
		
	2.0
		
		父组件每次传一个对象给子组件,对象之间的引用
		
	