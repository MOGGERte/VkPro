export const validationErrors = {
  string: 'Must be a string',
  required: 'Required',
  email: 'Incorrect email format',
  minMaxLength: ({ min, max }) =>
    `The password must be between ${min} and ${max} characters long`,
  weakPassword: 'Weak password'
};
