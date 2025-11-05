import {Component, inject, output} from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, ValueChangeEvent} from '@angular/forms';
import {filter, Subject} from 'rxjs';
import {
  MatDatepickerModule,
  MatDatepickerToggle,
  MatDateRangeInput,
  MatDateRangePicker
} from '@angular/material/datepicker';
import {JsonPipe} from '@angular/common';
import {MatError, MatFormField, MatHint, MatLabel} from '@angular/material/input';
import {provideNativeDateAdapter} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {WeatherService} from '../weather.service';

@Component({
  selector: 'app-range-picker',
  imports: [MatFormFieldModule, MatDatepickerModule, FormsModule, ReactiveFormsModule, JsonPipe],
  templateUrl: './range-picker.html',
  standalone: true,
  styleUrl: './range-picker.css',
  providers: [provideNativeDateAdapter()],

})
export class RangePicker {
  onChangeRange = output<any>();
  weatherService = inject(WeatherService);
  readonly range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });

  ngOnInit() {
    console.log(this.range);
    this.range.events.pipe(
      filter(event => event instanceof ValueChangeEvent),
    ).subscribe((res)=> {
      console.log(res);
      this.weatherService.rangeSubject.next(res);
    })
  }
}
