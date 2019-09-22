import { Component } from '@angular/core';
import { FormField, Validator } from './models/login.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-auth';
  err = '';
  fields: FormField[] = [
    new FormField('email', [Validator.required, Validator.email], 'E-mail'),
    new FormField('agreement', [Validator.required, Validator.pattern(/[0-9]/)], 'Agreement Number'),
    new FormField('password', [Validator.required], 'Password', 'password')
  ];

  externaLogin(vals) {
    console.log('ex login called', vals);
    this.err = 'working err';
  }
}
