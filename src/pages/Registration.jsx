import React from 'react';
import { PageContainer } from './Page.styled';
import {ReactComponent as Logo }  from 'images/svg/logo.svg'

const Registration = () => {
  window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });

  return (
    <PageContainer>
      <Logo/>
      <h3>Registration Form</h3>
    </PageContainer>
  );
};

export default Registration;
