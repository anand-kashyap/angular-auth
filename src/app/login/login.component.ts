import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormBuilder , Validators } from '@angular/forms';

import { ValidateService } from './../validate.service';
import { FormField, FieldTypes, Config, Link } from '../models/login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  @Input() fields: FormField[] = [
    new FormField('email', ['required', 'email']),
    new FormField('password', ['required'], 'password')
  ];
  @Input() config: Config = {name: 'Login', submitLabel: 'Login'};
  @Input() otherButton = {label: 'Register', outData: 'formGroup'};
  @Input() link: Link = {
    type: 'link', label: 'Forgot Password?', url: '/forgot'
  };
  @Input() error: string;
  @Output() btnClick = new EventEmitter<any>();
  @Output() out = new EventEmitter<any>();
  loginForm: FormGroup;
  fieldTypes = FieldTypes;

  constructor(private validateService: ValidateService, private fb: FormBuilder) { }

  ngOnInit() {
    console.log(this.fields);
    if (!this.config.submitLabel) {
      this.config.submitLabel = 'Submit';
    }
    this.convertToControls();
  }

  checkVal(val: Array<any> | string) {
    if (val instanceof Array) {
      return 'array';
    } else if (val === 'textbox') {
      return 'textbox';
    } else {
      return 'string';
    }
  }

  convertToControls() {
    const loginFields = {};
    for (const f of this.fields) {
      const vArr = [];
      for (const v of f.validations) {
        if (typeof v === 'object') {
          let vName = v[0];
          if (vName === 'minlength') {
            vName = 'minLength';
          }
          if (vName === 'maxlength') {
            vName = 'maxLength';
          }
          vArr.push(Validators[vName](v[1]));
        } else {
          vArr.push(Validators[v]);
        }
      }
      loginFields[f.name] = [f.value, vArr];
    }
    this.loginForm = this.fb.group(loginFields);
  }

  getFormErrors(controlName: string): string {
    return this.validateService.getErrors(controlName, this.loginForm, this.fields);
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

  otherClick() {
    if (this.otherButton.outData) {
      if (this.otherButton.outData === 'formGroup') {
        return this.btnClick.emit(this.loginForm);
      }
    }
    return this.btnClick.emit();
  }

}
