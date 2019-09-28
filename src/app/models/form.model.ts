export class FieldTypes {
  public static text = 'text';
  public static textbox = 'textbox';
  public static password = 'password';
  public static dropdown = (options: string[]) => options;
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
  public static number = Validator.pattern(/[0-9]/);
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
  public static pattern(regEx: RegExp) {
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
  submitLabel?: string = name;
}

export class Link {
  type: string;
  label: string;
  url: string;
}
