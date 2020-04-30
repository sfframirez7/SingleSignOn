import React from 'react';
import './App.css';
import WelcomePage from './components/pages/welcome/WelcomePage';
import AppRoutes from './components/pages/AppRoutes';
import { IsLoggedIn } from './services/AuthService';

function App() {
  
  if (IsLoggedIn() )
  {
    return (
      <AppRoutes/>
    )
  }

  else {
    return (
        <WelcomePage/>
    )
  }
}


export default App;
