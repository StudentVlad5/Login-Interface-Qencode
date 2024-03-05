import React from 'react';
import { PageContainer } from './Page.styled';
import { CreatePasswordForm } from 'components/CreatePasswordForm/CreatePasswordForm';

const HomePage = () => {
  window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });

  return (
    <PageContainer>
        <CreatePasswordForm/>
    </PageContainer>

  );
};

export default HomePage;
