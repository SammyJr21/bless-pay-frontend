import React from 'react';
import { Container, FormContent, FormWrap, Icon } from './ScaffoldElements';

const Scaffold = (props) => {
  const { children } = props;

  return (
    <>
      <Container>
        <FormWrap>
          <Icon to='/'>BlessPay</Icon>
          <FormContent>{children}</FormContent>
        </FormWrap>
      </Container>
    </>
  );
};
export default Scaffold;
