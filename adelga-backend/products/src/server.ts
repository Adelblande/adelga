import fastify, { FastifyInstance } from 'fastify'
import { createProduct } from './routes/create-product'
import { findAllProducts } from './routes/find-all-products'
import { findOneProduct } from './routes/find-one-product'
import { removeProduct } from './routes/remove-product'
import { updateProduct } from './routes/update-product'

const server: FastifyInstance = fastify({
  logger: true
})

const { PORT } = process.env

server.register(createProduct)
server.register(findAllProducts)
server.register(findOneProduct)
server.register(updateProduct)
server.register(removeProduct)

server.listen({ port: Number(PORT), host: '0.0.0.0' }).then(() => {
  console.log(`Server started on port :${PORT}`)
}).catch((err) => {
  console.log(err)
  process.exit(1)
})
