import { FormGroup, FormControl, Validators, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

export const PasswordValidation = [
  Validators.required,
  Validators.minLength(3),
];

export class RepeatPasswordEStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    return control && control.parent.get('password').value !== control.parent.get('passwordConfirm').value && control.dirty
  }
}
export function RepeatPasswordValidator(group: FormGroup) {
  return group.controls.password.value !== group.controls.passwordConfirm.value ? null : { nonMatch: true }     
}