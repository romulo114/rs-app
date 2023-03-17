import Head from 'next/head';
import Link from 'next/link';
import { Form, Formik } from 'formik';

import { AuthLayout } from '@/components/common/AuthLayout';
import { Button } from '@/components/common/Button';
import { TextField } from '@/components/common/Fields';
import { Logo } from '@/components/common/Logo';
import { validationSchema } from '@/utils/schema';

export default function Signup() {
  return (
    <>
      <Head>
        <title>Sign Up</title>
      </Head>
      <AuthLayout>
        <div className='flex flex-col'>
          <Link href='/' aria-label='Home'>
            <Logo className='h-10 w-auto' />
          </Link>
          <div className='mt-20'>
            <h2 className='text-lg font-semibold text-gray-900'>
              Get started for free
            </h2>
            <p className='mt-2 text-sm text-gray-700'>
              Already registered?{' '}
              <Link
                href='/signin'
                className='font-medium text-blue-600 hover:underline'
              >
                Sign in
              </Link>{' '}
              to your account.
            </p>
          </div>
        </div>
        <Formik
          initialValues={{
            firstname: '',
            lastname: '',
            email: '',
            password: '',
          }}
          validationSchema={validationSchema.signUpSchema}
          onSubmit={() => console.log('submitted')}
        >
          {({ touched, errors, handleBlur, handleChange, values }) => {
            return (
              <Form className='mt-10 grid grid-cols-1 gap-y-8 gap-x-6 sm:grid-cols-2'>
                <TextField
                  label='First name'
                  id='firstname'
                  name='firstname'
                  type='text'
                  autoComplete='given-name'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  values={values}
                  error={touched.firstname && errors?.firstname}
                />
                <TextField
                  label='Last name'
                  id='lastname'
                  name='lastname'
                  type='text'
                  autoComplete='family-name'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  values={values}
                  error={touched.lastname && errors?.lastname}
                />
                <TextField
                  className='col-span-full'
                  label='Email address'
                  id='email'
                  name='email'
                  type='email'
                  autoComplete='email'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  values={values}
                  error={touched.email && errors?.email}
                />
                <TextField
                  className='col-span-full'
                  label='Password'
                  id='password'
                  name='password'
                  type='password'
                  autoComplete='new-password'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  values={values}
                  error={touched.password && errors?.password}
                />
                <div className='col-span-full'>
                  <Button
                    type='submit'
                    variant='solid'
                    color='blue'
                    className='w-full'
                  >
                    <span>
                      Sign up <span aria-hidden='true'>&rarr;</span>
                    </span>
                  </Button>
                </div>
              </Form>
            );
          }}
        </Formik>
      </AuthLayout>
    </>
  );
}
