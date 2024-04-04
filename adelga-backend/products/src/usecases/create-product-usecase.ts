import { ProductDto } from '../dtos/product'
import { Product } from '../entities/product'
import { ProductRepository } from '../interfaces/product-repository'

export class CreateProductUseCase {
  constructor (
    private readonly productRepository: ProductRepository
  ) {}

  async execute ({ title, category, price, url }: ProductDto): Promise<Product> {
    const product = new Product({
      title,
      category,
      price,
      url
    })

    await this.productRepository.create(product)

    return product
  }
}
