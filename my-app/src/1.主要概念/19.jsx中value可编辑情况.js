import React from 'react'
import ReactDOM from 'react-dom'

ReactDOM.render(<input value="hi"></input>,document.getElementById('root'))

setTimeout(function(){
    ReactDOM.render(<input value='dasdasd'></input>,document.getElementById('root'))
},5000)