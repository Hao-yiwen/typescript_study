import React from 'react'
import ReactDOM from 'react-dom';
class Toggle extends React.Component{
    constructor(props){
        super(props);
        this.state={isToggleOn:true}
        this.handleClick=this.handleClick.bind(this);
    }

    handleClick(){
        console.log(123);
        console.log(this);
        this.setState(state=>({
            isToggleOn:!state.isToggleOn
        }));
    }

    render(){
        return(
            <div>
                <button onClick={this.handleClick}>
                {this.state.isToggleOn?'ON':'OFF'}
            </button>
            <button onClick={this.handleClick.bind(this,id)}></button>
            </div>
        )
    }
}

ReactDOM.render(
    <Toggle></Toggle>,
    document.getElementById('root')
)