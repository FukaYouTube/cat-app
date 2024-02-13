import { type RouteRecordRaw } from 'vue-router'

import HomeModule from './HomeModule'

export const HomeModuleRoute: RouteRecordRaw[] = [
  {
    name: 'home',
    path: '/',
    component: HomeModule
  }
]