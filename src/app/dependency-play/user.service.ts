import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class UserService {
  private counter = 0;
  constructor(private http: HttpClient) {
    console.log('Hello UserService');
    this.counter++;
  }

  getCounter(): number {
    return this.counter;
  }
}
