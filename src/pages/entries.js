import React from 'react';
import Entries from '../components/Entries';
import ScrollToTop from '../components/ScrollToTop';
import Scaffold from '../components/Scaffold';
import {
  ContainerPage,
  SubDivPage,
  TittlePage,
} from '../components/Entries/EntriesElements';

const EntriesPage = () => {
  const entries = [
    {
      entry: '(83) 99697-0117',
      entryType: 'Phone',
    },
    {
      entry: 'janjan@teste.com',
      entryType: 'Email',
    },
    {
      entry: '703.166.994-46',
      entryType: 'CPF',
    },
  ];

  return (
    <>
      <Scaffold>
        <ScrollToTop />

        <ContainerPage>
          <TittlePage>Your Entries</TittlePage>
          <SubDivPage>
            {entries.map((item) => {
              return <Entries entryData={item} />;
            })}
          </SubDivPage>
        </ContainerPage>
      </Scaffold>
    </>
  );
};

export default EntriesPage;
