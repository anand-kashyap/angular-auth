export interface IFormField {
  name: string;
  type?: string;
  label?: string;
  value?: string | number;
  validations?: string[];
}

export class Validators {
  public static required = 'required';
  public static email = 'email';
}

export class FormField implements IFormField {
  name: string;
  type?: string;
  label?: string;
  value?: string | number;
  validations?: string[];
  constructor(name: string, validations = [], type = 'text', label = name, value = '') {
    this.name = name;
    this.type = type;
    this.label = label;
    this.value = value;
    this.validations = validations;
  }
}
