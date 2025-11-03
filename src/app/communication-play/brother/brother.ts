import {Component, contentChild} from '@angular/core';
import {Child} from '../child/child';

@Component({
  selector: 'app-brother',
  imports: [],
  templateUrl: './brother.html',
  standalone: true,
  styleUrl: './brother.css'
})
export class Brother {
  content = contentChild(Child);
  ngOnInit() {
    let data = this.content()?.getData();
    console.log({data});
  }
}
