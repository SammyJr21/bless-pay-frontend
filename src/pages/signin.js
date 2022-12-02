import React from 'react';
import { useLocation } from 'react-router-dom';
import ScrollToTop from '../components/ScrollToTop';
import Signin from '../components/Signin';

const SigninPage = () => {
  const location = useLocation();

  const message = location.state?.message;

  console.log(message, location);

  return (
    <>
      <ScrollToTop />
      <Signin message={message}/>
    </>
  );
};

export default SigninPage;
