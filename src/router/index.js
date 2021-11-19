import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import User from '../views/User/User.vue';
import myCar from '../views/User-car/myCar.vue';
import taskList from '../views/User-car/taskList.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '/User',
        name: 'User',
        component: User,
        children: [
          {
            path: '/myCar',
            name: 'myCar',
            component: myCar,
          },
          {
            path: '/taskList',
            name: 'taskList',
            component: taskList,
          },
        ],
      },
    ],
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
