import { beforeEach, describe, expect, it } from 'vitest'
import { InMemoryProductRepository } from '../../test/repositories/in-memory-product-repository'
import { Product } from '../entities/product'
import { FindAllProductsUseCase } from './find-all-products-usecase'

let inMemoryProductRepository: InMemoryProductRepository
let findAllProductsUseCase: FindAllProductsUseCase

describe('Find All Products Use Case', () => {
  beforeEach(() => {
    inMemoryProductRepository = new InMemoryProductRepository()
    findAllProductsUseCase = new FindAllProductsUseCase(inMemoryProductRepository)
  })

  it('should be returned products all', async () => {
    findAllProductsUseCase = new FindAllProductsUseCase(inMemoryProductRepository)

    const newProduct = new Product({
      title: 'Product Test',
      category: 'category test',
      price: 10,
      url: 'https://test.com'
    })

    await inMemoryProductRepository.create(newProduct)

    const products = await findAllProductsUseCase.execute()

    expect(products).toHaveLength(1)
  })
})
