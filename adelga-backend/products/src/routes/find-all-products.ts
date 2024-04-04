import { FastifyInstance } from 'fastify'
import { prisma } from '../libs/prisma'
import { ProductRepositoryPrisma } from '../repositories/product-repository-prisma'
import { FindAllProductsUseCase } from '../usecases/find-all-products-usecase'

export async function findAllProducts (server: FastifyInstance) {
  server.get('/products', async (_request, reply) => {
    const productRepo = new ProductRepositoryPrisma(prisma)
    const findAllProductsUseCase = new FindAllProductsUseCase(productRepo)
    const products = await findAllProductsUseCase.execute()
    return await reply.status(200).send(products)
  })
}
