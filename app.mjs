/*

  Information:
    Entry Server.

*/

// https://fastify-vite.dev/experimental/api-integration.html#using-an-integrated-api

import Fastify from 'fastify'
import FastifyVite from 'fastify-vite'
import renderer from 'fastify-vite-vue'
import routes from "./src/server/routes.mjs";

async function init(){
  const root = import.meta.url
  const app = Fastify({ logger: false })
  //console.log("renderer",renderer)
  //app.get('/', (_, reply) => reply.redirect('/index'))
  //await app.register(FastifyVite, { __dirname, renderer })

  // http://localhost:3000/api/bye
  app.register(routes,{prefix: '/api'})
  await app.register(FastifyVite, { 
    root:root
  , renderer:renderer 
  //, api:true 
  });
  await app.vite.commands()
  return app;
}

const app = await init();
const PORT = process.env.PORT || 3000;
const address = await app.listen(PORT)
console.log(`Listening at http://localhost:${PORT}`)