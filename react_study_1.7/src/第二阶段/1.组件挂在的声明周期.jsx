import react from 'react'
import React from 'react'
import ReactDOM from 'react-dom'

class Header extends React.Component{
    constructor(){
        super();
        console.log('constructor');
    }

    componentWillMount(){
        console.log(('component will mount'));
    }

    componentDidMount(){
        console.log('component did mount');
    }

    componentWillUnmount(){
        console.log('component will Unmount');
    }

    render(){
        console.log('render');
        return(
            <div>
                <h1 className="title">react 小书</h1>
            </div>
        )
    }
}

export default Header;