//多组件渲染
import React from 'react';
import ReactDOM from 'react-dom'

// const numbers=[1,2,3,4,5]
// const listItems=numbers.map((number)=>
//     <li key={number.toString()}>{number}</li>
// );

// ReactDOM.render(
//     <ul>{listItems}</ul>,
//     document.getElementById('root')
// )

//封装后的代码
function NumberList(props){
    const numbers=props.numbers;
    const listItems=numbers.map((number)=><li key={number.toString()}>
        {number}
    </li>);
    return (
        <ul>{listItems}</ul>
    )
}

const numbers=[1,2,3,4,5,6];
ReactDOM.render(
    <NumberList numbers={numbers}></NumberList>,
    document.getElementById('root')
)