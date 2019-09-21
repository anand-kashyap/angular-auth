import { Component } from '@angular/core';
import { FormField } from './models/login.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-auth';
  err = '';
  fields: FormField[] = [
    new FormField('email', ['required', 'email'], 'e-mail'),
    new FormField('password', ['required'], 'password', 'password')
  ];

  externaLogin(vals) {
    console.log('ex login called', vals);
    this.err = 'working err';
  }
}
