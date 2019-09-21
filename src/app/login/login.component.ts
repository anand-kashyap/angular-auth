import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { ValidateService } from './../validate.service';
import { Validations } from '../validations/validations.constants';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  errorMessage = '';
  loginForm = new FormGroup({
    email: new FormControl( '', [Validators.required, Validators.email] ),
    password: new FormControl( '', [Validators.required] )
  });

  loginValidations = {
    email: [
      {
        type: 'required',
        message: Validations.REQUIRED_EMAIL
      },
      {
        type: 'email',
        message: Validations.INVALID_EMAIL
      }
    ],
    password: [
      {
        type: 'required',
        message: Validations.REQUIRED_PSW
      }
    ]
  };

  constructor(private validateService: ValidateService) { }

  ngOnInit() {
  }

  getFormErrors(controlName: string): string {
    return this.validateService.getErrors(controlName, this.loginForm, this.loginValidations);
  }

  isInvalid(controlName: string): boolean {
    return this.validateService.isControlInvalid(this.loginForm, controlName);
  }

  login() {
    if (this.loginForm.valid) {
      console.log('login called');
      this.loginForm.disable();
      // make api call
      this.loginForm.enable();
    } else {
      this.validateService.markFieldsAsDirty(this.loginForm);
    }
  }

}
