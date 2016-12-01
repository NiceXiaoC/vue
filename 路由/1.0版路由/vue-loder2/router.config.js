//配置路由
import Home from './component/Home.vue';
import News from './component/News.vue';
import Login from './component/Login.vue';
import Reg from './component/Reg.vue';
import Detail from './component/Detail.vue';
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
				'/detail/:id':{
					component : Detail
				}
			}
		}
}
