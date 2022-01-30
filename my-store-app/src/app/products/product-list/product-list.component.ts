import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/Product'
import {ProductService} from "../../services/product.service";
import {ShoppingCartService} from "../../services/shopping-cart.service";
import {ProductItem} from "../../models/ProductItem";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products : Product[] = []

  constructor(private productService: ProductService, private shoppingCartService: ShoppingCartService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe( res => {
        this.products = res
      }
    )
  }

  onAdded(productItem: ProductItem): void {
    this.shoppingCartService.addToShoppingCart(productItem)
  }

}
