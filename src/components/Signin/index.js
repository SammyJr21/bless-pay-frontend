import Link from '@mui/material/Link';
import React, { useEffect, useState } from 'react';
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
  Text,
  alarmDiv,
} from './SigninElements';

const Signin = (props) => {
  const { message } = props;

  const navigate = useNavigate();

  const [form, setForm] = useState({
    cpf: '',
    password: '',
  });

  const Alert = withReactContent(Swal);

  const showAlert = (title, body, icon) => {
    return Alert.fire({
      icon: icon,
      title: title,
      html: <p>{body}</p>,
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };

  useEffect(() => {
    console.log(localStorage.getItem('account_info'));
  });

  const realizarLogin = () => {
    console.log('Form:', form);

    userService
      .login(form)
      .then((response) => {
        console.log('response login: ', response);
        localStorage.setItem('account_info', JSON.stringify(response.data));

        navigate('/homeLogged');
      })
      .catch((error) => {
        const errorMessage = error.response?.data?.message;

        showAlert('Oh no!', errorMessage, 'error');
        console.log('error: ', error);
      });
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
          {/* Sammy, transform into a styled component*/}
          {message && <alarmDiv>{message}</alarmDiv>}

          <FormH1>Sign in to your account</FormH1>
          <FormLabel htmlFor='for'>CPF</FormLabel>
          <FormInput
            name='cpf'
            value={form.cpf}
            onChange={handleChange}
            as={IMaskInput}
            mask='000.000.000-00'
            placeholder='Input your CPF'
            type='cpf'
            required
          />
          <FormLabel htmlFor='for'>Password</FormLabel>
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
