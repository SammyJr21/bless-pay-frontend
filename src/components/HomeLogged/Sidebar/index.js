import React from 'react';
import { FaPeopleArrows, FaPlus, FaTimes, FaUserAlt } from 'react-icons/fa';
import { Container, Content } from './SidebarLoggedElements';
import Link from '@mui/material/Link';

import SidebarItem from './SideBarItem';

const Sidebar = ({ active }) => {
  const closeSidebar = () => {
    active(false);
  };

  return (
    <Container sidebar={active}>
      <FaTimes onClick={closeSidebar} />
      <Content>
        <Link href='/pixKeys'>
          <SidebarItem Icon={FaPlus} Text='New Pix Key' />
        </Link>
        <Link href='/transferPix'>
          <SidebarItem Icon={FaPeopleArrows} Text='Transfer Pix' />
        </Link>
        <Link href='/entries'>
          <SidebarItem Icon={FaUserAlt} Text='My Pix Keys' />
        </Link>
      </Content>
    </Container>
  );
};

export default Sidebar;
