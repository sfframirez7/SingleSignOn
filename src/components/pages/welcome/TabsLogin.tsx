import React, {useState} from 'react'

import { useHistory} from "react-router-dom";


const TabsLogin : React.FC<{}> = () => {

    const [tabActive, setTabActive] = useState("usuarioDeRed")

    let history = useHistory();

    function navigateTo(route : string, nameTab : string) {
        setTabActive(nameTab)
        history.push(route);
      }
  
    
    return (
        <div>

           
            <div className="row ">
                <div className="col-12 col-md-6 offset-md-3 col-lg-4 offset-lg-4">
                    <h4>Tipo de inicio de sesión:</h4>
                    <nav className="nav nav-pills flex-column flex-sm-row">
                        <button 
                            className={"btn btn-link  flex-sm-fill text-sm-center nav-link " + (tabActive === "usuarioDeRed" ? "active" : "" ) }
                            onClick={()=>navigateTo("/", "usuarioDeRed")}>Usuario de Red</button>
                        <button 
                            className={"btn btn-link flex-sm-fill text-sm-center nav-link " + (tabActive === "codigoEmpleado" ? "active" : "" ) }
                            onClick={()=>navigateTo("/CodigoEmpleado", "codigoEmpleado")}> Código de empleado</button>
                    </nav>
                </div>
                
            </div>
        </div>
    )

}


export default TabsLogin