import React,{Component} from 'react'


export default function NewComponent(WrappedComponent){
    class NewComponent extends Component {
      // 可以做很多自定义逻辑
      render () {
        return <WrappedComponent />
      }
    }
    return NewComponent
  }


  
{/* <WrappedComponent></WrappedComponent> */}