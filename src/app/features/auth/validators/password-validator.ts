import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export const passwordValidator: ValidatorFn = (
  control: AbstractControl
): ValidationErrors | null => {
  const pw = control.get('password');
  const conf = control.get('confirm');

  if (!pw || !conf || !pw.value || !conf.value) {
    return null;
  }

  if (pw.value !== conf.value) {
    conf.setErrors({ noMatch: true });
    return { noMatch: true };
  } else {
    conf.setErrors(null);
  }

  return null;
};
