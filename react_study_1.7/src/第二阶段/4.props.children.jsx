import React,{Component} from 'react'
import ReactDOM from 'react-dom'

class Layout extends Component{
    render(){
        return(
            <div>
                {this.props.children[1]}
                <hr/>
                {this.props.children[0]}
            </div>
        )
    }
}

export default Layout