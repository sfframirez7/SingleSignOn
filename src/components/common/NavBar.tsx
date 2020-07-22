import React from 'react'
import UserModal from './../pages/usuario/UserModal';
import {ThemeContext} from '../context/theme-context'
import BtnDarkMode from './BtnDarkMode';

const NavBar : React.FC<{}> = ()=> {

    return (
        <div>
            <ThemeContext.Consumer>
                {theme => (
                    <nav className="navbar navbar-light  my-card" style={{backgroundColor : theme.theme.navBarBackGround}} >
                    {/* <nav className="navbar navbar-light bg-light my-card" style={{backgroundColor : theme.theme.navBarBackGround}} > */}
                        <h2 className="navbar-brand  font-weight-bolder m-0 p-0" style={{color : theme.theme.textColor}}  >Portal BP</h2>
                        {/* <BtnDarkMode/> */}

                        <form className="form-inline ">
                            <UserModal/>
                        </form>
                    </nav>
                )}
              
            </ThemeContext.Consumer>
        </div>
    )
}


export default NavBar