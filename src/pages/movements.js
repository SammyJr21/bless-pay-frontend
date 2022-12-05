import React, { useEffect, useState } from 'react';
import Entries from '../components/Entries';
import ScrollToTop from '../components/ScrollToTop';
import Scaffold from '../components/Scaffold';
import {
  ContainerPage,
  Form,
  SubDivPage,
  TittlePage,
} from '../components/Entries/EntriesElements';
import { Text } from '../components/Scaffold/ScaffoldElements';
import entryService from '../api/entry.service';
import withReactContent from 'sweetalert2-react-content';
import Swal from 'sweetalert2';
import Movements from '../components/Movements';

const MovementsPage = () => {

  const mock = [
    {
        "id": null,
        "endToEnd": null,
        "ammount": 10,
        "payerEntry": null,
        "payerBranch": 11,
        "payerAccount": 1234,
        "receiverEntry": null,
        "receiverBranch": 1,
        "receiverAccount": 1,
        "transactionDate": null,
        "statusReason": null,
        "sensitized": null,
        "scheduled": null,
        "type": "PAYMENT"
    },
    {
        "id": null,
        "endToEnd": null,
        "ammount": 10,
        "payerEntry": null,
        "payerBranch": 11,
        "payerAccount": 1234,
        "receiverEntry": null,
        "receiverBranch": 1,
        "receiverAccount": 1,
        "transactionDate": null,
        "statusReason": null,
        "sensitized": null,
        "scheduled": null,
        "type": "RECEIVEMENT"
    },
  ];

  const Alert = withReactContent(Swal);

  const showAlert = (title, body, icon) => {
    return Alert.fire({
      icon: icon,
      title: title,
      html: <p>{body}</p>
    });
  }

  const [ entries, setEntries ] = useState([]);

  const getEntries = () => {
    entryService.listEntries().then((response) => {
      setEntries(response.data);
    })
  }

  const deleteEntry = (entry) => {
    console.log(entry);
    entryService.deleteEntry(entry).then((response) => {
      console.log('response', response)
      showAlert('Goodbye entry!', response.data, 'success');
    }).catch((error) => {
      showAlert('Oh no!', 'An error occurred.', 'error');
    })
  }

  useEffect(() => {
    getEntries();
  }, [])
  

  return (
    <>
      <Scaffold>
        <ScrollToTop />
        <Form onSubmit={(e) => {
          e.preventDefault();
        }}>
        <ContainerPage>
          <TittlePage>Your Account Movements</TittlePage>
          <SubDivPage style={{marginTop: '24px'}}>
            {mock.map((item) => {
              return <Movements entryData={item} onDelete={deleteEntry} key={item.id} />;
            })}

            { mock.length === 0 && <Text style={{padding: '24px 0px'}}>No entries found.</Text> }
          </SubDivPage>
        </ContainerPage></Form>
      </Scaffold>
    </>
  );
};

export default MovementsPage;
