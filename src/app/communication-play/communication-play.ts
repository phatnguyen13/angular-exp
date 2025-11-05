import {Component, ElementRef, signal, viewChild, ViewChild} from '@angular/core';
import {Child} from './child/child';
import {MatButton} from '@angular/material/button';
import {Brother} from './brother/brother';

@Component({
  selector: 'app-communication-play',
  imports: [Child, MatButton, Brother],
  templateUrl: './communication-play.html',
  standalone: true,
  styleUrl: './communication-play.css'
})
export class CommunicationPlay {
  child = viewChild<Child>('first');
  childData = signal('');

  hahah: string | undefined;
  getChildData() {
    this.childData.set(this.child()?.getData()!);
    const data = this.child()?.getData();

  }
}
