import React from'react'

interface Props{
    comment:string
}

interface State{
    a:number
}

class Comment extends React.Component<Props>{
    constructor(props){
        super(props);
        this.state={
            a:''
        }
    }
    render(){
        return(
            <div>{this.props.comment}</div>
        )
    }
}

export default Comment