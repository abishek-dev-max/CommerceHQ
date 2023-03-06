import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartProducts:any[]=[];
  cartSubject=new Subject();
  constructor() { }

  addProductToCart(product:any){
    let CurrentBook={...product,count:1}
    this.cartProducts.push(CurrentBook);
    this.cartSubject.next(this.cartProducts);
  }
  getAllCartItems(){
    return this.cartProducts;
  }
  getPriceDetailsInCartItem(product:any){
    let priceDetails={
      discountedPrice:(product.price*product.count)-(product.discount)/100*(product.price*product.count),
      price:product.price*product.count
    }
    return priceDetails;
  }
  incProductCount(product:any){
    let index=this.cartProducts.findIndex((itemt)=>{
      return itemt.isbn==product.isbn;
    });
    this.cartProducts[index].count++;
    this.getPriceDetailsInCartItem(product);
    this.cartSubject.next(this.cartProducts);
  }
  decProductCount(product:any){
    let index=this.cartProducts.findIndex((itemt)=>{
      return itemt.isbn==product.isbn;
    });
    this.cartProducts[index].count--;
    this.getPriceDetailsInCartItem(product);
    this.cartSubject.next(this.cartProducts);
}
removeItemFromCart(product:any){
  let RemoveConfirm=window.confirm("Are you Sure?");
  if (RemoveConfirm) {
    let index=this.cartProducts.findIndex((itemt)=>{
      return itemt.isbn==product.isbn;
    });
    this.cartProducts.splice(index,1);
    this.cartSubject.next(this.cartProducts);
  }
}
}
