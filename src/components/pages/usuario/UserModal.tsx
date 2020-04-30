import React, {useState, useEffect} from 'react'
import { LogOut } from '../../../services/AuthService'
import { JwtPayload } from '../../../config/config'


const UserModal : React.FC<{}> = ()=> {

    const [usuario, setUsuario] =  useState("")
    const [codigo, setcodigo] =  useState(0)

    useEffect(()=> {
        var payload = JwtPayload()
        
        if(!payload)
            return 
            
        setUsuario(payload.unique_name)
        setcodigo(payload.Codigo)

    }, [])

    

    return (

        <div>
           
            <button type="button" className="btn btn-link mx-3 p-0" data-toggle="modal" data-target="#exampleModal3">
                <i className="fa fa-user-circle-o fa-2x" aria-hidden="true"></i>
            </button>


            <div className="modal fade" id="exampleModal3" tabIndex={-1} role="dialog" aria-labelledby="exampleModal3Label" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModal3Label">Perfil</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <strong>{codigo}</strong> -
                        <span className="p-2">
                            {usuario}
                        </span>
                    
                    </div>
                    <div className="modal-footer">
                        
                        <button type="button" className="btn btn-secondary mx-2" data-dismiss="modal">Cancelar</button>
                        <button type="button" className="btn btn-danger m-0 p-1 px-2" onClick={LogOut}>
                            <i className="fa fa-sign-out " aria-hidden="true"></i>
                            Cerrar Sesión
                        </button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserModal