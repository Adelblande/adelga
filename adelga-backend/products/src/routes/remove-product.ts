import { FastifyInstance } from 'fastify'
import { prisma } from '../libs/prisma'
import { ProductRepositoryPrisma } from '../repositories/product-repository-prisma'
import { RemoveProductUseCase } from '../usecases/remove-product-usecase'

export async function removeProduct (server: FastifyInstance) {
  server.delete<{ Params: { id: string } }>('/products/:id', async (request, reply) => {
    const { id } = request.params
    const productRepo = new ProductRepositoryPrisma(prisma)
    const removeProductUseCase = new RemoveProductUseCase(productRepo)
    await removeProductUseCase.execute(id)
    return await reply.status(204).send()
  })
}
