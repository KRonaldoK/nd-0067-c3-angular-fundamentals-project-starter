import {Product} from "./Product";

export class ProductItem{
  product: Product
  quantity: number

  constructor(product: Product, quantity: number){
    this.product = product
    this.quantity = quantity
  }
}


