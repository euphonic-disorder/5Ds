import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _fa187272 = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _44983495 = () => interopDefault(import('../pages/home.vue' /* webpackChunkName: "pages/home" */))
const _6ec3f45f = () => interopDefault(import('../pages/resources.vue' /* webpackChunkName: "pages/resources" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _fa187272,
    name: "about"
  }, {
    path: "/home",
    component: _44983495,
    name: "home"
  }, {
    path: "/resources",
    component: _6ec3f45f,
    name: "resources"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
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