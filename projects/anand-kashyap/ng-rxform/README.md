# Ng-rxform
Dynamic Reactive forms for Angular 6+. Easy to use, dev friendly and noob proof.

## Features
- Bootstrap 4 design form
- Predefined templates - Login and Register (**NEW**)
- Customisation while using a template (**NEW**)
- Choice of themes - light and dark
- All types of validations on field including regex along with validation messages

> **Note**: Users are encouraged to report any issues and features that they need. For reporting any issues/suggestions, [click here](https://forms.gle/da4UoREMAvqoSbZP8)

## Quick Usage
1. Make sure you have installed `ngx-bootstrap` in your project. If not, open terminal at root of your project and run `ng add ngx-bootstrap`. After this re-run `ng serve`.
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
| `template`      | Use predefined form templates| `Template` Type | Login Template   
| `theme`      | Allows switching to available themes| Theme.light, Theme.dark | Theme.light  
| `error`      | Display a custom error inside form| Any string type | ''  
| `config`      | Set name of submit button label and form title| `{name: string, submitLabel: string}: Config` | `{name: 'Login', submitLabel: 'Login'}`  
| `otherButton`  | Optional button beside submit button - name of label.  | Any string type| 'Register'   
| `link`      | Optional link at bottom right of form | `{type: string, label: string, url: string}: Link` | `{type: 'link', label: 'Forgot Password?', url: '/forgot'}`  


### Events

| Name          | Description| Return parameters     | Syntax           | 
| ------------- |:--------------- |:------------:| -----:|
| `out`      | Event generated on submitting form| Returns all form field values| `(out)="methodName($event)"` | email and password fields   
| `btnClick`      | Event generated on clicking other button| Returns complete formgroup| `btnClick="methodName($event)"`

## Examples
### fields
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

### template
*component.ts*
```typescript
import { Component } from '@angular/core';
import { Template } from '@anand-kashyap/ng-rxform';

@Component({
//
})
export class AppComponent {
  template = Template.Register;

  formSubmit(vals) {
    console.log('form submit called', vals);
  }
}
```
*component.html*
```html
<rx-form [template]="template" (out)="formSubmit($event)"></rx-form> 
```
### theme
*component.ts*
```typescript
import { Component } from '@angular/core';
import { Theme } from '@anand-kashyap/ng-rxform';

@Component({
//
})
export class AppComponent {
  theme = Theme.dark; // or Theme.light

  formSubmit(vals) {
    console.log('form submit called', vals);
  }
}
```
*component.html*
```html
<rx-form [theme]="theme" (out)="formSubmit($event)"></rx-form> <!--set to dark theme--> 
```

## Classes/API 
Coming soon

> #### Both Documentation and Package will receive regular updates with improvements/additions. If any issues/suggestions, [click here](https://forms.gle/da4UoREMAvqoSbZP8)
