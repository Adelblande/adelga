import { describe, expect, it } from 'vitest'

import { Product } from './product'

describe('Product class', () => {
  it('should be able create a new product', () => {
    const product = new Product({
      category: 'drinks',
      title: '51 Ice Kiwi 269ml Lata',
      price: 19.90,
      url: 'http://172.21.0.2:4566/adelga-images/51-ice-kiwi-269ml.png'
    })
    expect(product).toBeInstanceOf(Product)
  })

  it('should be able generated a id props', () => {
    const product = new Product({
      category: 'drinks',
      title: '51 Ice Kiwi 269ml Lata',
      price: 19.90,
      url: 'http://172.21.0.2:4566/adelga-images/51-ice-kiwi-269ml.png'
    })

    expect(product.id).toBeDefined()
  })
})
