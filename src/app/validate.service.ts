import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidateService {

  constructor() { }

  // Check Form Control Validation Errors
  getErrors(formControl: string, formGroup: FormGroup, validations): string {
    const errorField = validations[formControl];

    for (const err of errorField) {
      if (formGroup.get(formControl).hasError(err.type)) {
        return 'formValid.' + err.message;
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
