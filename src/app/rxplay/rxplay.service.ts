import {map, Observable, share, shareReplay, Subject, switchMap} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {inject, Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RxplayService {
  http = inject(HttpClient);
  private posts$ = this.http.get<any>('/blogs/search?q=cha&page=1&page_size=3').pipe(
    map(post => post['data'])
  )
  private searchSubject = new Subject<any>();
  search$ = this.searchSubject.pipe(
    switchMap(search => {
      return this.http.get<any>(`/blogs/search?q=${search}&page=1&page_size=3`);
    }),
  )
  search(value: string) {
    if(value !== '') {

      return this.http.get<any>(`/blogs/search?q=${value}&page=1&page_size=3`);
    }
    return this.posts$;
  }
  getPost(): Observable<any> {
    return this.posts$;
  }


}
