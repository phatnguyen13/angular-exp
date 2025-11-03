import {Component} from '@angular/core';
import {ComponentA} from '../components/component-a/component-a';
import {ComponentB} from '../components/component-b/component-b';

@Component({
  selector: 'app-dependency-play',
  standalone: true,
  imports: [
    ComponentA,
    ComponentB
  ],
  templateUrl: `./dependency-play.html`
})
export class DependencyPlay {

}
