import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _38c3e7fa = () => interopDefault(import('../pages/community.vue' /* webpackChunkName: "pages/community" */))
const _54b6d209 = () => interopDefault(import('../pages/edit.vue' /* webpackChunkName: "pages/edit" */))
const _1cbe2206 = () => interopDefault(import('../pages/login/index.vue' /* webpackChunkName: "pages/login/index" */))
const _4bebe022 = () => interopDefault(import('../pages/settings.vue' /* webpackChunkName: "pages/settings" */))
const _f849ae3a = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _5541cb64 = () => interopDefault(import('../pages/_id/index.vue' /* webpackChunkName: "pages/_id/index" */))
const _80e7d66c = () => interopDefault(import('../pages/_id/graph.vue' /* webpackChunkName: "pages/_id/graph" */))
const _b1961a4a = () => interopDefault(import('../pages/_id/share.vue' /* webpackChunkName: "pages/_id/share" */))

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
    component: _38c3e7fa,
    name: "community"
  }, {
    path: "/edit",
    component: _54b6d209,
    name: "edit"
  }, {
    path: "/login",
    component: _1cbe2206,
    name: "login"
  }, {
    path: "/settings",
    component: _4bebe022,
    name: "settings"
  }, {
    path: "/",
    component: _f849ae3a,
    name: "index"
  }, {
    path: "/:id",
    component: _5541cb64,
    name: "id"
  }, {
    path: "/:id/graph",
    component: _80e7d66c,
    name: "id-graph"
  }, {
    path: "/:id/share",
    component: _b1961a4a,
    name: "id-share"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
