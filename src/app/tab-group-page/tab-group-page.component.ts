import {Component, ElementRef, inject, ViewChild} from '@angular/core';
import {CustomInput} from '../components/custom-input/custom-input';
import {PrintService} from './print.service';

@Component({
  selector: 'app-tab-group-page',
  imports: [
    CustomInput
  ],
  templateUrl: './tab-group-page.component.html',
  standalone: true,
  styleUrl: './tab-group-page.component.css'
})
export class TabGroupPage {
  @ViewChild('toggleInput', {
    static: true
  }) toggleInput!: CustomInput ;
  printService = inject(PrintService);
  ngOnInit() {
    console.log(this.toggleInput);
  }
  ngAfterViewInit() {
    console.log(this.toggleInput);
  }


}
