import { beforeEach, describe, expect, it } from 'vitest'
import { InMemoryProductRepository } from '../../test/repositories/in-memory-product-repository'
import { CreateProductUseCase } from './create-product-usecase'

let inMemoryProductRepository: InMemoryProductRepository
let createProductUseCase: CreateProductUseCase

describe('Create Product Use Case', () => {
  beforeEach(() => {
    inMemoryProductRepository = new InMemoryProductRepository()
    createProductUseCase = new CreateProductUseCase(inMemoryProductRepository)
  })

  it('should create a product', async () => {
    const product = await createProductUseCase.execute({
      title: 'Product Test',
      category: 'category test',
      price: 10,
      url: 'https://test.com'
    })

    expect(product).toHaveProperty('id')
    expect(product.title).toEqual('Product Test')
  })
})
