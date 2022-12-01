import React from 'react';
import PixKeys from '../PixKeys';
import { FormInput, FormLabel } from './TransferPixElements';

const TransferPix = () => {
  return (
    <>
      <PixKeys>
        <FormLabel htmlFor='for'>Valor </FormLabel>
        <FormInput type='valor' required />
      </PixKeys>
    </>
  );
};

export default TransferPix;
