import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NotFoundPage from './pages/RootPage/NotFoundPage';
import MainPage from './pages/RootPage/MainPage';
import RootPage from './pages/RootPage';

class App extends React.PureComponent {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RootPage />}>
            <Route index element={<MainPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
