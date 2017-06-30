import Index from './components/Index.vue'
import Home from './components/Home.vue'
import Character from './components/Character.vue'
import Tamashii from './components/Tamashii.vue'
import Story from './components/Story.vue'
import News from './components/News.vue'
import Detail from './components/Detail.vue'

export default [
  {
    path: '/Index',
    component: Index,
    children: [
		  {path: '/', component: Home},
		  {path: '/Character', component: Character},
		  {path: '/Tamashii', component: Tamashii},
		  {path: '/Story', component: Story},
		  {path: '/News', component: News},
		  {path: '/Detail/:id', component: Detail}
		]
  },
  { 
    path: '/', 
    redirect: '/Index' 
  },
  { 
    path: '*', 
    redirect: '/Index' 
  }
];
