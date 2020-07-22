import * as React from 'react'
export const theme = {

    light : {
        foreGround          : '#000000',
        backBround          : '#E8EAED',
        titleColor          : '#192A56',
        textColor           : 'black',
        textoAppList        : '#495057',
        myBackGround        : '#f8f9fa',
        navBarBackGround    : '#f8f9fa',
        userIcon            : '#007bff',
        userIcon2           : '#ffef11',
        hr                  : ''

    },
    
    dark : {
        foreGround          : '#ffffff',
        backBround          : '#17223B',
        titleColor          : '#E8EAED',
        textColor           : 'white',
        textoAppList        : '#E8EAED',
        myBackGround        : '#233459',
        navBarBackGround    : '#263859',
        userIcon            : '#FFEF11',
        userIcon2           : '#ffef11',
        hr                  : '#E8EAED'

    }
}

export const ThemeContext = React.createContext({theme : theme.dark, toggle : ()=> {}})