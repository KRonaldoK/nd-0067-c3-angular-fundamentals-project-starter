import { Component, OnInit } from '@angular/core';
import {ShoppingCartService} from "../services/shopping-cart.service";
import { Router } from '@angular/router';
import {ProductItem} from "../models/ProductItem";

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  shoppingCartList: ProductItem[] = []
  fullName: string = ''
  address: string = ''
  creditCard: string = ''
  totalPrice: number = 0

  constructor(private shoppingCartService: ShoppingCartService, private router: Router) { }

  ngOnInit(): void {
    this.shoppingCartList = this.shoppingCartService.getItemsFromShoppingCart()
    this.calculateTotalPrice()
  }

  clearShoppingCart(): void{
    this.shoppingCartService.clearShoppingCart()
    this.shoppingCartList = []
  }

  onSubmit(): void{
    this.setFullName(this.fullName)
    this.calculateTotalPrice()
    this.router.navigate(['confirmation'])
  }

  calculateTotalPrice(): void{
    this.totalPrice = this.shoppingCartService.calculateTotalPrice()
  }

  onChangeQuantity(): void {
    alert('Shopping cart updated')
    this.calculateTotalPrice()
  }

  removeFromShoppingCart(productItem: ProductItem){
    this.shoppingCartService.removeFromShoppingCart(productItem)
    this.calculateTotalPrice()
    alert(`Product ${productItem.product.name} was removed from cart`)
  }

  getFullName(): string {
    return this.fullName
  }

  setFullName(fullName: string): void {
    this.fullName = fullName
    this.shoppingCartService.setFullName(fullName)
  }
}
