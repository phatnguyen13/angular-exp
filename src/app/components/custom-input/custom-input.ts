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
      debugger;
      this.value = value;
    };
    registerOnChange(fn: any) {
      debugger;
      this.onChange = fn;
    }
    registerOnTouched(fn: any) {
      debugger;
      this.onTouched = fn;
    }

    onInput($event: any) {
      debugger;
      const v = $event;
      this.value = v;
      this.onChange(v);
    }

}
