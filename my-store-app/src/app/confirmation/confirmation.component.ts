import { Component, OnInit } from '@angular/core';
import {ShoppingCartService} from "../services/shopping-cart.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {

  fullName: string = ''
  totalPrice: number = 0

  constructor(private shoppingCartService: ShoppingCartService, private router: Router) { }

  ngOnInit(): void {
    this.totalPrice = this.shoppingCartService.calculateTotalPrice()
    this.fullName = this.shoppingCartService.getFullName()
  }

}
