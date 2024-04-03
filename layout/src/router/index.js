import Vue from 'vue';
import VueRouter from 'vue-router';
import HomePage from '../pages/HomePage.vue';
import BlogPage from '../pages/BlogPage.vue';
import BlogDetailsPage from '../pages/BlogDetailsPage.vue';
import ProjectPage from '../pages/ProjectPage.vue';
import ErrorNotFound from '@/pages/ErrorNotFound.vue';
Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage,
  },
  { path: '/blog', name: 'blog', component: BlogPage },
  {
    path: '/blogDetails',
    name: 'blogDetails',
    component: BlogDetailsPage,
  },
  {
    path: '/projects',
    name: 'projects',
    component: ProjectPage,
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'error404',
    component: ErrorNotFound,
  },
];

const router = new VueRouter({
  routes,
});

export default router;