import { v4 as uuid } from 'uuid'
import { type ProductDto } from '../dtos/product'

export class Product {
  public id: string
  public title: string
  public category: string
  public price: number
  public url: string

  constructor (props: ProductDto) {
    this.id = uuid()
    this.title = props.title
    this.category = props.category
    this.price = props.price
    this.url = props.url
  }
}
