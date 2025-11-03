import { Injectable } from '@angular/core';
import {BehaviorSubject, map} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  private cartItems = new BehaviorSubject<any[]>([]);
  cartItems$ = this.cartItems.asObservable();
  cartCount$ = this.cartItems$.pipe(map(item=>item.length));

  addToCart(product: any){
    let cur = this.cartItems.value;
    debugger;
    const f = cur.findIndex(i => i.product.id === product.id);
    if(f>-1){
      cur[f].num++;
    } else{
      cur.push( {product: product, num: 1});
    }
    this.cartItems.next([...cur]);
  }

  removeFromCart(id: string){
    const cur = this.cartItems.value;
    const updated = cur.filter(item => item.product.id !== id);
    this.cartItems.next(updated);
  }

}
