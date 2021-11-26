import Home from '../pages/Home.vue';
import About from '../pages/About.vue';
import Post from '../pages/Post.vue';
import Login from '../pages/Login.vue';

export const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/about',
    name: 'about',
    component: About,
  },
  {
    path: '/posts',
    name: 'posts',
    component: Post,
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
  }
];
