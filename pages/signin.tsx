import Head from 'next/head';
import Link from 'next/link';

import { AuthLayout } from '@/components/common/AuthLayout';
import { Button } from '@/components/common/Button';
import { TextField } from '@/components/common/Fields';
import { Logo } from '@/components/common/Logo';
import { validationSchema } from '@/utils/schema';
import { Form, Formik } from 'formik';

export default function Signin() {
  return (
    <>
      <Head>
        <title>Sign In</title>
      </Head>
      <AuthLayout>
        <div className='flex flex-col'>
          <Link href='/' aria-label='Home'>
            <Logo className='h-10 w-auto' />
          </Link>
          <div className='mt-20'>
            <h2 className='text-lg font-semibold text-gray-900'>
              Sign in to your account
            </h2>
            <p className='mt-2 text-sm text-gray-700'>
              Don’t have an account?{' '}
              <Link
                href='/signup'
                className='font-medium text-blue-600 hover:underline'
              >
                Sign up
              </Link>{' '}
              for a free trial.
            </p>
          </div>
        </div>
        <Formik
          initialValues={{
            email: '',
            password: '',
          }}
          validationSchema={validationSchema.signInSchema}
          onSubmit={() => console.log('submitted')}
        >
          {({ touched, errors, handleBlur, handleChange, values }) => {
            return (
              <Form className='mt-10 grid grid-cols-1 gap-y-8'>
                <TextField
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
                  label='Password'
                  id='password'
                  name='password'
                  type='password'
                  autoComplete='current-password'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  values={values}
                  error={touched.password && errors?.password}
                />
                <div>
                  <Button
                    type='submit'
                    variant='solid'
                    color='blue'
                    className='w-full'
                  >
                    <span>
                      Sign in <span aria-hidden='true'>&rarr;</span>
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
