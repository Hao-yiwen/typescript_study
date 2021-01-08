import React from 'react'
import ReactDOM from 'react-dom'

class Editor extends React.Component{
    constructor(){
        super();
        this.state={
            content:'<div>3213</div>',
            color:'red'
        }
    }

    render(){
        return(
            // <div dangerouslySetInnerHTML={{__html:this.state.content}}>
            <div>
                {/* {this.state.content} */}
                <h1 style={{fontSize:'16px',color:this.state.color}}>dsadas</h1>
            </div>
        )
    }
}

export {Editor}