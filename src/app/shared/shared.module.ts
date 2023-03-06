import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { HomeComponent } from '../home/home.component';
import { ProductDetailsComponent } from '../product-details/product-details.component';
import { ProductComponent } from '../product/product.component';
import { CartComponent } from '../cart/cart.component';
import { PriceItemComponent } from '../price-item/price-item.component';
import { CartItemComponent } from '../cart-item/cart-item.component';
import { SidePanelComponent } from '../side-panel/side-panel.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent,
    ProductComponent,
    ProductDetailsComponent,
    CartComponent,
    CartItemComponent,
    PriceItemComponent,
    SidePanelComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    FormsModule
  ],
  exports:[
    HeaderComponent
  ]
})
export class SharedModule { }
