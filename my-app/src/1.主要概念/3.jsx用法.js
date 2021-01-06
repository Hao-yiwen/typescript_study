import ReactDOM from 'react-dom';
import React from 'react';

function formatName(user){
  return user.firstName+' '+user.lastName;
}

const user={
  firstName:'Harper',
  lastName:'Perez'
}

const name='Josh Perez';
const title=response.potentiallyMaliciousInput;
const element=<h1>hello,{formatName(user)}!</h1>
ReactDOM.render(
  element,
  document.getElementById('root')
)



// const element = <img src={user.avatarUrl} />
