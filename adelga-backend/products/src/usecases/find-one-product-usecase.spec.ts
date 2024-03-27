import { beforeEach, describe, expect, it } from 'vitest'
import { InMemoryProductRepository } from '../../test/repositories/in-memory-product-repository'
import { Product } from '../entities/product'
import { FindOneProductUseCase } from './find-one-product-usecase'

let inMemoryProductRepository: InMemoryProductRepository
let findOneProductUseCase: FindOneProductUseCase

describe('Find One Product Use Case', () => {
  beforeEach(() => {
    inMemoryProductRepository = new InMemoryProductRepository()
    findOneProductUseCase = new FindOneProductUseCase(inMemoryProductRepository)
  })

  it('should not be able return a product with id passed', async () => {
    expect(
      async () => await findOneProductUseCase.execute('123456')
    ).rejects.toBeInstanceOf(Error)
  })

  it('should be able return a product with id passed', async () => {
    const newProduct = new Product({
      title: 'Product Test',
      category: 'category test',
      price: 10,
      url: 'https://test.com'
    })

    await inMemoryProductRepository.create(newProduct)
    const product = await findOneProductUseCase.execute(newProduct.id)

    expect(product.title).toEqual('Product Test')
    expect(product.id).toBeTruthy()
    expect(product).toBeInstanceOf(Product)
  })
})
