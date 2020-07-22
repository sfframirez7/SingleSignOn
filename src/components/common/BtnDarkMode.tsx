import React, { useState } from 'react'

import {ThemeContext} from '../context/theme-context'
 

const BtnDarkMode : React.FC<{}> = () => {

    const [darkMode, setDarkMode] = useState(localStorage.getItem("darkMode") === "true" ? true : false)

return ( 

    <div>   
        <ThemeContext.Consumer>
        {context=> (
            <div className="d-inline">
              
                {/* <i className="fa fa-sun-o d-inline" aria-hidden="true"></i> */}
                <div className="custom-control custom-switch " >
                    <input type="checkbox" className="custom-control-input" id="btnDarkMode" checked={darkMode} onChange={()=>setDarkMode(!darkMode)} onClick={context.toggle}  />
                    <label className="custom-control-label" htmlFor="btnDarkMode"> <i className="fa fa-moon-o text-info" aria-hidden="true"></i> Dark mode</label>
                </div>
            </div>
            )}
        </ThemeContext.Consumer>
      
    </div>
)}

 

export default BtnDarkMode