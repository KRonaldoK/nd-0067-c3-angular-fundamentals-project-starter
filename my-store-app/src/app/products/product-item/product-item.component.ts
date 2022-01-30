import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Product} from "../../models/Product";
import {ProductItem} from "../../models/ProductItem";

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() product: Product
  @Output() added = new EventEmitter()

  quantity: number

  constructor() {
    this.product = {
      id: 0,
      name: '',
      price: -1,
      url: '',
      description: ''
    }
    this.quantity = 1
  }

  ngOnInit(): void {
  }

  onSelect(quantity: number) {
    this.quantity = quantity
  }

  onAddProduct(product: Product){
    this.added.emit(new ProductItem(product, this.quantity))
  }
}
