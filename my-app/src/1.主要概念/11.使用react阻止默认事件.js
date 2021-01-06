import React from 'react-dom';
import ReactDOM from 'react-dom'

function ActionLink(){
    function handleClick(e){
        console.log(e);
        e.preventDefault();        
    }

    return(
        <a href="#" onClick={handleClick}>
            Click me
        </a>
    )
}

ReactDOM.render(
    <ActionLink></ActionLink>,
    document.getElementById('root')
)