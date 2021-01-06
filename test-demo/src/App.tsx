import React, { ReactNode,MouseEvent } from 'react';

interface Props{
  onClick (event: MouseEvent<HTMLDivElement>): void,
  children?:ReactNode
}

function handleClick(){

}

const Button=function({onClick:handleClick,children}){
  <button onClick={handleClick}>{children}</button>
}

function App() {
  return (
    <div className="App">
      <Button></Button>
    </div>
  );
}

export default App;
