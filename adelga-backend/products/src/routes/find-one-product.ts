import { FastifyInstance } from 'fastify'
import { prisma } from '../libs/prisma'
import { ProductRepositoryPrisma } from '../repositories/product-repository-prisma'
import { FindOneProductUseCase } from '../usecases/find-one-product-usecase'

export async function findOneProduct (server: FastifyInstance) {
  server.get<{ Params: { id: string } }>('/products/:id', async (request, reply) => {
    const { id } = request.params
    const productRepo = new ProductRepositoryPrisma(prisma)
    const findOneProductUseCase = new FindOneProductUseCase(productRepo)
    const product = await findOneProductUseCase.execute(id)
    return await reply.status(200).send(product)
  })
}
