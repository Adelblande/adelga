import { type ProductDto } from '../dtos/product'
import { type Product } from '../entities/product'
import { type ProductRepository } from '../interfaces/product-repository'

export class UpdateProductUseCase {
  constructor (
    private readonly productRepository: ProductRepository
  ) {}

  async execute (id: string, data: ProductDto): Promise<Product> {
    const product = await this.productRepository.findOne(id)

    if (!product) {
      throw new Error('Product not found')
    }

    return { ...product, ...data }
  }
}
