//配置路由
import Home from './components/Home.vue';
import News from './components/News.vue';
import Login from './components/Login.vue';
import Reg from './components/Reg.vue'
import NewList from './components/newLists.vue'

export default{
 	'/home':{
			component:Home,
			subRoutes:{
				'/login':{
					component:Login
				},
				'/reg':{
					component:Reg
				}
			}
		},
	'/news':{
		component:News,
		subRoutes:{
			'detail':{
				component:NewList
			}
		}
	}
}
