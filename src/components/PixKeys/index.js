import React, { useState } from 'react';
import { IMaskInput } from 'react-imask';
import Scaffold from '../Scaffold';
import {
  Form,
  FormButton,
  FormH1,
  FormInput,
  FormLabel,
  FormSelect,
} from './PixKeysElements';

const PixKeys = (props) => {
  const [selectValue, setSelectValue] = useState(1);
  const [form, setForm] = useState({
    cpf: '',
    email: '',
    celular: '',
    chaveAleatoria: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };
  const list = [
    { id: 1, name: 'CPF' },
    { id: 2, name: 'E-Mail' },
    { id: 3, name: 'Celular' },
    { id: 4, name: 'Chave Aleatoria' },
  ];
  const { children, titulo } = props;
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
          <FormH1>{titulo}</FormH1>
          <FormSelect
            value={selectValue}
            onChange={(e) => setSelectValue(Number(e.target.value))}
          >
            {list.map((item) => (
              <option key={item.id} value={item.id}>
                {item.name}
              </option>
            ))}
          </FormSelect>
          <FormLabel hidden={selectValue !== 1} htmlFor='for'>
            CPF
          </FormLabel>
          <FormInput
            onChange={handleChange}
            name='cpf'
            value={form.cpf}
            as={IMaskInput}
            mask='000.000.000-00'
            placeholder='Digite se CPF'
            hidden={selectValue !== 1}
            type='cpf'
            required={!(selectValue !== 1)}
          />
          <FormLabel hidden={selectValue !== 2} htmlFor='for'>
            E-mail
          </FormLabel>
          <FormInput
            onChange={handleChange}
            value={form.email}
            hidden={selectValue !== 2}
            type='email'
            required={!(selectValue !== 2)}
          />

          <FormLabel hidden={selectValue !== 3} htmlFor='for'>
            Celular
          </FormLabel>
          <FormInput
            onChange={handleChange}
            value={form.celular}
            hidden={selectValue !== 3}
            type='celular'
            required={!(selectValue !== 3)}
          />

          <FormLabel hidden={selectValue !== 4} htmlFor='for'>
            Chave aleatoria
          </FormLabel>
          <FormInput
            onChange={handleChange}
            value={form.chaveAleatoria}
            hidden={selectValue !== 4}
            type='chave aleatoria'
            required={!(selectValue !== 4)}
          />
          {children}
          <FormButton>Continue</FormButton>
        </Form>
      </Scaffold>
    </>
  );
};
export default PixKeys;
