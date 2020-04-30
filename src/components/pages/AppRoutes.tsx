import  React from 'react'
import Title from '../common/Title'

import NavBar from '../common/NavBar'
import Aplicaciones from './Aplicaciones/Aplicaciones'
import NoCodigoDeEmpleado from '../common/NoCodigoDeEmpleado'

function AppRoutes() {


    return (
        <div>

            <NavBar/>

            <div className="container">

                <div className="row pt-1 mt-1 ">
                    <div className="col text-center">
                        <Title title="Portal BP"/>
                    </div>
                </div>


                <div className="row pt-1 mt-1">
                    <div className="col-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2 ">

                        <NoCodigoDeEmpleado/>

                    </div>
                </div>


                <div >
                    <Aplicaciones/>
                </div>

            </div>

        </div>
    )

}

export default AppRoutes