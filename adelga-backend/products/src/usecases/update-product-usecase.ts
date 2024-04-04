import { ProductDto } from '../dtos/product'
import { Product } from '../entities/product'
import { ProductRepository } from '../interfaces/product-repository'

export class UpdateProductUseCase {
  constructor (
    private readonly productRepository: ProductRepository
  ) {}

  async execute (id: string, data: ProductDto): Promise<Product> {
    const product = await this.productRepository.findOne(id)

    if (!product) {
      throw new Error('Product not found')
    }

    const updated = await this.productRepository.update(id, { ...product, ...data })

    return updated
  }
}
