import React from 'react'
import CommentInput from './CommentInput'
import CommentList from './CommentList'
import './scss/CommentApp.scss'

class CommentApp extends React.Component{
    constructor(props){
        super(props);
        this.state={
            comments:[]
        }
    }

    handleSummitComment(comment){
        // console.log(comment);
        this.state.comments.push(comment);
        this.setState({comments:this.state.comments})
        // this.state.setState(comments:comments.push(comment))
    }

    render(){
        return(
            <div className="wrapper">
                <CommentInput onSubmit={this.handleSummitComment.bind(this)}></CommentInput>
                <CommentList comments={this.state.comments}></CommentList>
            </div>
        )
    }
}

export default CommentApp;
