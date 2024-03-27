import fastify, { type FastifyInstance } from 'fastify'

const server: FastifyInstance = fastify({
  logger: true
})

const { PORT } = process.env

server.get('/', async (_request, reply) => {
  return await reply.status(200).send({ hello: 'world 23' })
})

server.listen({ port: Number(PORT), host: '0.0.0.0' }).then(() => {
  console.log(`Server started on port :${PORT}`)
}).catch((err) => {
  console.log(err)
  process.exit(1)
})
