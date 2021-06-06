import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: "",
    component: () => import(/* webpackChunkName: "DashboardLayout" */ '../layouts/DashboardLayout.vue'),
    children: [
      {
          path: "",
          component: () => import(/* webpackChunkName: "HomePage" */ '../views/Home.vue'),
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
