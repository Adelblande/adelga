import { type ProductRepository } from '../interfaces/product-repository'

export class RemoveProductUseCase {
  constructor (
    private readonly productRepository: ProductRepository
  ) {}

  async execute (id: string): Promise<void> {
    await this.productRepository.remove(id)
  }
}
