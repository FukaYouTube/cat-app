import { createRouter, createWebHistory } from 'vue-router'

import { HomeModuleRoute } from '@/modules/home/router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    ...HomeModuleRoute
  ]
})

export default router