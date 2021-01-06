import React from 'react';
import ReactDOM from 'react-dom';

function Mailbox(props){
    const unreadMessages=props.unreadMessages;
    return(
        <div>
            <h1>hello!</h1>
            {
                unreadMessages.length>0 &&
                <h2>
                    You have {unreadMessages.length} unread messages
                </h2>
            }
        </div>
    )
}

const messages=[];
ReactDOM.render(
    <Mailbox unreadMessages={messages}></Mailbox>,
    document.getElementById('root')
)