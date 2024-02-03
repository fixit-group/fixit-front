import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { passwordValidator } from '../../validators/password-validator';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  public hide = true;
  public hideConfirm = true;

  activeRole: 'user' | 'mechanic' = 'user';

  registrationForm!: FormGroup;

  constructor(
    private authService: AuthService,
    private fb: FormBuilder // Inject FormBuilder
  ) {}

  ngOnInit() {
    this.initializeForm(); // Initialize form in ngOnInit
  }

  private initializeForm() {
    this.registrationForm = this.fb.group(
      {
        name: [
          '',
          [
            Validators.required,
            Validators.minLength(2),
            Validators.maxLength(50),
            Validators.pattern('^[a-zA-Z ]*$'),
          ],
        ],
        number: [null, Validators.required],
        password: ['', Validators.required],
        confirm: ['', Validators.required],
      },
      {
        validators: passwordValidator,
      }
    );
  }

  onRoleChange(role: 'user' | 'mechanic') {
    this.activeRole = role;
    // if (role === 'user') {
    //   this.initializeFormForUser();
    // } else {
    //   this.initializeFormForMechanic();
    // }
  }

  onSubmit() {
    if (this.registrationForm?.valid) {
      console.log('Registration form submitted:', this.registrationForm?.value);
      this.authService
        .registerEmployee(this.registrationForm?.value)
        .subscribe({
          next: (response) => console.log('Registration successful', response),
          error: (error) => console.error('Registration failed', error),
        });
    }
  }
}
