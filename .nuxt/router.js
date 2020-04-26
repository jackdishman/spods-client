import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _a8a5bcba = () => interopDefault(import('../pages/community.vue' /* webpackChunkName: "pages/community" */))
const _4f226266 = () => interopDefault(import('../pages/login/index.vue' /* webpackChunkName: "pages/login/index" */))
const _0d904d59 = () => interopDefault(import('../pages/settings.vue' /* webpackChunkName: "pages/settings" */))
const _2ead9f0c = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _484853f7 = () => interopDefault(import('../pages/_id/index.vue' /* webpackChunkName: "pages/_id/index" */))
const _32754e73 = () => interopDefault(import('../pages/_id/graph.vue' /* webpackChunkName: "pages/_id/graph" */))

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
    component: _a8a5bcba,
    name: "community"
  }, {
    path: "/login",
    component: _4f226266,
    name: "login"
  }, {
    path: "/settings",
    component: _0d904d59,
    name: "settings"
  }, {
    path: "/",
    component: _2ead9f0c,
    name: "index"
  }, {
    path: "/:id",
    component: _484853f7,
    name: "id"
  }, {
    path: "/:id/graph",
    component: _32754e73,
    name: "id-graph"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
