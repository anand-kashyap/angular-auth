import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormControl, FormBuilder , Validators } from '@angular/forms';

import { ValidateService } from './../validate.service';
import { FormField } from '../models/login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  @Input() fields: FormField[] = [
    new FormField('email', [Validators.required, Validators.email]),
    new FormField('password', [Validators.required], 'password')
  ];
  @Input() error: string;
  @Output() out = new EventEmitter<any>();
  loginForm: FormGroup;

  constructor(private validateService: ValidateService, private fb: FormBuilder) { }

  ngOnInit() {
    console.log(this.fields);
    this.convertToControls();
  }

  convertToControls() {
    const loginFields = {};
    for (const f of this.fields) {
      const vArr = [];
      for (const v of f.validations) {
        vArr.push(Validators[v]);
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

}
