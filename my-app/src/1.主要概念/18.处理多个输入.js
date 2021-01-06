import React from 'react'
import ReactDOM from 'react-dom'

class Reservation extends React.Component{
    constructor(props){
        super(props);
        this.state={
            isGoing:true,
            numberOfGuests:2
        };

    }

    handleInputChange(event){
        const target=event.target;
        const value=target.type==='checkbox'?target.checked:target.value;
        const name=target.name;

        this.setState({
            [name]:value
        })
    }

    render(){
        return(
            <form>
                <label>
                    Is going:
                    <input
                    name="isGoing"
                    type="checkbox"
                    checked={this.state.isGoing}
                    onChange={this.handleInputChange}>
                    </input>
                </label>
                <br></br>
                <label>
                    Number if guests:
                    <input
                    name="numberOfGuests"
                    type="number"
                    value={this.state.numberOfGuests}
                    onChange={this.handleInputChange}>
                    </input>
                </label>
            </form>
        )
    }
}