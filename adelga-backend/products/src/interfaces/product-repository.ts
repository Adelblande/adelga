import { ProductDto } from '../dtos/product'
import { Product } from '../entities/product'

export interface ProductRepository {
  create: (product: Product) => Promise<Product>
  findAll: () => Promise<Product[]>
  findOne: (id: string) => Promise<Product>
  update: (id: string, data: ProductDto) => Promise<Product>
  remove: (id: string) => Promise<void>
}
