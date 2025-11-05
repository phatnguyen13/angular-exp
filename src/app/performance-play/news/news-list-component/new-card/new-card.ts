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

@Component({
  selector: 'app-new-card',
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
  templateUrl: './new-card.html',
  standalone: true,
  styleUrl: './new-card.css'
})
export class NewCard {

  name = input('');
  description = input('');
  type = input('');
  img = input('');
  id = input('');

  onAddToCart = output<NewCard>();
  ngOnInit() {
    console.log(this.img());
  }
  addToCart() {
    this.onAddToCart.emit(this);
  }
}
