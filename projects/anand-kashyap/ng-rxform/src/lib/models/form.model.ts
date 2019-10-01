export class FieldTypes {
  public static text = 'text';
  public static textbox = 'textbox';
  public static password = 'password';
  public static dropdown(options: string[]) { return options; }
}

export class FormField {
  name: string;
  type?: FieldTypes;
  label?: string;
  value?: string | number;
  validations?: Validator[];
  constructor(name: string, validations: Validator[] = [], label = name, type: FieldTypes = FieldTypes.text, value = '') {
    this.name = name;
    this.type = type;
    this.label = label;
    this.value = value;
    this.validations = validations;
  }
}

export class Validator {
  public static required = 'required';
  public static email = 'email';
  public static number = Validator.pattern('/[0-9]/');
  public static min(min: number) {
    return ['min', min];
  }
  public static max(max: number) {
    return ['max', max];
  }
  public static minlength(minlength: number) {
    return ['minlength', minlength];
  }
  public static maxlength(maxlength: number) {
    return ['maxlength', maxlength];
  }
  public static pattern(regEx: RegExp | string) {
    return ['pattern', regEx];
  }
}

export class ValidMessages {
  public static m = {
    min: 'must be atleast',
    max: 'must be greater than',
    minlength(n: number)  {return `must be atleast ${n} digits/characters`; },
    maxlength(n: number)  {return `must be greater than ${n} digits/characters`; },
    required: 'is required',
    invalid: 'is invalid',
    number: 'must contain digits only',
    pattern: 'does not match pattern'
  };
}

export class Config {
  name: string;
  submitLabel?: string;
}

export class Link {
  type: string;
  label: string;
  url: string;
}

export class Theme {
  public static light = 'light';
  public static dark = 'dark';
}

export class Template {
    fields: FormField[];
    config: Config;
    otherButton: string;
    link?: Link;
}

export class Templates {
  public static Login: Template = {
    fields: [
      new FormField('email', [Validator.required, Validator.email], 'Email'),
      new FormField('password', [Validator.required, Validator.minlength(8)], 'Password')
    ],
    config: {name: 'Login', submitLabel: 'Login'},
    otherButton: 'Register',
    link: {
      type: 'link', label: 'Forgot Password?', url: '/forgot'
    }
  };
  public static Register: Template = {
    fields: [
      new FormField('name', [Validator.required, Validator.minlength(5)], 'Name'),
      new FormField('email', [Validator.required, Validator.email], 'Email'),
      new FormField('password', [Validator.required, Validator.minlength(8)], 'Password'),
      new FormField('confirmPassword', [Validator.required, Validator.minlength(8)], 'Confirm Password'),
      new FormField('phone', [Validator.minlength(10), Validator.number], 'Phone Number'),
    ],
    config: {name: 'Register', submitLabel: 'Register'},
    otherButton: 'Already a User? Log in',
  };
}
