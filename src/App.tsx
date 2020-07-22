import React, { useEffect, useState }  from 'react';
import './App.css';
import WelcomePage from './components/pages/welcome/WelcomePage';
import AppRoutes from './components/pages/AppRoutes';
import { IsLoggedIn } from './services/AuthService';

import {ThemeContext, theme} from './components/context/theme-context'

const App : React.FC<{}>  = () => {

  const [darkMode, setDarkmode] = useState(localStorage.getItem("darkMode") === "true" ? true : false)
  
  useEffect(()=> {
   
      document.body.style.backgroundColor = darkMode ?  theme.dark.backBround : theme.light.backBround
  }, [darkMode])

  
  function MyToggle()
  {
    setDarkmode(!darkMode)
    if(!darkMode)
      localStorage.setItem("darkMode", "true")
    else 
      localStorage.setItem("darkMode", "false")
  }


  

  if (IsLoggedIn() )
    return (
      <ThemeContext.Provider value={ {theme : (darkMode ?  theme.dark : theme.light) , toggle : MyToggle }}>
        <AppRoutes/>
      </ThemeContext.Provider>
  
    )
  

  else 
    return (
      <ThemeContext.Provider value={ {theme : (darkMode ?  theme.dark : theme.light) , toggle : MyToggle }}>
        <WelcomePage/>
      </ThemeContext.Provider>
    )
 
    
    
}


export default App ;
