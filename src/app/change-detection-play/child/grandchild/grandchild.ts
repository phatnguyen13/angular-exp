import { Component, DoCheck, effect, Input, input, signal, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-grandchild',
  template: '<div>hi</div>',
  standalone: true,
  //changeDetection: ChangeDetectionStrategy.OnPush,
})

export class Grandchild  {
  data = input<any>(null);
  random = signal(0);
  constructor() {
    effect(() => {
      console.log('🔁 Child rendered. data =', this.data());
    });
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
