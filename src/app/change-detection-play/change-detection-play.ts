import {ChangeDetectionStrategy, ChangeDetectorRef, Component, inject, signal} from '@angular/core';
import {MatButton} from '@angular/material/button';
import {Child} from './child/child';

@Component({
  selector: 'app-change-detection-play',
  imports: [
    MatButton,
    Child
  ],
  templateUrl: './change-detection-play.html',
  standalone: true,
  styleUrl: './change-detection-play.css'
})
export class ChangeDetectionPlay {
  count = signal(0);
  childData = { name: 'John' };
  parentData = 'Hello';
  increase() {
    this.count.update(v => v+1)
    this.parentData = String(this.count());
    this.childData.name = 'Phat';
  }
  name = "Jodn";
  lastUpdate = '';
  cdr = inject(ChangeDetectorRef);
  updateWithMark() {
    this.childData.name = 'UpdateWithMark';
    this.lastUpdate = new Date().toLocaleTimeString();
    this.cdr.markForCheck();
  }

  updateWithDetect() {
    this.childData.name = 'UpdateWithDetect';
    this.lastUpdate = new Date().toLocaleTimeString();
    this.cdr.detectChanges();
  }

  updateFromWebSocket() {

    this.childData.name = 'UpdateFromWebSocket';
    this.lastUpdate = new Date().toLocaleTimeString();

  }

  updateFromTimer() {
    setTimeout(() =>{
      this.childData.name = 'UpdateFromTimer';
      this.lastUpdate = new Date().toLocaleTimeString();
      this.cdr.detectChanges();
    }, 1000)
  }

}
