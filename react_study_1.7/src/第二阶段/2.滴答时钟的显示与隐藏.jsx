import React,{Component} from 'react'
// import ReactDOM from 'react-dom'

class Clock extends Component{
    constructor(props){
        super(props);
        this.state={
            date:new Date()
        }
    }

    componentWillMount(){
        this.timer=setInterval(()=>{
            this.setState(
        { date:new Date()}
                )
        },1000)
        
    }

    componentWillUnmount(){
        clearInterval(this.timer)
    }

    render(){
        return(
            <div>{this.state.date.toLocaleTimeString()}</div>
        )
    }
}

export default Clock