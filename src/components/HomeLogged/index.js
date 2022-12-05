import React, { useState } from 'react';
// import { Container, ContainerSvg } from './HomeLoggedElements';
import { FaBars, FaPeopleArrows, FaPlus, FaUserAlt } from 'react-icons/fa';
import Sidebar from './Sidebar/index';
import {
  Form
} from './HomeLoggedElements';
import {
  ServicesContainer,
  ServicesCard,
  ServicesH1,
  ServicesH2,
  ServicesIcon,
  ServicesP,
  ServicesWrapper
} from '../Services/ServicesElements';
import Scaffold from '../Scaffold';
import { useNavigate } from 'react-router-dom';

const HomeLogged = () => {
  const [sidebar, setSidebar] = useState(true);

  const navigate = useNavigate();

  const showSiderbar = () => setSidebar(!sidebar);
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
            {/* <ServicesIconIcon src={Icon1} /> */}
            <FaPlus />
            <ServicesP>Create Key</ServicesP>
        </ServicesCard>
        <ServicesCard onClick={() => navigate('/transferPix')}>
        <FaPeopleArrows />
            {/* <ServicesIconIcon src={Icon1} /> */}
            <ServicesP>Transfer</ServicesP>
        </ServicesCard>
        <ServicesCard onClick={() => navigate('/entries')}>
          <FaUserAlt />
            {/* <ServicesIconIcon src={Icon1} /> */}
            <ServicesP>My Keys</ServicesP>
        </ServicesCard>
        </ServicesWrapper>
        </Form>

      </Scaffold>
      {/* <Container>
        <ContainerSvg>
          <FaBars onClick={showSiderbar} />
          {sidebar && <Sidebar active={setSidebar} />}
        </ContainerSvg>
        <div>
          <h5 style={{ fontSize: 'large' }}>BlessPay</h5>
        </div>
      </Container> */}
    </>
  );
};

export default HomeLogged;
