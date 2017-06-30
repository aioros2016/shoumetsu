import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import axios from 'axios'
import routes from './routeConfig.js'
import store from './store'

Vue.use(VueRouter);
require('./assets/css/base.css');
require('./assets/less/style.less');


const router=new VueRouter({
	routes,
	mode: 'history',
	scrollBehavior (to, from, savedPosition) {
		// 如果你的連結是帶 # 這種
		// to.hash 就會有值(值就是連結)
		// 例如 #3
		if (to.hash) {
			return {
				// 這個是透過 to.hash 的值來找到對應的元素
				// 照你的 html 來看是不用多加處理這樣就可以了
				// 例如你按下 #3 的連結，就會變成 querySelector('#3')，自然會找到 id = 3 的元素
				selector: to.hash
			}
		}else{
			return { y: 0 }
		}
    }
	
});

axios.defaults.headers['Content-Type'] = 'application/json'
Vue.prototype.$http = axios;

new Vue({
	el: '#app',
	store,
	router,
	render: h => h(App),
	mounted(){
		// FastClick
	  	if ('addEventListener' in document) {
	  		document.addEventListener('DOMContentLoaded', function(){
	  			FastClick.attach(document.body);
	  		}, false);
	    };
	}
})
