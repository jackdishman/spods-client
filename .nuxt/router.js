import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _e86c8e66 = () => interopDefault(import('../pages/community.vue' /* webpackChunkName: "pages/community" */))
const _cb1451e0 = () => interopDefault(import('../pages/login/index.vue' /* webpackChunkName: "pages/login/index" */))
const _254f28ef = () => interopDefault(import('../pages/settings.vue' /* webpackChunkName: "pages/settings" */))
const _37d4a090 = () => interopDefault(import('../pages/web.vue' /* webpackChunkName: "pages/web" */))
const _ef8f4994 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _2864eb21 = () => interopDefault(import('../pages/_id/index.vue' /* webpackChunkName: "pages/_id/index" */))
const _1291e59d = () => interopDefault(import('../pages/_id/graph.vue' /* webpackChunkName: "pages/_id/graph" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/community",
    component: _e86c8e66,
    name: "community"
  }, {
    path: "/login",
    component: _cb1451e0,
    name: "login"
  }, {
    path: "/settings",
    component: _254f28ef,
    name: "settings"
  }, {
    path: "/web",
    component: _37d4a090,
    name: "web"
  }, {
    path: "/",
    component: _ef8f4994,
    name: "index"
  }, {
    path: "/:id",
    component: _2864eb21,
    name: "id"
  }, {
    path: "/:id/graph",
    component: _1291e59d,
    name: "id-graph"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
