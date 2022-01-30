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

  onSelect(quantity: number){
    this.quantity = quantity
  }

  addToShoppingCart(product: Product): void {
    this.shoppingCartService.addToShoppingCart(new ProductItem(product, this.quantity))
  }

}
