import {Component, computed, forwardRef, input, signal} from '@angular/core';
import {ControlValueAccessor, FormBuilder, FormsModule, NG_VALUE_ACCESSOR, ReactiveFormsModule} from '@angular/forms';
import {AsyncPipe, JsonPipe} from '@angular/common';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {Observable} from 'rxjs';
import {MatAutocomplete, MatAutocompleteTrigger, MatOption} from '@angular/material/autocomplete';


@Component({
  selector: 'form-autocomplete',
  templateUrl: 'autocomplete.component.html',
  standalone: true,
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    AsyncPipe,
    MatAutocomplete,
    MatOption,
    MatAutocompleteTrigger,
    JsonPipe
  ],
  providers: [
    {provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => FormFieldComponent), multi: true},
  ]
})
export class FormFieldComponent implements ControlValueAccessor {
  internalValue = signal('');
  options = input(['option 1', 'option 2']);
  filteredOptions = computed(() =>{
    return this.options().filter(option => option.toLowerCase().includes(this.internalValue().toLowerCase()));
  })

  onChange = (value: string) => {};

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
  }

  setDisabledState(isDisabled: boolean): void {
  }

  writeValue(obj: any): void {
    debugger;
    this.internalValue.set(obj);
    this.onChange(obj);
  }
  onInput($event: any): void {
    const v = $event.target.value;
    this.internalValue.set(v);
    this.onChange(v);
  }
}
