import { Component } from '@angular/core';
import {ProductListComponent} from './product-list-component/product-list-component';
import {BehaviorSubject} from 'rxjs';

@Component({
  selector: 'app-store-simulate',
  imports: [ProductListComponent],
  templateUrl: './store-simulate.html',
  standalone: true,
  styleUrl: './store-simulate.css'
})
export class StoreSimulate {


}
