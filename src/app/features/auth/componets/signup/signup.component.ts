import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { passwordValidator } from '../../validators/password-validator';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  constructor(private authService: AuthService) {}

  registrationForm = new FormGroup(
    {
      name: new FormControl<string>('', {
        validators: [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(50),
          Validators.pattern('^[a-zA-Z ]*$'),
        ],
      }),
      number: new FormControl<number | null>(null, {
        validators: [Validators.required],
      }),
      password: new FormControl<string>('', {
        validators: [Validators.required],
      }),
      confirm: new FormControl<string>('', {
        validators: [Validators.required],
      }),
    },
    {
      validators: passwordValidator,
    }
  );

  ngOnInit() {}

  onSubmit() {
    if (this.registrationForm!.valid) {
      console.log('Registration form submitted:', this.registrationForm!.value);
      this.authService
        .registerEmployee(this.registrationForm!.value)
        .subscribe({
          next: (response) => console.log('Registration successful', response),
          error: (error) => console.error('Registration failed', error),
        });
    }
  }
}
