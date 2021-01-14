import React,{useState,useEffect} from 'react'
import ReactDOM from 'react-dom'

const Example=()=>{
    const [count,setCount]=useState({text:''});

    useEffect(()=>{
        document.title=`You clicked ${count} times`
    })

    return(
        <div>
            <p>You clicked {count} times</p>
            <button onClick={()=>setCount(count['text']+'a')}>
                Click me
            </button>
        </div>
    )
}

ReactDOM.render(
    <Example></Example>,
    document.getElementById('root')
)

