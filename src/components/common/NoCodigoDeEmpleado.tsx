import React, {useState, useEffect} from 'react'
import { JwtPayload } from '../../config/config'



const NoCodigoDeEmpleado : React.FC<{}> = ()=> {

    const [codigo, setCodigo] = useState(0)


    useEffect(()=> {
        TieneCodigoEmpleado()
    }, [])

    function TieneCodigoEmpleado()
    {
        var payload = JwtPayload()

        if(!payload)
            return

        setCodigo(payload.Codigo)
    }

    if (codigo !== 0)
    {
        return (
            null
        )
    }


    return (
        <div>
              <div className="alert alert-warning alert-dismissible fade show" role="alert">
                    <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">×</span>
                    </button>
                    <strong>¡Atención!</strong>
                    <br/>
                    <span>
                        No hemos podido obtener tu código de empleado, el cual es necesitado por algunas aplicaciones.
                    </span>
                    <br/>
                    <span>
                        Favor ponte en contacto con el administrador del sistema.
                    </span>
                </div>
        </div>
    )
}


export default NoCodigoDeEmpleado