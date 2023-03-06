import { Component, Input, OnInit } from '@angular/core';
import { CartService } from '../core/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() book:any;
  isProductInCart:boolean=false;
  constructor(private cartService:CartService){

  }
  ngOnInit(): void {
  }
  addToCart(book:any){
    this.cartService.addProductToCart(book);
    this.isProductInCart=true;
  }

}
