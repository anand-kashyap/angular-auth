import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormField, ValidMessages } from './model';

@Injectable({
  providedIn: 'root'
})
export class DynamicLoginService {

  constructor() { }

  // Check Form Control Validation Errors
  getErrors(formControl: string, formGroup: FormGroup, fields: FormField[]): string {
    let errorField: FormField;
    for (const f of fields) {
      if (f.name === formControl) {
        errorField = f;
        break;
      }
    }
    if (errorField) {
      for (const errF of errorField.validations) {
        let err = '';
        if (typeof errF === 'object') {
          err += errF[0];
        } else {
          err += errF;
        }
        if (formGroup.get(formControl).hasError(err)) {
          let error = ValidMessages.m[err];
          if (err === 'email') {
            error = ValidMessages.m.invalid;
          }
          if (err === 'pattern') {
            error += ' ' + errF[1];
          }
          if (err === 'minlength' || err === 'maxlength') {
            error = ValidMessages.m[err](parseInt(errF[1], 10));
          }
          return errorField.label + ' ' + error;
        }
      }
    }
  }

  isControlInvalid(formGroup: FormGroup, controlName: string): boolean {
    return formGroup.get(controlName).invalid && formGroup.get(controlName).dirty;
  }

  markFieldsAsDirty(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(formControl => {
      const control = formGroup.get(formControl);
      control.markAsDirty({ onlySelf: true });
    });
  }
}
