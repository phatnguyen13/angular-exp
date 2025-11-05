import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({providedIn: 'root'})
export class NewsService {
  http = inject(HttpClient);
  getNews(keyword: string, lang: string): Observable<any> {
    return this.http.get('/rapid/search?keyword=' + keyword + '&lr='+lang);
  }
  getWeathers(station: string, from: string, to: string): Observable<any> {
    return this.http.get(`/whether/stations/daily?station=${station}&start=${from}&end=${to}`);
  }
}
