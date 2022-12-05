import React from 'react';
import {
  Button,
  ButtonDiv,
  Container,
  EntryDiv,
  EntryTypeDiv,
} from './EntriesElements';
const Entries = (props) => {
  const { entryData, onDelete } = props;

  return (
    <>
      <Container>
        <EntryDiv>
          <h5 style={{ color: 'white' }}>{entryData.entryType}</h5>
          <p style={{ color: 'white' }}>{entryData.entry}</p>
          <Button onClick={() => onDelete(entryData.entry)}>Remove</Button>
        </EntryDiv>
      </Container>
    </>
  );
};

export default Entries;
