import React from 'react';
import { PageContainer } from './Page.styled';

import {ReactComponent as Logo }  from 'images/svg/logo.svg'
import { ForgotPasswordForm } from 'components/AuthForms/ForgotPasswordForm/ForgotPasswordForm';

const ForgotPassword = () => {
  window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });

  return (
    <PageContainer>
      <Logo/>
      <ForgotPasswordForm/>
    </PageContainer>
  );
};

export default ForgotPassword;
