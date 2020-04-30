import React, {useState, useEffect, useRef} from 'react'
import Loading from '../../common/Loading';
import { GetAplicacionesService } from '../../../services/AplicacionService';
import AplicacionModel from './../../../models/AplicacionModel';

import Aplicacion from './Aplicacion';

const Aplicaciones : React.FC = ()=> {

    const setFocus                                  = useRef<any>(null)
    const [loading, setLoading]                     = useState(false)
    const [apliaciones, setApliaciones]             = useState<AplicacionModel[]>([])
    const [Destacadas, setDestacadas]               = useState<AplicacionModel[]>([])
    const [apliacionesLoaded, setApliacionesLoaded] = useState<AplicacionModel[]>([])


    useEffect(()=> {

        GetAplicaciones()
        setFocus.current.focus();
    }, [] )


    function GetAplicaciones()
    {
        setLoading(true)
        GetAplicacionesService()
        .then((res) => {
            var aplicaciones : AplicacionModel[] =  res.data
            setApliaciones(aplicaciones)
            setApliacionesLoaded(aplicaciones )
            setLoading(false)
            
            setTimeout(() => {
                filtrarDestacados()
                
            }, 3000);

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
        filtrarDestacados()
    }
   

    function filtrarDestacados()
    {

        var Ids = [1,2,3,4,5]
        var data : AplicacionModel[]= []
        Ids.map((id)=> {
            var result  = apliaciones.filter(app=> {
                console.log(app.Id === id);
                return app.Id === id
                
             })

            var result2 : AplicacionModel[] = result
            
            console.log(result2);

            result2.map((r)=> {
                console.log(r);
               data.push(r)
               console.log(r);

            })


        })
        console.log(data);

    }
    
    return (

        <div>
            <div className="row">
             <div className="col-12 col-md-6 offset-md-3 text-center">
                    <input 
                        className="form-control form-control-sm" 
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

            <div className="row py-2 my-2">
                
                <div className="col-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2 ">
                <h3>Aplicaciones:</h3>

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
    )

}


export default Aplicaciones