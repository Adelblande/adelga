import { beforeEach, describe, expect, it } from 'vitest'
import { InMemoryProductRepository } from '../../test/repositories/in-memory-product-repository'
import { Product } from '../entities/product'
import { RemoveProductUseCase } from './remove-product-usecase'

let inMemoryProductRepository: InMemoryProductRepository
let removeProductUseCase: RemoveProductUseCase

describe('Remove Product Use Case', () => {
  beforeEach(() => {
    inMemoryProductRepository = new InMemoryProductRepository()
    removeProductUseCase = new RemoveProductUseCase(inMemoryProductRepository)
  })

  it('should be able remove a product', async () => {
    const newProduct = new Product({
      title: 'Product Test',
      category: 'category test',
      price: 10,
      url: 'https://test.com'
    })

    await inMemoryProductRepository.create(newProduct)
    await removeProductUseCase.execute(newProduct.id)

    expect(
      async () => await inMemoryProductRepository.findOne(newProduct.id)
    ).rejects.toBeInstanceOf(Error)
  })
})
