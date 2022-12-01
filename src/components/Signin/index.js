import React from 'react';
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
  return (
    <>
      <Container>
        <FormWrap>
          <Icon to='/'>BlessPay</Icon>
          <FormContent>
            <Form action='#'>
              <FormH1>Sign in to your account</FormH1>
              <FormLabel htmlFor='for'>CPF</FormLabel>
              <FormInput
                as={IMaskInput}
                mask='000.000.000-00'
                placeholder='Digite se CPF'
                type='cpf'
                required
              />
              <FormLabel htmlFor='for'>password</FormLabel>
              <FormInput type='password' required />
              <FormButton type='submit'>Continue</FormButton>
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
