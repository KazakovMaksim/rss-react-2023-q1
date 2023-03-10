import Footer from 'components/Footer';
import Header from 'components/Header';
import Wrapper from 'components/Wrapper';
import React from 'react';
import { Outlet } from 'react-router-dom';

class RootPage extends React.PureComponent {
  render() {
    return (
      <Wrapper>
        <Header />
        <Outlet />
        <Footer />
      </Wrapper>
    );
  }
}

export default RootPage;
