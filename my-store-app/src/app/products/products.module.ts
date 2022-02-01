import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { AppRoutingModule } from '../app-routing.module';
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    ProductListComponent,
    ProductItemComponent
  ],
  exports: [
    ProductListComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule
  ]
})
export class ProductsModule { }
