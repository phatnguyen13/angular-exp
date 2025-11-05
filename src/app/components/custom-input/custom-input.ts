import {Component, forwardRef} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
  selector: 'app-custom-input',
  imports: [],
  templateUrl: './custom-input.html',
  styleUrl: './custom-input.css',
  standalone: true,
  providers: [
    {provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => CustomInput), multi: true},
  ]
})
export class CustomInput implements ControlValueAccessor {
    value: string = '';
    private onChange = (value: string) => {};
    private onTouched = () => {};

    writeValue = (value: string) => {
      this.value = value;
    };
    registerOnChange(fn: any) {
      this.onChange = fn;
    }
    registerOnTouched(fn: any) {
      this.onTouched = fn;
    }

    onInput($event: any) {
      const v = $event;
      this.value = v;
      this.onChange(v);
    }

}
