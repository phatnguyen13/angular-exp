import {
  ChangeDetectionStrategy, ChangeDetectorRef,
  Component,
  DoCheck,
  effect,
  inject,
  Input,
  input,
  signal,
  SimpleChanges
} from '@angular/core';
import {Grandchild} from './grandchild/grandchild';

@Component({
  selector: 'app-child',
  templateUrl: './child.html',
  standalone: true,
  styleUrl: './child.css',
  imports: [
    Grandchild
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Child  {
  data = input<any>(null);
  random = signal(0);
  lastUpdate = input<any>(null);
  cdr = inject(ChangeDetectorRef);

  constructor() {
    effect(() => {
      console.log('🔁 Child rendered. data =', this.data());
    });
  }
  update() {
    this.cdr.markForCheck();
  }
  // ngDoCheck() {
  //   console.log("DoCheck: ", this.data);
  // }
  // ngAfterViewChecked() {
  //   console.log("View checked - no signal update");
  // }
  // getCurrentTime() {
  //   const time = new Date().toLocaleTimeString();
  //   console.log('Child render timestamp:', time);
  //   return time;
  // }



}
