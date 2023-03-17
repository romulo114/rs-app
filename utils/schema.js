export const validationSchema = {
  signUpSchema: yup.object({
    username: yup
      .string('Enter your username')
      .email('Enter a valid username')
      .required('Email is required'),
    password: yup
      .string('Enter your password')
      .required('Password is required'),
  }),
};
