import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _36947b56 = () => interopDefault(import('../pages/community.vue' /* webpackChunkName: "pages/community" */))
const _84cbc94e = () => interopDefault(import('../pages/login/index.vue' /* webpackChunkName: "pages/login/index" */))
const _1a4d7146 = () => interopDefault(import('../pages/settings.vue' /* webpackChunkName: "pages/settings" */))
const _5bd3ca3f = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _59a0a4ac = () => interopDefault(import('../pages/_id/index.vue' /* webpackChunkName: "pages/_id/index" */))
const _8546afb4 = () => interopDefault(import('../pages/_id/graph.vue' /* webpackChunkName: "pages/_id/graph" */))

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
    component: _36947b56,
    name: "community"
  }, {
    path: "/login",
    component: _84cbc94e,
    name: "login"
  }, {
    path: "/settings",
    component: _1a4d7146,
    name: "settings"
  }, {
    path: "/",
    component: _5bd3ca3f,
    name: "index"
  }, {
    path: "/:id",
    component: _59a0a4ac,
    name: "id"
  }, {
    path: "/:id/graph",
    component: _8546afb4,
    name: "id-graph"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
