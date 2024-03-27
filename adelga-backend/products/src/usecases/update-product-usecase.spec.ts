import { beforeEach, describe, expect, it } from 'vitest'
import { InMemoryProductRepository } from '../../test/repositories/in-memory-product-repository'
import { Product } from '../entities/product'
import { UpdateProductUseCase } from './update-product-usecase'

let inMemoryProductRepository: InMemoryProductRepository
let updateProductUseCase: UpdateProductUseCase

describe('Update Product Use Case', () => {
  beforeEach(() => {
    inMemoryProductRepository = new InMemoryProductRepository()
    updateProductUseCase = new UpdateProductUseCase(inMemoryProductRepository)
  })

  it('should not be able update a product with id passed', async () => {
    expect(async () => await updateProductUseCase.execute('123456', {
      title: 'Product Altered',
      category: 'category test',
      price: 10,
      url: 'https://test.com'
    })).rejects.toBeInstanceOf(Error)

    // expectTypeOf(updated).toEqualTypeOf<Error>()
  })

  it('should be able update a product', async () => {
    const newProduct = new Product({
      title: 'Product Test',
      category: 'category test',
      price: 10,
      url: 'https://test.com'
    })

    await inMemoryProductRepository.create(newProduct)
    const updated = await updateProductUseCase.execute(newProduct.id, {
      title: 'Product Altered',
      category: 'category test',
      price: 10,
      url: 'https://test.com'
    })
    expect(updated.title).toBe('Product Altered')
  })
})
