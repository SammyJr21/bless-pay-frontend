import Link from '@mui/material/Link';
import React, { useEffect, useState } from 'react';
import { IMaskInput } from 'react-imask';
import Scaffold from '../Scaffold';
import {
  Form,
  FormButton,
  FormH1,
  FormInput,
  FormLabel,
  Text,
} from './SigninElements';

const Signin = () => {
  const [form, setForm] = useState({
    cpf: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };

  useEffect(() => {
    console.log(localStorage.getItem('account_info'));
  });

  const realizarLogin = () => {
    console.log('Form:', form);
    localStorage.setItem(
      'account_info',
      JSON.stringify({
        cpf: '7031',
        ag: '16',
        cta: '123',
        token: '123asdew',
      })
    );
  };

  return (
    <>
      <Scaffold>
        <Form
          onSubmit={(e) => {
            e.preventDefault();
            realizarLogin();
          }}
        >
          <FormH1>Sign in to your account</FormH1>
          <FormLabel htmlFor='for'>CPF</FormLabel>
          <FormInput
            name='cpf'
            value={form.cpf}
            onChange={handleChange}
            as={IMaskInput}
            mask='000.000.000-00'
            placeholder='Digite se CPF'
            type='cpf'
            required
          />
          <FormLabel htmlFor='for'>password</FormLabel>
          <FormInput
            name='password'
            type='password'
            onChange={handleChange}
            value={form.password}
            required
          />
          <FormButton>Continue</FormButton>
          <Text>
            <Link href='/'>Forgot password</Link>
          </Text>
          <Text>
            <Link href='/Signup'>Sign Up</Link>
          </Text>
        </Form>
      </Scaffold>
    </>
  );
};

export default Signin;
