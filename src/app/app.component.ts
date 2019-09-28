import { Component } from '@angular/core';
// import { FormField, Validator } from 'dynamic-login';
import { FormField, Validator, FieldTypes, Config } from './models/form.model';
// import { FormField, Validator, FieldTypes, Config } from '@anand-kashyap/ng-rxform';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-auth';
  err = '';
  fields: FormField[] = [
    new FormField('test', [Validator.required], 'Test Dropdown', FieldTypes.dropdown(['one', 'two', 'three'])),
    new FormField('email', [Validator.required, Validator.email, Validator.minlength(9)], 'E-mail'),
    new FormField('agreement', [Validator.required, Validator.number], 'Agreement Number'),
    new FormField('password', [Validator.required], 'Password', FieldTypes.password),
    new FormField('textarea', [Validator.required], 'Test textarea', FieldTypes.textbox)
  ];
  config: Config = {name: 'Login'};

  externaLogin(vals) {
    console.log('ex login called', vals);
    this.err = 'working err';
  }

  otherClick(formgroup) {
    console.log(formgroup);
  }
}
