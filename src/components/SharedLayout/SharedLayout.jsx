import React from 'react';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Main } from './SharedLayout.styled';

export const SharedLayout = () => {
  return (
      <Suspense fallback={null}>
        <Main>
          <Outlet />
        </Main>
      </Suspense>
  );
};
