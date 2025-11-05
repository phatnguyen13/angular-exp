import { Component } from '@angular/core';
import {NewsListComponent} from './news-list-component/news-list-component';

@Component({
  selector: 'app-news',
  imports: [
    NewsListComponent
  ],
  templateUrl: './news.html',
  standalone: true,
  styleUrl: './news.css'
})
export class News {

}
