import React from 'react'
import ReactDOM from 'react-dom'

function BoilingVerdict(props){
    if(props.celsius>=100){
        return <p>The water would boid!</p>
    }
    return <p>The water would not boil.</p>
}

class Calculator extends React.Component{
    constructor(props){
        super(props);
        this.handleChange=this.handleChange.bind(this);
        this.state={temperature:''}
    }

    handleChange(e){
        this.setState({temperature:e.target.value});
    }

    render(){
        const temperature=this.state.temperature;
        return(
            <fieldset>
                <legend>Enter temperature in Celsius:</legend>
                <input
                value={temperature}
                onChange={this.handleChange}></input>
                <BoilingVerdict celsius={parseFloat(temperature)}></BoilingVerdict>
            </fieldset>
        )
    }
}

//转化为摄氏温度
function toCelSius(fahrenheit){
    return (fahrenheit-32)*5/9;
}

function toFahrenheit(celsius){
    return (celsius*9/5)+32;
}

function tryConvert(temperature,convert){
    const input=parseFloat(temperature);
    if(Number.isNaN(input)){
        return '';
    }
    const output=convert(input);
    const rounded=Math.round(output*1000)/1000;
    return rounded.toString();
}

console.log(tryConvert('10.22',toFahrenheit));

ReactDOM.render(
    <Calculator></Calculator>,
    document.getElementById('root')
)