import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import {ProductListComponent} from "./products/product-list/product-list.component"
import {ShoppingCartComponent} from "./shopping-cart/shopping-cart.component"
import {ProductItemDetailComponent} from "./products/product-item-detail/product-item-detail.component"
import {ConfirmationComponent} from "./confirmation/confirmation.component"

const routes: Routes = [
  { path: '', component: ProductListComponent },
  { path: 'cart', component: ShoppingCartComponent },
  { path: 'product/detail/:id', component: ProductItemDetailComponent },
  {path: 'confirmation', component: ConfirmationComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
