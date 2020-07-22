import React from 'react'
import {ThemeContext, theme} from '../context/theme-context'

type IProps = {
    title : string
}

class Title extends React.Component<IProps> {


    render(){

        return (
            
            <div className="sticky-top">
                <ThemeContext.Consumer>
                    {context=> (
                        <div>
                            <h1 
                                className=" font-weight-bold txtTitle2 text-left  pt-1 ml-n-3" 
                                id="txtTitulo"
                                style={{color: context.theme.titleColor}}>{this.props.title}</h1> 
                            {/* <hr  className="text-white" style={{color: 'white', width:"90%"}}/>  */}
                            <hr  style={{backgroundColor: context.theme.hr,  width:"90%"}}/> 
                        </div>
                        )}
                </ThemeContext.Consumer>
            </div>

        )
    }
}


export default Title