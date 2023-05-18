import React from 'react';
import { Router } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';

import history from './services/history';
import Login from './pages/Login';
import GlobalStyles from './styles/GlobalStyles';
import Header from './components/Header';

function App() {
  toast.success('Success message', {
    position: toast.POSITION.TOP_RIGHT
  })

  return (
    <Router history={history}>
      <Header />
      <Login />
      <GlobalStyles />
      <ToastContainer autoClose={3000}/>
    </Router>
  );
}

export default App;
