import {Component, inject} from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormControlName,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import {CustomInput} from '../custom-input/custom-input';
import {JsonPipe} from '@angular/common';
import {ButtonGroup} from '../button-group/button-group';
import {FormFieldComponent} from '../form-field/autocomplete.component';

@Component({
  selector: 'app-form-ui',
  imports: [ReactiveFormsModule, CustomInput, JsonPipe, FormsModule, FormFieldComponent],
  templateUrl: './form-ui.html',
  standalone: true,
  styleUrl: './form-ui.css'
})
export class FormUi {
  private formBuilder = inject(FormBuilder);
  profileForm = this.formBuilder.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    gender: ['', Validators.required],
    xgender: this.formBuilder.control({value: "xxx", disabled:true}),
    fruits: ['', Validators.required],
  });
  xgender1: string= '';
  fruitOptions = ['apple', 'banana', 'jackfruit'];
  onSubmit() {
    console.log(this.profileForm.value);
  }

  changeGender(male: string) {
    this.profileForm.controls['gender'].setValue(male);
  }

}
