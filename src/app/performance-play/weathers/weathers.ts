import {Component, inject, signal} from '@angular/core';
// import {RangePicker} from './range-picker/range-picker';
import {StationPicker} from './station-picker/station-picker';
import {MatSelect} from '@angular/material/select';
import {RangePicker} from './range-picker/range-picker';
import {WeatherService} from './weather.service';
import {JsonPipe} from '@angular/common';
import {WeatherInfo} from './weather-info/weather-info';
import {CdkVirtualScrollViewport, CdkVirtualForOf, CdkFixedSizeVirtualScroll} from '@angular/cdk/scrolling';

@Component({
  selector: 'app-weathers',
  imports: [
    // RangePicker,
    MatSelect,
    StationPicker,
    RangePicker,
    JsonPipe,
    WeatherInfo,
    CdkVirtualForOf,
    CdkVirtualScrollViewport,
    CdkFixedSizeVirtualScroll
  ],
  templateUrl: './weathers.html',
  standalone: true,
  styleUrl: './weathers.css'
})
export class Weathers {
  weatherService = inject(WeatherService);
  weatherData = signal<any[]>([]);
  showNormal = signal(false);


  ngOnInit() {
    this.weatherService.getWeatherData().pipe().subscribe((res: any)=>{
      this.weatherData.set(res?.data ??[]);
    });
  }
  updateData(data: any) {
    console.log({data});
  }

  hiddenOutput(v: any){
    this.weatherData.update((cur) => cur.filter((item) => item.date != v.date))
  }

  switchVirtual(){
    this.showNormal.set(!this.showNormal());
  }
  trackById(i: number, item: any) {
    return item.date;
  }
}
