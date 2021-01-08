import React from 'react'
import ReactDOM from 'react-dom'

class AutoFocusInout extends React.Component{
    componentDidMount(){
        this.input.focus()
    }
    render(){
        return(
            <input ref={(input)=>{console.log(input);this.input=input}}></input>
        )
    }
}

export default AutoFocusInout;