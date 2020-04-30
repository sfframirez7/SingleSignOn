import axios from 'axios'
// import {Service} from 'axios-middleware';

var baseULR = ""

if (process.env.NODE_ENV === "production"){
    baseULR = "http://localhost:49212/api"
}

else if (process.env.NODE_ENV === "test"){
    baseULR = "http://localhost:49212/api"
}

else {
    baseULR = "http://localhost:49212/api"
}


axios.defaults.baseURL = baseULR;

axios.defaults.headers.common['Authorization'] = Token() ? `Bearer ${Token()}` : ""
axios.defaults.headers.common['Accept'] = `*/*`

axios.interceptors.request.use(function (config) {
    // Do something before request is sent
    Token()
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });



function JwtPayload() {


    var token = localStorage.getItem("token")

    if (!token) {
        window.location.href = "/";
        return;
    }

    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    if (!jsonPayload)
        return ""

    return JSON.parse(jsonPayload);
};


function Token() {

    var token = localStorage.getItem("token")

    if (!token || token == null) {
        localStorage.removeItem("token")
        return "";
    }

    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace('-', '+').replace('_', '/');
    var payload = JSON.parse(atob(base64));

    var jwt = payload;

    var horaActual = new Date().getTime() / 1000;

    if (horaActual > jwt.exp) {
        localStorage.removeItem("token")
        window.location.reload();
        return ""
    }
    
    return token
}

function UserUID() : string
{
    var payload = JwtPayload()

    if(!payload)
        return ""
    
    return payload.user_id

}

export {  axios, Token, JwtPayload , UserUID, baseULR}