/*
  Routes:
  localhost/api/

*/
async function routes(fastify, options){
  //fastify.get('/', async function(request, reply) {
    //return {hello: 'world'} 
  //}), 

  fastify.get('/bye', async function(request, reply) {
    return {bye: 'good bye'} 
  })

  fastify.get('/test', async function(request, reply) {
    return {bye: 'good test'} 
  }) 
}

export default routes;

//app.get('/api/posts', async (req, reply) => {
  //const posts = await app.db.query('posts')
  //reply.send({ data: posts })
//})