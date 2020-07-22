import React from 'react'

interface IProps {
    Loading     : boolean
    Hidetext?   : boolean
}

interface IState {
    Loading : boolean
}


 const Loading : React.FC<IProps> =(props)=> {


    if (props.Loading) {
        return (
            <div>
                <div className="spinner-grow text-warning" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
                <div className={"text-center " + (props.Hidetext ? "d-none" : "")}>
                    <p className="text-muted">Loading...</p>
                </div>
            </div>
        )
    } else {
        return (null )
    }

    

}

export default Loading