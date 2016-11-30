

/*import VueRouter from 'vue-router';
import App from './App.vue';*/

/*const Vue = require('vue');
const VueRouter = require('vue-router');
const App = require('./App.vue');
var routerConfig = require('./router.config.js');
*/


import Vue from 'vue';
import VueRouter from 'vue-router'
import App from './App.vue'
import routerConfig from './router.config.js'
import Home from './component/Home.vue'
import News from './component/News.vue'

Vue.use(VueRouter);

//配置路由

const router = new VueRouter();

router.map({
	 	'/home':{
				component:Home
			},
		'/news':{
				component:News,
			}
	 })

router.start(App,"#app");
/*new Vue({
	el :'body',
	components:{
		app : App
	}
})*/

