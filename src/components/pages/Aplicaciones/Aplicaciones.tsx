import React, {useState, useEffect, useRef} from 'react'
import Loading from '../../common/Loading';
import { GetAplicacionesService } from '../../../services/AplicacionService';
import AplicacionModel from './../../../models/AplicacionModel';

import {ThemeContext} from '../../context/theme-context'

import Aplicacion from './Aplicacion';

const Aplicaciones : React.FC = ()=> {

    const setFocus                                      = useRef<any>(null)
    const [loading, setLoading]                         = useState(false)
    const [apliacionReciente, setApliacioneReciente]    = useState<AplicacionModel>()
    const [apliaciones, setApliaciones]                 = useState<AplicacionModel[]>([])
    const [apliacionesLoaded, setApliacionesLoaded]     = useState<AplicacionModel[]>([])


    useEffect(()=> {

        GetAplicaciones()
        setFocus.current.focus();
    }, [] )


    function GetAplicaciones()
    {
        setLoading(true)
        GetAplicacionesService()
        .then((res) => {
            var _aplicaciones : AplicacionModel[] =  res.data
            setApliaciones(_aplicaciones)
            setApliacionesLoaded(_aplicaciones )
            setLoading(false)
            GetAplicacionReciente(_aplicaciones)
            

        }).catch((err) => {
            setLoading(false)
            console.log(err);
        });
    }

    function FilterAplicaciones(event : any)
    {
        var txtBuscar = event.target.value || ""

        if(!txtBuscar)
        {
            setApliaciones(apliacionesLoaded)
            return

        }

        setLoading(true)

        var data = apliacionesLoaded.filter(app=> {
           return (app.Aplicacion.toLowerCase().indexOf(txtBuscar.toLowerCase() ) !== -1
                || app.Descripcion.toLowerCase().indexOf(txtBuscar.toLowerCase() ) !== -1)
           
        })

        setApliaciones(data)
        setLoading(false)
    }

    function GetAplicacionReciente(_aplicaciones : AplicacionModel[])
    {
        var idAplicaionReciente =  parseInt(localStorage.getItem("IdAppReciente")  || "0")

        if(idAplicaionReciente === 0)
            return


        var data = _aplicaciones.filter(app=> {
            return app.Id === idAplicaionReciente
         })

         if(data && data.length > 0)
            setApliacioneReciente(data[0])
    }

    function RemoveRecentAplicacion()
    {
        localStorage.removeItem("IdAppReciente")  
        setApliacioneReciente(undefined)
    }
   
    
    return (

    <ThemeContext.Consumer>
        {context=> (
        <div>
            
                
            <div className="row">
             <div className="col-12 col-md-6 offset-md-3 col-lg-4 offset-lg-4 text-center">
                    <input 
                        className="form-control form-control-sm "
                        style={{backgroundColor : context.theme.myBackGround , color : context.theme.textColor}} 
                        type="text" 
                        placeholder="buscar..."
                        ref={setFocus}
                        onChange={(e)=> FilterAplicaciones(e)}/>
                </div>
            </div>

            <div className="row">
                <div className="col text-center">
                    <Loading Loading={loading}/>
                </div>
            </div>
            
                    
          

            <div className={"row  py-2 my-2 " + (apliacionReciente ? "" : "d-none") } >
                
                <div className="col-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2 ">
                    <div className="d-flex justify-content-between">
                        <h3  style={{color : context.theme.textColor}}>Reciente:</h3>
                        <button className="btn" onClick={RemoveRecentAplicacion} style={{color : context.theme.textColor }}>
                            <i className="fa fa-times" aria-hidden="true"></i>
                        </button>
                    </div>

                    <div className="list-group">
                        {apliacionReciente ? (
                            <Aplicacion  aplicacionModel={apliacionReciente!}/>
                        ) : null}

                       
                    </div>

                </div>
              
            </div>
            

            <div className="row pt-1 pb-2 my-2">
                
                <div className="col-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2 ">
                <h3 className="font-weight-bold" style={{color : context.theme.textColor}}>Aplicaciones:</h3>

                    <div className="list-group">

                        {apliaciones.map((aplicacion, index)=> {
                            return (
                                <div key={index}>
                                    <Aplicacion  aplicacionModel={aplicacion}/>
                                </div>
                            )
                        })}

                    </div>

                </div>
              
            </div>
            


            {apliaciones.length === 0 && !loading ? (
                <div className="row">
                    <div className="col text-center">
                        <i className="fa fa-exclamation-triangle fa-2x text-secondary" aria-hidden="true" id="icon"></i>
                        <br/>
                        <span className="font-weight-bold text-secondary">No se han encontrado datos para mostrar.</span>
                        <br/>
                    </div>
                </div>
            ) : (
                null
            )}
                
            </div>
        )}

    </ThemeContext.Consumer>
    )

}




export default Aplicaciones