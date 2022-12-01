import React, { useState } from 'react';
import { IMaskInput } from 'react-imask';
import Scaffold from '../Scaffold';
import {
  Form,
  FormButton,
  FormH1,
  FormInput,
  FormLabel,
} from './SignupElements';

const Signup = () => {
  const [form, setForm] = useState({
    cpf: '',
    nome: '',
    senha: '',
    senhaVerificada: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };

  const realizarLogin = () => {
    console.log('Form:', form);
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
          <FormH1>Sign up you account</FormH1>
          <FormLabel htmlFor='for'>CPF</FormLabel>
          <FormInput
            onChange={handleChange}
            name='cpf'
            value={form.cpf}
            as={IMaskInput}
            mask='000.000.000-00'
            placeholder='Digite seu CPF'
            type='cpf'
          />
          <FormLabel htmlFor='for'>Full Name</FormLabel>
          <FormInput
            name='nome'
            type='text'
            onChange={handleChange}
            value={form.nome}
          />

          <FormLabel htmlFor='for'>Password</FormLabel>
          <FormInput
            name='senha'
            onChange={handleChange}
            value={form.senha}
            type='password'
          />

          <FormLabel htmlFor='for'>Password Confirmation</FormLabel>
          <FormInput
            name='senhaVerificada'
            onChange={handleChange}
            value={form.senhaVerificada}
            type='password'
          />
          <FormButton>Continue</FormButton>
        </Form>
      </Scaffold>
    </>
  );
};
export default Signup;
