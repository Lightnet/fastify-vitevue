import { getRoutes } from 'fastify-vite/app'
import { hydrateRoutes } from 'fastify-vite-vue/client.mjs'

console.log("routes?")
var routes = import.meta.env.SSR
  ? (import.meta.globEager('/views/*.vue'))
  : (import.meta.glob('/views/*.vue'))
console.log(routes)
//bug in route?

export default import.meta.env.SSR
  ? () => getRoutes(import.meta.globEager('/views/*.vue'))
  : () => getRoutes(hydrateRoutes(import.meta.glob('/views/*.vue')))
