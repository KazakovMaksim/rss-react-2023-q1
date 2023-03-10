import Footer from 'components/Footer';
import Header from 'components/Header';
import React from 'react';
import { Outlet } from 'react-router-dom';

class RootPage extends React.PureComponent {
  render() {
    return (
      <>
        <Header />
        <Outlet />
        <Footer />
      </>
    );
  }
}

export default RootPage;
