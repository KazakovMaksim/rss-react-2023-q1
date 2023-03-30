import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NotFoundPage from './pages/RootPage/NotFoundPage';
import MainPage from './pages/RootPage/MainPage';
import RootPage from './pages/RootPage';
import AboutUsPage from './pages/RootPage/AboutUsPage';
import FormPage from './pages/RootPage/FormPage';

class App extends React.PureComponent {
  render() {
    return (
      // <BrowserRouter basename="/rss-react-2023-q1">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RootPage />}>
            <Route index element={<MainPage />} />
            <Route path="about" element={<AboutUsPage />} />
            <Route path="form" element={<FormPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
