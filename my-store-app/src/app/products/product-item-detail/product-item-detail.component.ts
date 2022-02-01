import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import {Product} from "../../models/Product";
import {ProductService} from "../../services/product.service";
import {ShoppingCartService} from "../../services/shopping-cart.service";
import {ProductItem} from "../../models/ProductItem";

@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css']
})
export class ProductItemDetailComponent implements OnInit {

  id: number = 0
  product: Product
  quantity: number = 1
  quantityList = [1, 2, 3, 4, 5, 6, 7, 8, 9]

  constructor(private productService: ProductService, private shoppingCartService: ShoppingCartService, private router: Router, private activeRouter: ActivatedRoute) {
    this.activeRouter.paramMap.subscribe((params: ParamMap) => {
      this.id  = Number(params.get('id'))
    })
    this.product = {
      id: 0,
      name: '',
      price: -1,
      url: '',
      description: ''
    }
  }

  ngOnInit(): void {
    this.productService.getProducts().subscribe( res => {
          let products: Product[] = res
          this.product = products.find(p => {
              return p.id === this.id
          }) as Product
      }
    )
  }

  addToShoppingCart(product: Product): void {
    this.shoppingCartService.addToShoppingCart(new ProductItem(product, this.quantity))
    alert(`Product ${product.name} was added to the shopping cart using quantity ${this.quantity}`)
  }

}
