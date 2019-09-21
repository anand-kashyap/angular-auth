import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { ValidateService } from './../validate.service';
import { Validations } from '../validations/validations.constants';
import { IFormField, FormField } from '../models/login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  @Input() fields: IFormField[];
  @Output() out = new EventEmitter<any>();
  errorMessage = '';
  loginFields = {
    email: new FormControl( '', [Validators.required, Validators.email] ),
    password: new FormControl( '', [Validators.required] )
  };
  loginForm = new FormGroup(this.loginFields);

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
    console.log(this.fields);
    if (this.fields) {
      this.convertToControls();
    } else {
      this.fields = [
        new FormField('email', [Validators.required, Validators.email]),
        new FormField('password', [Validators.required], 'password')
      ];
    }
  }

  convertToControls() {
    const loginFields = {};
    for (const f of this.fields) {
      const vArr = [];
      for (const v of f.validations) {
        vArr.push(Validators[v]);
      }
      loginFields[f.name] = new FormControl(f.value, vArr);
    }
    this.loginForm = new FormGroup(loginFields);
  }
  getFormErrors(controlName: string): string {
    return this.validateService.getErrors(controlName, this.loginForm, this.loginValidations);
  }

  isInvalid(controlName: string): boolean {
    return this.validateService.isControlInvalid(this.loginForm, controlName);
  }

  login() {
    if (this.loginForm.valid) {
      this.loginForm.disable();
      // make api call
      this.out.emit(this.loginForm.value);
      this.loginForm.enable();
    } else {
      this.validateService.markFieldsAsDirty(this.loginForm);
    }
  }

}
