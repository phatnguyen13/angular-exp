import {Component, computed, inject, OnDestroy, OnInit, signal} from '@angular/core';
import {ComponentA} from '../components/component-a/component-a';
import {ComponentB} from '../components/component-b/component-b';
import {MatFormField, MatInput, MatLabel} from '@angular/material/input';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {MatAutocomplete, MatAutocompleteTrigger, MatOption} from '@angular/material/autocomplete';
import {RxplayService} from './rxplay.service';
import {catchError, debounceTime, map, Observable, of, startWith, switchMap, tap} from 'rxjs';
import {AsyncPipe} from '@angular/common';

@Component({
  selector: 'app-rxplay',
  imports: [
    ComponentA,
    ComponentB,
    MatFormField,
    MatInput,
    ReactiveFormsModule,
    MatAutocompleteTrigger,
    MatAutocomplete,
    MatOption,
    MatFormField,
    AsyncPipe,
    MatLabel
  ],
  templateUrl: './rxplay.html',
  standalone: true,
  styleUrl: './rxplay.css'
})
export class Rxplay implements OnInit{
  rxService = inject(RxplayService);
  myControl = new FormControl();

  options= signal([]);
  filteredOptions: Observable<Array<any>> = of([]);
  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      //startWith(''),
      debounceTime(300),
      tap(console.log),
      switchMap(value => this.rxService.search(value).pipe(map(data => data['data']))),
    )
  }

  getPosts() {
    this.rxService.getPost().subscribe((res)=> {
      this.options.set(res);
    })
  }
}
