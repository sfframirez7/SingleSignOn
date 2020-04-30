import React from 'react';
import Login from '../../UserAuth/Login';

import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";

import Title from './../../common/Title';
import TipoAutenticacionEnum from '../../../enums/Tipoautenticacion';

function WelcomePage() {
    
    return (
        <div>
            <nav className="navbar navbar-light bg-light my-card">
                <span className="navbar-brand font-weight-bolder m-0 p-0">
                    Portal BP
                </span>
            </nav>

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