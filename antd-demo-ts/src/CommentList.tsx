import React from 'react'
import Comment from './Comment'

class CommentList extends React.Component<CLprops,{}> {
    render(){
        return(
            <div>
                {this.props.comments.map((comment,i)=><Comment comment={comment} ket={i}></Comment>)}
            </div>
        )
    }
}
export default CommentList