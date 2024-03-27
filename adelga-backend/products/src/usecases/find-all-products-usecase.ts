import { type Product } from '../entities/product'
import { type ProductRepository } from '../interfaces/product-repository'

export class FindAllProductsUseCase {
  constructor (
    private readonly productRepository: ProductRepository
  ) {}

  async execute (): Promise<Product[]> {
    return await this.productRepository.findAll()
  }
}
