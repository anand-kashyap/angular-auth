# NgRxform
Dynamic Reactive forms for Angular 6+ - easy to use, dev friendly and noob proof.

## Features
- Bootstrap 4 design form
- Predefined templates - (Login template for now, more will be added in future)
- Choice of themes - light and dark
- All types of validations on field including regex along with validation messages

> **Note**: Users are encouraged to report any issues and features that they need.

## Quick Usage
1. Make sure you have installed `ngx-bootstrap` in your project.
2. Install this package - npm i `@anand-kashyap/ng-rxform`.
3. Go to app.module.ts and add this code
```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//
import { NgRxformModule } from '@anand-kashyap/ng-rxform';

@NgModule({
  imports: [
    BrowserModule,
    NgRxformModule
  ],
  //
})
export class AppModule { }
```
4. Then use the package in any of your component as follows -
*component.html* 
```html
<rx-form  [config]="config" (out)="formSubmit($event)"></rx-form>
```
*component.ts*
```typescript
import { Component } from '@angular/core';
import { Config } from '@anand-kashyap/ng-rxform';

@Component({
//
})
export class AppComponent {
  config: Config = {name: 'Login'}; // title of form

  formSubmit(vals) {
    console.log('form submit called', vals);
  }
}

```
5. It will render a basic login form. If you need to customise look at `Options` section below.

## Options
### Attributes

| Name          | Description     | Values           | Default
| ------------- |:--------------- |:------------:| -----:|
| `fields`      | Add custom fields in form| `[new FormField('fieldName')]` | email and password fields   
| `theme`      | Allows switching to available themes| 'light', 'dark' | 'light'  
| `error`      | Dsiplay a custom error inside form| Any string type | ''  
| `config`      | Set name of submit button label and form title| `{name: 'FormTitle', submitLabel: 'ButtonLabel'}: Config` | `{name: 'Login', submitLabel: 'Login'}`  
| `otherButton`      | To be Added Soon| NA | NA  
| `link`      | To be Added Soon| NA | NA  

### Examples
#### fields
*component.ts*
```typescript
import { FormField, Validator, FieldTypes } from '@anand-kashyap/ng-rxform';

export class AppComponent {

fields: FormField[] = [
    new FormField('email', [Validator.email, Validator.minlength(9)], 'E-mail'),
    new FormField('agreement', [Validator.required, Validator.number], 'Agreement Number'),
  ];

}
  formSubmit(values) {
    console.log(values);  
  }
```
*component.html*
```html
<rx-form [fields]="fields" (out)="formSubmit($event)"></rx-form>
```

#### theme
*component.html*
```html
<rx-form [theme]="'dark'"></rx-form> <!--set to dark theme--> 
```

> ### Both Documentation and Package will receive regular updates with improvements/additions.
