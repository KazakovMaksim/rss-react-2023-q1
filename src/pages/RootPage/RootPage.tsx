import React from 'react';
import { Outlet } from 'react-router-dom';

class RootPage extends React.PureComponent {
  render() {
    return <Outlet />;
  }
}

export default RootPage;
