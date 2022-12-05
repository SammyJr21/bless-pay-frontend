import React, { useState } from 'react';
import { IMaskInput } from 'react-imask';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import userService from '../../api/user.service';
import Scaffold from '../Scaffold';
import {
  Form,
  FormButton,
  FormH1,
  FormInput,
  FormLabel,
} from './SignupElements';

const Signup = () => {

  const navigate = useNavigate();

  const Alert = withReactContent(Swal);

  const showAlert = (title, body, icon) => {
    return Alert.fire({
      icon: icon,
      title: title,
      html: <p>{body}</p>
    });
  }

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
    if(form.senha !== form.senhaVerificada) {
      showAlert('Something is wrong...', 'Entered password doesn\'t match to the verification password!', 'error');
      return;
    }

    const obj = {
      cpfCnpj: form.cpf.replace(/\D/g,''),
      fullName: form.nome,
      password: form.senha
    }

    userService.signUp(obj).then((response) => {
      showAlert('God bless you!', 'Your account has been created.', 'success').then((result) => {
        if(result.isConfirmed) {
          navigate('/signin');
        }
      });
    }).catch((error) => {
      const errorMessage = error.response?.data;
      showAlert('Oh no!', errorMessage, 'error');
    })

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
