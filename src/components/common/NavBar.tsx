import React from 'react'
import UserModal from './../pages/usuario/UserModal';


const NavBar : React.FC<{}> = ()=> {

    return (
        <div>
            <nav className="navbar navbar-light bg-light my-card">
                <h2 className="navbar-brand  font-weight-bolder m-0 p-0" >Portal BP</h2>
                <form className="form-inline ">
                    <UserModal/>
                </form>
            </nav>
        </div>
    )
}


export default NavBar