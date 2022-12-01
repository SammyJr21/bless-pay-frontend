import React, { useState } from 'react';
import PixKeys from '../PixKeys';
import { FormInput, FormLabel } from './TransferPixElements';

const TransferPix = () => {
  const [form, setForm] = useState({
    valor: '',
  });
  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };

  return (
    <>
      <PixKeys titulo="Escolha Qual Chave Usar Para Pagar">
        <FormLabel htmlFor='for'>Valor </FormLabel>
        <FormInput
          onChange={handleChange}
          name='valor'
          value={form.valor}
          type='number'
          required
        />
      </PixKeys>
    </>
  );
};

export default TransferPix;
