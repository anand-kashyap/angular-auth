import { Component } from '@angular/core';
import { FormField, IFormField, Validators } from './models/login.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-auth';
  fields: IFormField[] = [
    {
      name: 'email',
      type: 'text',
      label: 'Email',
      value: '',
      validations: [Validators.required, Validators.email]
    },
    new FormField('password', [Validators.required], 'password')
  ];

  externaLogin(vals) {
    console.log('ex login called', vals);
  }
}
