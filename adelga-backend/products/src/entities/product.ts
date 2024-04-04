import { v4 as uuid } from 'uuid'
import { type ProductDto } from '../dtos/product'

export class Product {
  public readonly id: string
  public readonly title: string
  public readonly category: string
  public readonly price: number
  public readonly url: string

  constructor (props: ProductDto) {
    this.id = uuid()
    this.title = props.title
    this.category = props.category
    this.price = props.price
    this.url = props.url
  }
}
