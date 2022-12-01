import React, { useState } from 'react';
import Link from '@mui/material/Link';
import {
  Container,
  Form,
  FormButton,
  FormContent,
  FormH1,
  FormInput,
  FormLabel,
  FormWrap,
  Icon,
  Text,
} from './SigninElements';
import { IMaskInput } from 'react-imask';

const Signin = () => {

  const [ form, setForm ] = useState({
    cpf: '',
    password: ''
  });

  const handleChange = (e) => {

    const { name, value } = e.target;

    setForm({...form, [name]: value})

  }

  const realizarLogin = () => {
    console.log('Form:', form);
  }

  return (
    <>
      <Container>
        <FormWrap>
          <Icon to='/'>BlessPay</Icon>
          <FormContent>
            <Form onSubmit={(e) => {
              e.preventDefault();
              realizarLogin();
            }}>
              <FormH1>Sign in to your account</FormH1>
              <FormLabel htmlFor='for'>CPF</FormLabel>
              <FormInput
                name="cpf"
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
                name="password"
                type='password' 
                required 
                value={form.password}
                onChange={handleChange}
              />
              <FormButton>Continue</FormButton>
              <Text>
                <Link href='/'>Forgot password</Link>
              </Text>
              <Text>
                <Link href='/Signup'>Sign Up</Link>
              </Text>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default Signin;
