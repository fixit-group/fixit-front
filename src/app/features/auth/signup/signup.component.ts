import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  registrationForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.registrationForm = this.fb.group(
      {
        name: ['', [Validators.required]],
        number: ['', [Validators.required]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        repeatPassword: ['', [Validators.required, Validators.minLength(6)]],
      },
      { validators: this.passwordMatchValidator }
    );
  }

  passwordMatchValidator(group: FormGroup) {
    const passwordControl = group.get('password');
    const repeatPasswordControl = group.get('repeatPassword');

    if (!passwordControl || !repeatPasswordControl) {
      return null;
    }

    const password = passwordControl.value;
    const repeatPassword = repeatPasswordControl.value;

    return password === repeatPassword ? null : { mismatch: true };
  }

  onSubmit() {
    if (this.registrationForm!.valid) {
      console.log('Registration form submitted:', this.registrationForm!.value);
    }
  }
}
