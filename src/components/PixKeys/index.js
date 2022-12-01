import React, { useState } from 'react';
import { IMaskInput } from 'react-imask';
import FormataUtils from '../../utils/formataUtil';
import Scaffold from '../Scaffold';
import {
  Container,
  Form,
  FormButton,
  FormContent,
  FormH1,
  FormInput,
  FormLabel,
  FormSelect,
  FormWrap,
  Icon,
} from './PixKeysElements';

const PixKeys = (props) => {
  const [selectValue, setSelectValue] = useState(1);
  const list = [
    { id: 1, name: 'CPF' },
    { id: 2, name: 'E-Mail' },
    { id: 3, name: 'Celular' },
    { id: 4, name: 'Chave Aleatoria' },
  ];
  const { children, titulo } = props;
  function teste(e) {
    console.log(e);
  }
  return (
    <>
      <Scaffold>
        <Form
          onSubmit={(e) => {
            e.preventDefault();
            console.log('foi!!!');
          }}
        >
          <FormH1>{titulo} </FormH1>
          <FormSelect
            value={selectValue}
            onChange={(e) => setSelectValue(e.target.value)}
          >
            {list.map((item) => (
              <option key={item.id} value={item.id}>{item.name}</option>
            ))}
          </FormSelect>
          <FormLabel hidden={selectValue != 2} htmlFor='for'>
            E-mail
          </FormLabel>
          <FormInput hidden={selectValue != 2} type='email' />
          <FormLabel hidden={selectValue != 1} htmlFor='for'>
            CPF
          </FormLabel>
          <FormInput required={!selectValue != 2}
            as={IMaskInput}
            mask='000.000.000-00'
            placeholder='Digite se CPF'
            hidden={selectValue != 1}
            type='cpf'
            
            onChange={(e) => {
              FormataUtils.formatarMaskCpf(e.target.value);
            }}
          />

          <FormLabel hidden={selectValue != 3} htmlFor='for'>
            Celular
          </FormLabel>
          <FormInput required={!selectValue != 2} hidden={selectValue != 3} type='celular' />

          <FormLabel hidden={selectValue != 4} htmlFor='for'>
            Chave aleatoria
          </FormLabel>
          <FormInput required={!selectValue != 2} hidden={selectValue != 4} type='chave aleatoria' />
          {children}
          <FormButton >Continue</FormButton>
        </Form>
      </Scaffold>
    </>
  );
};
export default PixKeys;
