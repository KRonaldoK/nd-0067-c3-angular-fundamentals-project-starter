import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { AppRoutingModule } from '../app-routing.module';


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
    AppRoutingModule
  ]
})
export class ProductsModule { }
