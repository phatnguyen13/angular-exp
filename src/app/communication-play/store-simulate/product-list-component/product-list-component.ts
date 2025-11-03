import {Component, inject, signal} from '@angular/core';
import {RxplayService} from '../../../rxplay/rxplay.service';
import {map} from 'rxjs';
import {CartComponent} from '../cart-component/cart-component';
import {ProductCard} from './product-card/product-card';
import {StoreService} from '../store.service';

@Component({
  selector: 'app-product-list-component',
  imports: [
    CartComponent,
    ProductCard
  ],
  templateUrl: './product-list-component.html',
  standalone: true,
  styleUrl: './product-list-component.css',
})
export class ProductListComponent {
  listProduct = signal<any>([]);
  blogService = inject(RxplayService)
  cartService = inject(StoreService);
  ngOnInit() {
    this.blogService.getPost().pipe(map(posts => posts.map((v: any)=> {
      return {
        name: v.title,
        description: v.summary,
        type: v.category,
        img: v.image,
        id: v.id,
      }}
    ))).subscribe(posts => {
      this.listProduct.set(posts);
      console.log(this.listProduct());
    })
  }

  addToCart(card: any) {
    this.cartService.addToCart(card);
  }
}
