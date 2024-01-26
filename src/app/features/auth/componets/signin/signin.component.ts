import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit {
  loginForm = new FormGroup({
    username: new FormControl<string>('', {
      validators: [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(50),
        Validators.pattern('^[a-zA-Z ]*$'),
      ],
    }),
    password: new FormControl<string>('', {
      validators: [Validators.required],
    }),
    rememberMeCheckbox: new FormControl<boolean>(false, {
      validators: [Validators.required],
    }),
  });

  constructor() {}

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.loginForm.valid) {
      const formData = this.loginForm.value;
      console.log('Submitted Data:', formData);
    }
  }
}
