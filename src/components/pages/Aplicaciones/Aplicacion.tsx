import React, {useState} from 'react'
import AplicacionModel from './../../../models/AplicacionModel';
import Loading from '../../common/Loading';
import { RegistrarEnAplicacionService } from '../../../services/AuthService';

import './Aplicacion.css'

type IProps = {
    aplicacionModel : AplicacionModel
}

const Aplicacion : React.FC<IProps> = (props)=> {

    
    const [loading, setLoading] = useState(false)
    const [hover, setHover] = useState(false)

    async function RegistrarEnaplicacion(IdAplicacion : Number)
    {
        setLoading(true)
        await RegistrarEnAplicacionService(IdAplicacion)
        setLoading(false)
    }

    return (
        <div>
            <div
                onClick={()=> RegistrarEnaplicacion(props.aplicacionModel.Id) }
                onMouseOver={()=>setHover(true)}
                onMouseOut={()=>setHover(false)}
                className={"shadow-sm list-group-item list-group-item-action flex-column align-items-start p-1 px-2 " + (hover ? "aplicacion" : "") }>
                <div className=" d-flex w-100 justify-content-between">
                    <div>
                        <h5 className="mb-1">{props.aplicacionModel.Aplicacion}</h5>
                        <p className="mb-1">{props.aplicacionModel.Descripcion}</p>

                    </div>
                    
                    {loading ? (
                        <div className={"d-flex align-self-center"}>
                            <Loading Loading={loading} Hidetext={true}/>
                        </div>
                    ): (
                        <div>
                            {props.aplicacionModel.EsSoloEnlace ? (
                                <button className={ "btn"}>
                                    <i className="fa fa-link fa-2x text-primary align-items-end" aria-hidden="true"></i>
                               </button>
                            ): (
                                <button className={ "btn"}>
                                    <i className="fa fa-arrow-right fa-2x text-primary align-items-end" aria-hidden="true"></i>
                                </button>
                            )}
                        
                        </div>
                    )}
                
                </div>
            </div>
        </div>
    )
}

export default Aplicacion