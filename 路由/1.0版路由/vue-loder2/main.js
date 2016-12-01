

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


Vue.use(VueRouter);

const router = new VueRouter();

router.map(routerConfig);
router.redirect({
	'/':'/home'
})

router.start(App,"#app");
/*new Vue({
	el :'body',
	components:{
		app : App
	}
})*/

