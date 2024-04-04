import { PrismaClient } from '@prisma/client'
import { ProductDto } from '../dtos/product'
import { Product } from '../entities/product'
import { ProductRepository } from '../interfaces/product-repository'

export class ProductRepositoryPrisma implements ProductRepository {
  constructor (private readonly prisma: PrismaClient) {}

  async create (product: Product): Promise<Product> {
    return await this.prisma.product.create({
      data: {
        id: product.id,
        title: product.title,
        category: product.category,
        price: product.price,
        url: product.url
      }
    })
  }

  async findAll (): Promise<Product[]> {
    return await this.prisma.product.findMany()
  }

  async findOne (id: string): Promise<Product> {
    const product = await this.prisma.product.findUnique({
      where: {
        id
      }
    })

    if (!product) {
      throw new Error('Product not found.')
    }

    return product
  }

  async update (id: string, data: ProductDto): Promise<Product> {
    const product = await this.prisma.product.findUnique({
      where: {
        id
      }
    })

    if (!product) {
      throw new Error('Product not found.')
    }

    return await this.prisma.product.update({
      where: {
        id
      },
      data
    })
  }

  async remove (id: string): Promise<void> {
    await this.prisma.product.delete({ where: { id } })
  }
}
