import {Component, input} from '@angular/core';

@Component({
  selector: 'app-child-communication',
  imports: [],
  templateUrl: './child.html',
  standalone: true,
  styleUrl: './child.css'
})
export class Child {
  data = input<string>();
  reset() {
    console.log("RESET");
  }
  getData(){
    console.log("GET DATA");
    return this.data();
  }

}
