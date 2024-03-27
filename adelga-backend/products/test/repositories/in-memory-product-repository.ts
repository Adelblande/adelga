import { type ProductDto } from '../../src/dtos/product'
import { type Product } from '../../src/entities/product'
import { type ProductRepository } from '../../src/interfaces/product-repository'

export class InMemoryProductRepository implements ProductRepository {
  public items: Product[] = []
  async create (product: Product): Promise<Product> {
    this.items.push(product)
    return product
  }

  async findAll (): Promise<Product[]> {
    return this.items
  }

  async findOne (id: string): Promise<Product> {
    const product = this.items.find(product => product.id === id)
    if (!product) {
      throw new Error('Product not found.')
    }

    return product
  }

  async update (id: string, data: ProductDto): Promise<Product> {
    const product = this.items.find(product => product.id === id)
    if (!product) {
      throw new Error('Product not found.')
    }

    return { ...product, ...data }
  }

  async remove (id: string): Promise<void> {
    const index = this.items.findIndex(product => product.id === id)
    this.items.splice(index, 1)
  }
}
