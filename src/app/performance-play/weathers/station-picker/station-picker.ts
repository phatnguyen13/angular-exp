import {Component, inject, output} from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule, ValueChangeEvent} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule, MatLabel} from '@angular/material/input';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {AsyncPipe, JsonPipe} from '@angular/common';
import {
  debounceTime,
  distinctUntilChanged,
  filter,
  map,
  Observable,
  of,
  startWith,
  Subscription,
  switchMap,
  tap
} from 'rxjs';
import {WeatherService} from '../weather.service';
import {MatListModule} from '@angular/material/list';

@Component({
  selector: 'app-station-picker',
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    AsyncPipe,
    MatLabel,
    JsonPipe
  ],
  templateUrl: './station-picker.html',
  standalone: true,
  styleUrl: './station-picker.css'
})
export class StationPicker {
  weatherService = inject(WeatherService);
  myControl = new FormControl('');
  filteredOptions: Observable<any[]> | undefined;
  onDataPicker = output<any>();

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      debounceTime(500),
      distinctUntilChanged(),
      switchMap(value => this._filter(value||'')),
    );

    this.myControl.events.pipe(
      filter(event => event instanceof ValueChangeEvent))
      .subscribe(res =>
    {
      console.log(res.value);
      this.onDataPicker.emit(res);
    })
  }

  private _filter(value: string) {
      const vs = value?.split(',');
      if(vs?.length == 2 && vs[1] !='') {
       return this.weatherService.getStations(vs[0], vs[1])
           .pipe(
             map(value => value.data.map((item: any, index: number) => item)),
             tap(console.log)
           )
      }
      return of([])
  }

}
