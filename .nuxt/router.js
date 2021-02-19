import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _482f1d79 = () => interopDefault(import('../pages/auth.vue' /* webpackChunkName: "pages/auth" */))
const _a081ff30 = () => interopDefault(import('../pages/community.vue' /* webpackChunkName: "pages/community" */))
const _1269751f = () => interopDefault(import('../pages/manifesto.vue' /* webpackChunkName: "pages/manifesto" */))
const _8f590b72 = () => interopDefault(import('../pages/privacy.vue' /* webpackChunkName: "pages/privacy" */))
const _cbd5fc18 = () => interopDefault(import('../pages/settings.vue' /* webpackChunkName: "pages/settings" */))
const _39c532f4 = () => interopDefault(import('../pages/terms.vue' /* webpackChunkName: "pages/terms" */))
const _391fa851 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _4c5a32bc = () => interopDefault(import('../pages/_id/index.vue' /* webpackChunkName: "pages/_id/index" */))
const _6bb2a910 = () => interopDefault(import('../pages/_id/edit.vue' /* webpackChunkName: "pages/_id/edit" */))
const _36872d38 = () => interopDefault(import('../pages/_id/graph.vue' /* webpackChunkName: "pages/_id/graph" */))
const _1e300b49 = () => interopDefault(import('../pages/_id/share.vue' /* webpackChunkName: "pages/_id/share" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/auth",
    component: _482f1d79,
    name: "auth"
  }, {
    path: "/community",
    component: _a081ff30,
    name: "community"
  }, {
    path: "/manifesto",
    component: _1269751f,
    name: "manifesto"
  }, {
    path: "/privacy",
    component: _8f590b72,
    name: "privacy"
  }, {
    path: "/settings",
    component: _cbd5fc18,
    name: "settings"
  }, {
    path: "/terms",
    component: _39c532f4,
    name: "terms"
  }, {
    path: "/",
    component: _391fa851,
    name: "index"
  }, {
    path: "/:id",
    component: _4c5a32bc,
    name: "id"
  }, {
    path: "/:id/edit",
    component: _6bb2a910,
    name: "id-edit"
  }, {
    path: "/:id/graph",
    component: _36872d38,
    name: "id-graph"
  }, {
    path: "/:id/share",
    component: _1e300b49,
    name: "id-share"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config.app && config.app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
