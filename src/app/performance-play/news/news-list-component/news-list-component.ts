import {Component, computed, effect, inject, model, resource, signal} from '@angular/core';
import {RxplayService} from '../../../rxplay/rxplay.service';
import {combineLatest, debounceTime, distinctUntilChanged, filter, map} from 'rxjs';

import {NewsService} from '../news.service';
import {MatFormField, MatInput, MatLabel} from '@angular/material/input';
import {FormControl, FormsModule, ReactiveFormsModule, ValueChangeEvent} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {NewCard} from './new-card/new-card';
import {ProductCard} from '../../../communication-play/store-simulate/product-list-component/product-card/product-card';


@Component({
  selector: 'app-news-list-component',
  imports: [
    MatInput,
    MatFormField,
    FormsModule,
    MatLabel,
    ReactiveFormsModule,
    NewCard,
    ProductCard,
  ],
  templateUrl: './news-list-component.html',
  standalone: true,
  styleUrl: './news-list-component.css',
})
export class NewsListComponent {
  newsService = inject(NewsService);
  searchValue = new FormControl('');
  news = signal<any>([]);
  weathers =  signal<any>([]);
  constructor() {
    this.searchValue.events
      .pipe(
        filter(event => event instanceof ValueChangeEvent ),
        map(event => event.value),
        debounceTime(500),
        distinctUntilChanged(),
        filter(value => value.trim().length > 0)
      )
      .subscribe((event) => {
        console.log({event});
        this.newsService.getNews(event, 'vi-VN').pipe(
          map((value) =>
            value?.items.map((item: any, index: number) =>{
              return {
                name: item.title,
                type: item.publisher,
                description: item.snippet,
                img: item.images?.thumbnail ?? item.images?.thumbnailProxied,
                id: index
              }
            }))
        ).subscribe((res) => {
          this.news.set(res);
        });
      })
  }
  ngOnInit() {

  }


}
