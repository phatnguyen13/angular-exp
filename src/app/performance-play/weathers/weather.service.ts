import {inject, Injectable} from '@angular/core';
import {combineLatestAll, mergeMap, Observable, Subject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {combineLatest} from 'rxjs/internal/operators/combineLatest';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  http = inject(HttpClient);
  rangeSubject = new Subject();
  range$ = this.rangeSubject.asObservable();

  getWeatherData() {
    this.range$.pipe().subscribe(res => {
      console.log('SERVICE: ', res);
    })
  }

  getStations(lat: string, lon: string)  {
    return this.http.get<any>(`/weather/stations/nearby?lat=${lat}&lon=${lon}&radius=1000000`);
  }

}
