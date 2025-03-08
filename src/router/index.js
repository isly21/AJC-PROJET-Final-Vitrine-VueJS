import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import Products from '@/components/Products.vue'
import ProductDetails from '@/components/ProductDetails.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/products',
      name: 'products',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: Products,
    },
    {
      path: '/products/:id',
      name: 'productsDetails',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: ProductDetails,
    },
  ],
})

export default router
