import React from 'react'

import LoginActiveDirectory from './LoginActiveDirectory';
import LoginCodigoEmpleado from './LoginCodigoEmpleado';
import TipoAutenticacionEnum from '../../enums/Tipoautenticacion';

interface IProps  {
    TipoAutenticacion : number 
}


const Login : React.FC <IProps> = (props) => {

 
    if(props.TipoAutenticacion === TipoAutenticacionEnum.ActiveDirectory)

        return (
            <LoginActiveDirectory/>
        )
        
    else if (props.TipoAutenticacion === TipoAutenticacionEnum.CodigoEmpleado)

        return (
            <LoginCodigoEmpleado/>
                
        )

    else 
        return (
                <h2>
                    Not found
                </h2>
        )
}




export default Login