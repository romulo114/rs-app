import * as yup from 'yup';

export const validationSchema = {
  signUpSchema: yup.object({
    firstname: yup
      .string('Enter your first name')
      .required('First name is required'),
    lastname: yup
      .string('Enter your first name')
      .required('Last name is required'),
    email: yup
      .string('Enter your username')
      .email('Enter a valid Email')
      .required('Email is required'),
    password: yup
      .string('Enter your password')
      .min(10, 'Password length must be longer than 10 letters')
      .required('Password is required'),
  }),
  signInSchema: yup.object({
    email: yup
      .string('Enter your username')
      .email('Enter a valid Email')
      .required('Email is required'),
    password: yup
      .string('Enter your password')
      .required('Password is required'),
  }),
};
