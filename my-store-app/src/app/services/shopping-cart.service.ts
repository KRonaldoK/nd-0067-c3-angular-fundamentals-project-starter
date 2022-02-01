import { Injectable } from '@angular/core';
import {ProductItem} from "../models/ProductItem";

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  productItemList: ProductItem[] = []
  fullName: string

  constructor() {
    this.fullName = ''
  }

  getItemsFromShoppingCart() {
    return this.productItemList
  }

  addToShoppingCart(productItem: ProductItem) {
    let index = this.productItemList.findIndex(p => p.product.name === productItem.product.name)
    if (index === -1){
      this.productItemList.push(productItem)
    } else {
      this.productItemList.splice(index, 1)
      this.productItemList.push(productItem)
    }
    return this.productItemList
  }

  removeFromShoppingCart(productItem: ProductItem) {
    let index = this.productItemList.findIndex(p => p.product.name === productItem.product.name)
    if (index > -1){
      this.productItemList.splice(index, 1)
    }
    return this.productItemList
  }

  clearShoppingCart() {
    this.productItemList = []
    return this.productItemList
  }

  calculateTotalPrice(): number{
    this.removeFromShoppingCartIfZero()
    const total = this.productItemList.reduce((acc: number, item: ProductItem) => acc + (item.product.price * item.quantity), 0)
    return total
  }

  private removeFromShoppingCartIfZero() {
    this.productItemList.forEach(item => {
      if (item.quantity === 0) {
        this.removeFromShoppingCart(item)
      }
    })
  }

  setFullName(fullName: string): void{
    this.fullName = fullName
  }

  getFullName(): string{
    return this.fullName
  }

}
