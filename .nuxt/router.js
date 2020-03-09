import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _603f5754 = () => interopDefault(import('../pages/community.vue' /* webpackChunkName: "pages/community" */))
const _3353b459 = () => interopDefault(import('../pages/login/index.vue' /* webpackChunkName: "pages/login/index" */))
const _a8bb0f74 = () => interopDefault(import('../pages/settings.vue' /* webpackChunkName: "pages/settings" */))
const _93f433fe = () => interopDefault(import('../pages/web.vue' /* webpackChunkName: "pages/web" */))
const _c217b982 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _6c7b86aa = () => interopDefault(import('../pages/_id/index.vue' /* webpackChunkName: "pages/_id/index" */))
const _56a88126 = () => interopDefault(import('../pages/_id/graph.vue' /* webpackChunkName: "pages/_id/graph" */))

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
    component: _603f5754,
    name: "community"
  }, {
    path: "/login",
    component: _3353b459,
    name: "login"
  }, {
    path: "/settings",
    component: _a8bb0f74,
    name: "settings"
  }, {
    path: "/web",
    component: _93f433fe,
    name: "web"
  }, {
    path: "/",
    component: _c217b982,
    name: "index"
  }, {
    path: "/:id",
    component: _6c7b86aa,
    name: "id"
  }, {
    path: "/:id/graph",
    component: _56a88126,
    name: "id-graph"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
