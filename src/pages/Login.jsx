import React from 'react';
import { PageContainer } from './Page.styled';
import { LoginForm } from 'components/AuthForms/LoginForm/LoginForm';
import {ReactComponent as Logo }  from 'images/svg/logo.svg'

const Login = () => {
  window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });

  return (
    <PageContainer>
      <Logo/>
      <LoginForm/>
    </PageContainer>
  );
};

export default Login;
