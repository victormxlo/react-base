import React from 'react';

import { BrowserRouter } from 'react-router-dom'
import Login from './pages/Login';
import GlobalStyles from './styles/GlobalStyles';
import Header from './components/Header';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Login />
      <GlobalStyles />
    </BrowserRouter>
  );
}

export default App;
