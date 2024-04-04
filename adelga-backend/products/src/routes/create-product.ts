import { FastifyInstance } from 'fastify'
import { ProductDto } from '../dtos/product'
import { prisma } from '../libs/prisma'
import { ProductRepositoryPrisma } from '../repositories/product-repository-prisma'
import { CreateProductUseCase } from '../usecases/create-product-usecase'

export async function createProduct (server: FastifyInstance) {
  server.post<{ Body: ProductDto }>('/products', async (request, reply) => {
    const { title, category, price, url } = request.body
    const productRepo = new ProductRepositoryPrisma(prisma)
    const createProductUseCase = new CreateProductUseCase(productRepo)
    const newProduct = await createProductUseCase.execute({
      title, category, price, url
    })
    return await reply.status(201).send(newProduct)
  })
}
