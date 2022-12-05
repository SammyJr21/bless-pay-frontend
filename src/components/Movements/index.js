import React from 'react';
import {
  Button,
  ButtonDiv,
  Container,
  EntryDiv,
  EntryTypeDiv,
} from './MovementsElements';
import { FaArrowDown, FaArrowUp, FaPeopleArrows, FaPlus, FaUserAlt } from 'react-icons/fa';
const Movements = (props) => {
  const { entryData, onDelete } = props;

  return (
    <>
      <Container>
        <EntryDiv>
          <h5 style={{ color: 'white' }}>{entryData.type === 'PAYMENT' ? <FaArrowUp color="red"/> : <FaArrowDown color="limegreen"/>}</h5>
          <p style={{ color: 'white' }}>{entryData.payerBranch + " | " + entryData.payerAccount}</p>
          <p style={{ color: 'white' }}>{'R$ ' + entryData.ammount}</p>
          
          
        </EntryDiv>
      </Container>
    </>
  );
};

export default Movements;
