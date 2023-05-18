import React from 'react';

import { Router } from 'react-router-dom'
import history from './services/history';
import Login from './pages/Login';
import GlobalStyles from './styles/GlobalStyles';
import Header from './components/Header';

function App() {
  return (
    <Router history={history}>
      <Header />
      <Login />
      <GlobalStyles />
    </Router>
  );
}

export default App;
