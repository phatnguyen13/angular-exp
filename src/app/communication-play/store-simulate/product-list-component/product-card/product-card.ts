import {Component, inject, input, output, signal} from '@angular/core';
import {
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardHeader,
  MatCardImage, MatCardSubtitle,
  MatCardTitle
} from '@angular/material/card';
import {MatButton} from '@angular/material/button';
import {NgOptimizedImage} from '@angular/common';
import {StoreService} from '../../store.service';

@Component({
  selector: 'app-product-card',
  imports: [
    MatCard,
    MatCardHeader,
    MatCardContent,
    MatCardActions,
    MatButton,
    MatCardImage,
    NgOptimizedImage,
    MatCardTitle,
    MatCardSubtitle,
  ],
  templateUrl: './product-card.html',
  standalone: true,
  styleUrl: './product-card.css'
})
export class ProductCard {

  name = input('');
  description = input('');
  type = input('');
  img = input('');
  id = input('');

  onAddToCart = output<ProductCard>();
  ngOnInit() {
    console.log(this.name());
  }
  addToCart() {
    this.onAddToCart.emit(this);
  }
}
