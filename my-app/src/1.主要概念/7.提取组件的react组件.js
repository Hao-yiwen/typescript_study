import React from 'react';
import ReactDOM from 'react-dom';

function formatDate(date){
    return date.toLocaleDateString();
}

function Avatar(props){
    return(
        <img className="Avatar"
            src={props.user.avatarUrl}
            alt={props.user.name}    //图像无法显示时的替代文本
        ></img>
    )
}

function UserInfo(props){
    return(
        <div className="UserInfo">
            <Avatar user={props.user}></Avatar>
            <div className="UserInfo-name">
                {props.user.name}</div> 
        </div>
    )
}

function Comment(props){
    return(
        <div className="Comment">
            <UserInfo user={props.author}></UserInfo>
            <div className="Comment-text">
                {props.text}
            </div>
            <div className="Comment-date">
                {formatDate(props.date)}
            </div>
        </div>
    )
}

const comment={
    date: new Date(),
  text: 'I hope you enjoy learning React!',
  author: {
    name: 'Hello Kitty',
    avatarUrl: 'https://placekitten.com/g/64/64',
  }
}

ReactDOM.render(
    <Comment
        date={comment.date}
        text={comment.text}
        author={comment.author}
    ></Comment>,
    document.getElementById('root')
)