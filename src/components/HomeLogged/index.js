import React from 'react';
// import { Container, ContainerSvg } from './HomeLoggedElements';
import { FaPeopleArrows, FaPlus, FaUserAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import Scaffold from '../Scaffold';
import {
  ServicesCard,
  ServicesP,
  ServicesWrapper,
} from '../Services/ServicesElements';
import { Form } from './HomeLoggedElements';

const HomeLogged = () => {
  const navigate = useNavigate();

  return (
    <>
      <Scaffold>
        <Form>
          <ServicesWrapper
            smooth={true}
            duration={500}
            spy={true}
            exact='true'
            offset={-80}
          >
            <ServicesCard onClick={() => navigate('/pixKeys')}>
              <FaPlus />
              <ServicesP>Create Key</ServicesP>
            </ServicesCard>
            <ServicesCard onClick={() => navigate('/transferPix')}>
              <FaPeopleArrows />
              <ServicesP>Transfer</ServicesP>
            </ServicesCard>
            <ServicesCard onClick={() => navigate('/entries')}>
              <FaUserAlt />
              <ServicesP>My Keys</ServicesP>
            </ServicesCard>
          </ServicesWrapper>
        </Form>
      </Scaffold>
    </>
  );
};

export default HomeLogged;
