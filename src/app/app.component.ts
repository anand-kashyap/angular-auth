import { Component } from '@angular/core';
// import { FormField, Validator } from 'dynamic-login';
// import { FormField, Validator, FieldTypes, Config } from './models/form.model';
import { FormField, Validator, FieldTypes, Config, Theme, Templates } from '@anand-kashyap/ng-rxform';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-auth';
  err = '';
  template = Templates.Register;
  theme = Theme.light;
  config: Config = {name: 'Login'};

  externaLogin(vals) {
    console.log('ex login called', vals);
    this.err = 'working err';
  }

  otherClick(formgroup) {
    console.log(formgroup);
  }
}
