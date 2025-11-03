import {Component, inject, signal} from '@angular/core';
import {MatList, MatListItem} from '@angular/material/list';
import {MatIcon} from '@angular/material/icon';
import {StoreService} from '../store.service';
import {toSignal} from '@angular/core/rxjs-interop';
import {MatIconButton} from '@angular/material/button';

@Component({
  selector: 'app-cart-component',
  imports: [
    MatList,
    MatListItem,
    MatIcon,
    MatIconButton,
  ],
  templateUrl: './cart-component.html',
  standalone: true,
  styleUrl: './cart-component.css'
})
export class CartComponent {

  cartService = inject(StoreService);
  cartItemsV2 = toSignal(this.cartService.cartItems$, {initialValue: []});
  ngOnInit(){
  }
  remove(id: string){
    this.cartService.removeFromCart(id);
  }

}
