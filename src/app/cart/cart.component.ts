import { Component, OnInit } from '@angular/core';
import { CartService } from '../core/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  CartItems:any[]=[];
constructor(private cartService:CartService) 
{

}
  ngOnInit(): void {
    this.CartItems = this.cartService.getAllCartItems(); 
  }

}
