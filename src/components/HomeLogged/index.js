import React, { useState } from 'react';
import { Container, ContainerSvg } from './HomeLoggedElements';
import { FaBars } from 'react-icons/fa';
import Sidebar from './Sidebar/index';

const HomeLogged = () => {
  const [sidebar, setSidebar] = useState(true);

  const showSiderbar = () => setSidebar(!sidebar);
  return (
    <>
      <Container>
        <ContainerSvg>
          <FaBars onClick={showSiderbar} />
          {sidebar && <Sidebar active={setSidebar} />}
        </ContainerSvg>
        <div>
          <h5 style={{ fontSize: 'large' }}>BlessPay</h5>
        </div>
      </Container>
    </>
  );
};

export default HomeLogged;
