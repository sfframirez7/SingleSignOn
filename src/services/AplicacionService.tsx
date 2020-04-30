import { axios } from "../config/config";




export  function GetAplicacionesService( )
{
    return axios.get('/Aplicaciones')
}