import React from 'react'

type IProps = {
    title : string
}

class Title extends React.Component<IProps> {


    render(){

        return (
            
            <div className="sticky-top">
        
                <h1 
                    className=" font-weight-bold txtTitle2 text-left  pt-1 ml-n-3" 
                    id="txtTitulo"
                    style={{color: '#192A56'}}>{this.props.title}</h1> 
                <hr id="hrTitulo" className="text-white" style={{color: 'white', width:"90%"}}/> 
                 
            </div>

        )
    }
}


export default Title