import * as yup from 'yup';

const yupSchema = yup.object({
  username: yup.string().required('Please enter your name.'),

  email: yup.string().required('Please enter your email.').email('Please enter a valid email.'),

  password: yup
    .string()
    .required('Please enter your password.')
    .min(8, 'The password must be at least 8 characters.'),

  passwordConfirmation: yup
    .string()
    .required('Please confirm your password.')
    .oneOf([yup.ref('password')], 'The password confirmation does not match.'),
});

export default yupSchema;
