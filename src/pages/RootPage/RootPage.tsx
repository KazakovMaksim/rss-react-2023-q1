import Footer from 'components/Footer';
import Header from 'components/Header';
import Wrapper from 'components/Wrapper';
import React from 'react';
import { Outlet } from 'react-router-dom';

const RootPage = () => {
  return (
    <Wrapper>
      <Header />
      <Outlet />
      <Footer />
    </Wrapper>
  );
};

export default RootPage;
