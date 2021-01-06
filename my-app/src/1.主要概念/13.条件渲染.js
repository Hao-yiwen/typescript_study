import React from 'react'
import ReactDOM from 'react-dom';

//条件渲染

function UserGreeting(props){
    return <h1>Welcome back!</h1>
}

function GuestGreeting(props){
    return <h1>Please sign up.</h1>
}

function Greeting(props){
    const isLoggedIn=props.isLoggedIn;
    if(isLoggedIn){
        return <UserGreeting></UserGreeting>;
    }
    return <GuestGreeting></GuestGreeting>
}

function LoginButton(props){
    return(
        <button onClick={props.onClick}>
            login
        </button>
    );
}

function LogoutButton(props){
    return(
        <button onClick={props.onClick}>
            logout
        </button>
    )
}

class LoginControl extends React.Component{
    constructor(props){
        super(props);
        this.handleLoginClick=this.handleLoginClick.bind(this);
        this.handleLogoutClick=this.handleLogoutClick.bind(this);
        this.state={isLoggedIn:false}
    }
    handleLoginClick(){
        this.setState({isLoggedIn:true})
    }
    handleLogoutClick(){
        this.setState({isLoggedIn:false})
    }
    render(){
        const isLoggedIn=this.state.isLoggedIn;
        let button;

        // if(isLoggedIn){
        
        // }
        // else{
        
        // }
        {
            isLoggedIn?(
                button=<LoginButton onClick={this.handleLogoutClick}></LoginButton>
            ):
            (
                button=<LogoutButton onClick={this.handleLoginClick}></LogoutButton>
            )
        }
        return(
            <div>
                <Greeting isLoggedIn={isLoggedIn}></Greeting>
                {button}
            </div>
        )
    }
}

ReactDOM.render(
    <LoginControl></LoginControl>,
    document.getElementById('root')
)