import React, { useState } from 'react';
import { IMaskInput } from 'react-imask';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import transferService from '../../api/transfer.service';
import userService from '../../api/user.service';
import PixKeys from '../PixKeys';
import Scaffold from '../Scaffold';
import { Form, FormButton, FormH1 } from '../Scaffold/ScaffoldElements';
import { FormInput, FormLabel, FormSelect } from './TransferPixElements';

const TransferPix = () => {

  const [selectValue, setSelectValue] = useState(1);
  const [form, setForm] = useState({
    entry: '',
    ammount: '0'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };

  const list = [
    { id: 1, name: 'CPF / CNPJ', value: 'CPF_CNPJ' },
    { id: 2, name: 'E-Mail', value: 'EMAIL'},
    { id: 3, name: 'Phone', value: 'PHONE' },
    { id: 4, name: 'Random Key', value: 'EVP' },
  ];

  const getEntryType = () => {
    const entryType = list.find((entryType) => entryType.id == selectValue);
    return entryType.value;
  }

  const Alert = withReactContent(Swal);

  const showAlert = (title, body, icon, hasCancel, callbackFunction) => {
    Alert.fire({
      icon: icon,
      title: title,
      showCancelButton: hasCancel,
      cancelButtonText: 'No',
      confirmButtonText: hasCancel ? 'Yes' : 'OK',
      html: <p>{body}</p>
    }).then((result) => {

      if (result.isConfirmed) {
        callbackFunction()
      }

      console.log(result)
    })
  }

  const handlePay = () => {
    console.log('click')

    const accountInfo = userService.recoverAccountInfo();

    const obj = {
      ammount: form.ammount,
      payerBranch: accountInfo.accountBranch,
      payerAccount: accountInfo.accountNumber,
      receiverEntry: form.entry,
      receiverBranch: 1,
      receiverAccount: 1
    }

    transferService.sendPayment(obj)
      .then((response) => {
        showAlert('Bless sent successfully', undefined, 'success');
      }).catch((error) => {
        console.log(error);

        const errorObj = error.response?.data?.error;

        let userMessage;

        if(errorObj?.message.includes('NO_BALANCE')) {
          userMessage = "Insufficient funds, do you want to schedule this transaction?"
          showAlert('Oh no, an error occured :(', userMessage, 'error', true, () => handleSchedule(errorObj?.transactionId));
        } else {
          userMessage = errorObj?.message;
          showAlert('Oh no, an error occured :(', userMessage, 'error', true);
        }
      })
  };

  const handleSchedule = (transactionId) => [
    transferService.scheduleTransaction(transactionId)
    .then((response) => {
      showAlert('Bless scheduled successfully', undefined, 'success');
    }).catch((error) => {
      console.log(error);

      const errorMessage = error.response?.data?.error?.message

      showAlert('Oh no, an error occured :(', errorMessage, 'error', false);

    })
  ]

  return (
    <>
      <Scaffold>
        <Form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <FormH1>Who's gonna be blessed by a transfer?</FormH1>
          <FormSelect
            value={selectValue}
            onChange={(e) => {
              setSelectValue(Number(e.target.value))
              setForm({...form, entry: ''})
            }}
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
            name='entry'
            value={form.entry}
            as={IMaskInput}
            mask='000.000.000-00'
            placeholder='Insert your document (CPF/CNPJ)'
            hidden={selectValue !== 1}
            type='text'
            required={!(selectValue !== 1)}
          />
          <FormLabel hidden={selectValue !== 2} htmlFor='for'>
            E-mail
          </FormLabel>
          <FormInput
            name='entry'
            onChange={handleChange}
            placeholder='Insert your email'
            value={form.entry}
            hidden={selectValue !== 2}
            type='email'
            required={!(selectValue !== 2)}
          />

          <FormLabel hidden={selectValue !== 3} htmlFor='for'>
            Celular
          </FormLabel>
          <FormInput
            name='entry'
            onChange={handleChange}
            as={IMaskInput}
            mask='(00) 00000-0000'
            placeholder='Insert your phone number'
            value={form.entry}
            hidden={selectValue !== 3}
            type='text'
            required={!(selectValue !== 3)}
          />

          <FormLabel hidden={selectValue !== 4} htmlFor='for'>
                Chave aleatoria
          </FormLabel>
          <FormInput
            name='entry'
            onChange={handleChange}
            placeholder="Insert the EVP key"
            value={form.entry}
            hidden={selectValue !== 4}
            type='text'
            required={!(selectValue !== 4)}
          />

        <FormLabel htmlFor='for'>Ammount</FormLabel>
        <FormInput
          onChange={handleChange}
          name='ammount'
          value={form.ammount}
          required
        />

          <FormButton onClick={handlePay}>Pay</FormButton>
        </Form>
        
      </Scaffold>
      {/* <PixKeys titulo="Escolha Qual Chave Usar Para Pagar">

      </PixKeys> */}
    </>
  );
};

export default TransferPix;
