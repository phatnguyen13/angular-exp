import {inject, Injectable} from '@angular/core';
import {BehaviorSubject, combineLatest, EMPTY, filter, map, mergeMap, Observable, Subject, switchMap, tap} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {ValueChangeEvent} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  http = inject(HttpClient);
  rangeSubject = new BehaviorSubject<any>(null);
  range$ = this.rangeSubject.asObservable();

  stationSubject = new BehaviorSubject<any>(null);
  station$ = this.stationSubject.asObservable();

  getWeatherData() {
    return combineLatest([this.range$, this.station$]).pipe(
      filter(([r,s]) => r!=null && s?.[0] && s?.[1]),
      tap((v)=> console.log(`rrr: ${v}`)),
      map(([r,s]: any) => {
        const start = (r[0] as Date).toISOString().split('T')[0];
        const end = (r[1] as Date).toISOString().split('T')[0];
        return [{start, end}, s];
      }),

      tap((v)=> console.log(`rrr: ${v}`)),
      switchMap(([r,s]: any) => {
        return this.getWeatherDaily(s, r.start, r.end)
      })
    )
  }

  getStations(lat: string, lon: string)  {
    return this.http.get<any>(`/weather/stations/nearby?lat=${lat}&lon=${lon}&radius=1000000`);
  }

  private getWeatherDaily(station:string, start:string, end:string) {
    return this.http.get(`/weather/stations/daily?station=${station}&start=${start}&end=${end}`);
  }
}
