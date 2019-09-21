export class FormField {
  name: string;
  type?: string;
  label?: string;
  value?: string | number;
  validations?: string[];
  constructor(name: string, validations = [], label = name, type = 'text', value = '') {
    this.name = name;
    this.type = type;
    this.label = label;
    this.value = value;
    this.validations = validations;
  }
}

export class ValidMessages {
  public static m = {
    required: 'is required',
    invalid: 'is invalid',
  };
}
