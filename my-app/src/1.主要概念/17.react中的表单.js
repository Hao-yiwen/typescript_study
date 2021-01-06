import ReactDOM from 'react-dom'
import React from 'react'

class NameForm extends React.Component{
    constructor(props){
        super(props);
        this.state={value:''};
        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleChange(event){
        this.setState({value:event.target.value.toUpperCase()})
    }

    handleSubmit(event){
        alert('A name was submit'+this.state.value);
        event.preventDefault();
    }

    render(){
        return(
            <form onSumit={this.handleSubmit}>
                <label>
                    Name:
                    <input type='text' value={this.state.value} onChange={this.handleChange}></input>
                </label>
                <input type='submit' value='Submit'></input>
            </form>
        )
    }
}

ReactDOM.render(
    <NameForm></NameForm>,
    document.getElementById('root')
)