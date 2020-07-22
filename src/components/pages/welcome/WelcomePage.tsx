import React from 'react';
import Login from '../../UserAuth/Login';

import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";

import Title from './../../common/Title';
import TipoAutenticacionEnum from '../../../enums/Tipoautenticacion';

import {ThemeContext} from '../../context/theme-context'

function WelcomePage() {
    
    return (
        <div>
            <ThemeContext.Consumer>
                {context => (
                    <nav className="navbar navbar-light  my-card " style={{backgroundColor : context.theme.navBarBackGround}}>
                        <span className="navbar-brand font-weight-bolder m-0 p-0" style={{color : context.theme.textColor}}> 
                            Portal BP
                        </span>
                    </nav>

            )}
                        
            </ThemeContext.Consumer>


            <div className="container">

                <div className="row pt-2 ">
                    <div className="col ">
                        <Title title="Inicio de sesisón"/>
                    </div>
                </div>

                
                <Router>
                    <div>
                        {/* <Tabs/> */}
                        {/* <TabsLogin/> */}
                        <Switch>
                            <Route exact path="/">
                               
                                <div className="row text-center mb-4 p-0">
                                    <Login TipoAutenticacion={TipoAutenticacionEnum.ActiveDirectory}/>
                                </div>

                            </Route>
                            <Route exact path="/CodigoEmpleado">
                                
                                <div className="row text-center mb-4 p-0">
                                    <Login TipoAutenticacion={TipoAutenticacionEnum.CodigoEmpleado}/>
                                </div>
                                
                            </Route>
                        </Switch>
                    </div>
                    </Router>


            </div>


        </div>
    );
    
}


export default WelcomePage