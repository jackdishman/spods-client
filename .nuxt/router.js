import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _acd901a4 = () => interopDefault(import('../pages/community.vue' /* webpackChunkName: "pages/community" */))
const _6ce78931 = () => interopDefault(import('../pages/login/index.vue' /* webpackChunkName: "pages/login/index" */))
const _feb61ae6 = () => interopDefault(import('../pages/privacy.vue' /* webpackChunkName: "pages/privacy" */))
const _481adb24 = () => interopDefault(import('../pages/settings.vue' /* webpackChunkName: "pages/settings" */))
const _40478f68 = () => interopDefault(import('../pages/terms.vue' /* webpackChunkName: "pages/terms" */))
const _35de7a17 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _462eb182 = () => interopDefault(import('../pages/_id/index.vue' /* webpackChunkName: "pages/_id/index" */))
const _a4df8cec = () => interopDefault(import('../pages/_id/edit.vue' /* webpackChunkName: "pages/_id/edit" */))
const _305babfe = () => interopDefault(import('../pages/_id/graph.vue' /* webpackChunkName: "pages/_id/graph" */))
const _18048a0f = () => interopDefault(import('../pages/_id/share.vue' /* webpackChunkName: "pages/_id/share" */))

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
    component: _acd901a4,
    name: "community"
  }, {
    path: "/login",
    component: _6ce78931,
    name: "login"
  }, {
    path: "/privacy",
    component: _feb61ae6,
    name: "privacy"
  }, {
    path: "/settings",
    component: _481adb24,
    name: "settings"
  }, {
    path: "/terms",
    component: _40478f68,
    name: "terms"
  }, {
    path: "/",
    component: _35de7a17,
    name: "index"
  }, {
    path: "/:id",
    component: _462eb182,
    name: "id"
  }, {
    path: "/:id/edit",
    component: _a4df8cec,
    name: "id-edit"
  }, {
    path: "/:id/graph",
    component: _305babfe,
    name: "id-graph"
  }, {
    path: "/:id/share",
    component: _18048a0f,
    name: "id-share"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
