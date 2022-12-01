import React from 'react';
import { EntryCard } from '../components/EntryCard';
import ScrollToTop from '../components/ScrollToTop';
import Signin from '../components/Signin';

const EntriesPage = () => {

  const entries = [
    {
      entry: '(83) 99697-0117',
      entryType: 'Phone'
    },
    {
      entry: 'janjan@teste.com',
      entryType: 'Email'
    },
    {
      entry: '703.166.994-46',
      entryType: 'CPF'
    }
  ]

  return (
    <div style={{
      backgroundColor: 'grey',
      display: 'flex',
      height: '100vh',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <ScrollToTop />
      <div style={{
        backgroundColor: 'green', 
        display: 'block',
        height: '80vh',
        width: '40vw'
      }}>
        <h2 style={{
          margin: '6px'
        }}>Your Entries</h2>
        
        <div style={{
          backgroundColor: 'royalblue',
          margin: '6px',
          marginTop: '2em',
          width: '98%'
        }}>
          
          { 
            entries.map((item) => {
              return <EntryCard entryData={item}/>
            })
          }

        </div>

      </div>
    </div>
  );
};

export default EntriesPage;
