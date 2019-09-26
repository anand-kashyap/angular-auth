import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormField, Config, Link, FieldTypes } from './models/form.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgRxformService } from './ng-rxform.service';

@Component({
  selector: 'rx-form',
  templateUrl: './ng-rxform.component.html',
  styleUrls: ['./ng-rxform.component.scss']
})
export class NgRxformComponent implements OnInit {
  @Input() fields: FormField[] = [
    new FormField('email', ['required', 'email'], 'Email'),
    new FormField('password', ['required'], 'password', 'Password')
  ];
  @Input() config: Config = {name: 'Login', submitLabel: 'Login'};
  @Input() otherButton = {label: 'Register', outData: 'formGroup'};
  @Input() link: Link = {
    type: 'link', label: 'Forgot Password?', url: '/forgot'
  };
  @Input() error: string;
  @Output() btnClick = new EventEmitter<any>();
  @Output() out = new EventEmitter<any>();
  form: FormGroup;
  fieldTypes = FieldTypes;

  constructor(private validateService: NgRxformService, private fb: FormBuilder) { }

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
    const formFields = {};
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
      formFields[f.name] = [f.value, vArr];
    }
    this.form = this.fb.group(formFields);
  }

  getFormErrors(controlName: string): string {
    return this.validateService.getErrors(controlName, this.form, this.fields);
  }

  isInvalid(controlName: string): boolean {
    return this.validateService.isControlInvalid(this.form, controlName);
  }

  submitForm() {
    if (this.form.valid) {
      this.form.disable();
      // make api call
      this.out.emit(this.form.value);
      this.form.enable();
    } else {
      this.validateService.markFieldsAsDirty(this.form);
    }
  }

  otherClick() {
    if (this.otherButton.outData) {
      if (this.otherButton.outData === 'formGroup') {
        return this.btnClick.emit(this.form);
      }
    }
    return this.btnClick.emit();
  }
}
