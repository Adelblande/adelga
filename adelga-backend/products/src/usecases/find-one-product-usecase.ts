import { type Product } from '../entities/product'
import { type ProductRepository } from '../interfaces/product-repository'

export class FindOneProductUseCase {
  constructor (
    private readonly productRepository: ProductRepository
  ) {}

  async execute (id: string): Promise<Product> {
    const product = await this.productRepository.findOne(id)

    if (!product) {
      throw new Error('Product not found')
    }

    return product
  }
}
