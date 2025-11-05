import {Component, inject} from '@angular/core';
// import {RangePicker} from './range-picker/range-picker';
import {StationPicker} from './station-picker/station-picker';
import {MatSelect} from '@angular/material/select';
import {RangePicker} from './range-picker/range-picker';
import {WeatherService} from './weather.service';

@Component({
  selector: 'app-weathers',
  imports: [
    // RangePicker,
    MatSelect,
    StationPicker,
    RangePicker
  ],
  templateUrl: './weathers.html',
  standalone: true,
  styleUrl: './weathers.css'
})
export class Weathers {
  weatherService = inject(WeatherService);
  ngOnInit() {
    this.weatherService.getWeatherData();
  }
  updateData(data: any) {
    console.log({data});
  }

}
