
import { axios } from "../config/config";

import CredencialesModel from "../models/CredencialesModel";
import { AlertError } from "./AlertService";

export async function SignInService(model : CredencialesModel )
{
    try {
        
        const res = await axios.post('/login', model)
        localStorage.setItem("token", res.data.Token)
        window.location.reload()

    } catch (error) {
        console.log(error);
        var msg = error.response ? error.response.data.Message : "No se ha podido iniciar sesión, intenta de nuevo."
        AlertError( msg )
       
    }
    
}

export async function RegistrarEnAplicacionService(IdAplicacion : Number )
{    
    try {
        
        const res = await axios.get('/login/LoginEnAplicacion/'+ IdAplicacion)
        window.open(res.data, '_blank');

    } catch (error) {
        var msg = error.response ? error.response.data.Message : "No se ha podido iniciar sesión, intenta de nuevo."
        AlertError( msg )
        console.log(error);
    }
    
}


export function IsLoggedIn()
{
    var token = localStorage.getItem("token")

    if (token)
        return true
    else 
        return false
}


export function LogOut()
{
    localStorage.removeItem("token")
    window.location.reload()
}