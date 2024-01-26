// app-validators.ts
import { AbstractControl, ValidationErrors, Validators } from '@angular/forms';

export class AppValidators {
  static nameValidator(control: AbstractControl): ValidationErrors | null {
    if (!control.value) return null; // Allow empty value or handle as required separately
    const isValid = /^[a-zA-Z ]*$/.test(control.value);
    return isValid ? null : { invalidName: true };
  }

  static emailValidator(control: AbstractControl): ValidationErrors | null {
    if (!control.value) return null; // Allow empty value or handle as required separately
    const isValid = Validators.email(control) === null;
    return isValid ? null : { invalidEmail: true };
  }
}
