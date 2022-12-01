import React, { useState } from 'react';
import { IMaskInput } from 'react-imask';
import FormataUtils from '../../utils/formataUtil';
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
} from './ScaffoldElements';

const Scaffold = (props) => {
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
      <Container>
        <FormWrap>
          <Icon to='/'>BlessPay</Icon>
          <FormContent>
            {children}
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};
export default Scaffold;
