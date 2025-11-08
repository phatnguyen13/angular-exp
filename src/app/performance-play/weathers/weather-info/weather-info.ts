import {Component, input, inject, output} from '@angular/core';
import {
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardHeader,
  MatCardSubtitle,
  MatCardTitle
} from '@angular/material/card';
import {MatButton} from '@angular/material/button';
import {MatList, MatListItem} from '@angular/material/list';
import {WeatherService} from '../weather.service';

@Component({
  selector: 'app-weather-info',
  imports: [
    MatCard,
    MatCardHeader,
    MatCardTitle,
    MatCardActions,
    MatButton,
    MatCardContent,
    MatList,
    MatListItem
  ],
  templateUrl: './weather-info.html',
  styleUrl: './weather-info.css'
})
export class WeatherInfo {
  data = input<any>();
  onHiddenOutput = output<any>();
  weatherService = inject(WeatherService);

  onHidden(v: any) {
    this.onHiddenOutput.emit(v);
  }
}
