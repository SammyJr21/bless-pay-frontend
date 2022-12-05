import React from 'react';
import Icon1 from '../../images/svg-4.svg';
import Icon2 from '../../images/svg-5.svg';
import Icon3 from '../../images/svg-6.svg';
import {
  ServicesContainer,
  ServicesCard,
  ServicesH1,
  ServicesH2,
  ServicesIcon,
  ServicesP,
  ServicesWrapper,
} from './ServicesElements';

const Services = ({ lightText }) => {
  return (
    <ServicesContainer id='services'>
      <ServicesH1 lightText='true'> Our Services </ServicesH1>
      <ServicesWrapper
        smooth={true}
        duration={500}
        spy={true}
        exact='true'
        offset={-80}
      >
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2 lightText='true'>Our Goal is people</ServicesH2>
          <ServicesP lightText='true'>
            Let's help the world to become a better place, be part of the change
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2 lightText='true'>Fast Transactions</ServicesH2>
          <ServicesP lightText='true'>
            The moment you click send, the money is on the other end
          </ServicesP>
        </ServicesCard>
        <ServicesCard lightText='true'>
          <ServicesIcon src={Icon3} />
          <ServicesH2 lightText='true'>Be part of a Community</ServicesH2>
          <ServicesP lightText='true'>
            After a 3 years account, you recieve a badge customized only for you{' '}
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
