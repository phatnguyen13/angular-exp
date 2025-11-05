import {Component, forwardRef} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
  selector: 'app-button-group',
  imports: [],
  templateUrl: './button-group.html',
  styleUrl: './button-group.css',
  standalone: true,
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => ButtonGroup),
    multi: true
  }]
})
export class ButtonGroup implements ControlValueAccessor {
  value: string ='';
  onChange!: (value: string) => void;
  disableOn: boolean = false;
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
  }

  setDisabledState(isDisabled: boolean): void {
    this.disableOn = isDisabled;
  }

  writeValue(oj: string): void {
    this.value = oj;
  }

  handleChangeGender(other: string) {
    this.value = other;
    this.onChange(other);
  }
}
