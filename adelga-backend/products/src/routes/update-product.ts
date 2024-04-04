import { FastifyInstance } from 'fastify'
import { ProductDto } from '../dtos/product'
import { prisma } from '../libs/prisma'
import { ProductRepositoryPrisma } from '../repositories/product-repository-prisma'
import { UpdateProductUseCase } from '../usecases/update-product-usecase'

export async function updateProduct (server: FastifyInstance) {
  server.put<{ Params: { id: string }, Body: ProductDto }>('/products/:id', async (request, reply) => {
    const { id } = request.params
    const { title, category, price, url } = request.body
    const productRepo = new ProductRepositoryPrisma(prisma)
    const updateProductUseCase = new UpdateProductUseCase(productRepo)
    const updated = await updateProductUseCase.execute(id, {
      title, category, price, url
    })
    return await reply.status(200).send(updated)
  })
}
