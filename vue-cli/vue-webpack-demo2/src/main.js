import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import routerConfig from './router.config.js'

Vue.use(VueRouter);

const router = new VueRouter();

router.map(routerConfig)

// 配置默认入口
router.redirect({
	'/':'home'
})

// 开启路由
router.start(App,"#app");
