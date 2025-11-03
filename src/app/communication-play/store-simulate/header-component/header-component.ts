import {Component, inject, signal} from '@angular/core';
import {MatIcon} from '@angular/material/icon';
import {MatBadge} from '@angular/material/badge';
import {MatButton, MatIconButton} from '@angular/material/button';
import {MatToolbar} from '@angular/material/toolbar';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {StoreService} from '../store.service';
import {toSignal} from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-header-component',
  imports: [
    MatIcon,
    MatBadge,
    MatIconButton,
    MatToolbar,
    MatButton,
    RouterLink,
    RouterLinkActive,
  ],
  templateUrl: './header-component.html',
  standalone: true,
  styleUrl: './header-component.css'
})
export class HeaderComponent {
  cartService = inject(StoreService);
  cartSize = toSignal(this.cartService.cartCount$, {initialValue: 0})
  ngOnInit() {

  }
}
