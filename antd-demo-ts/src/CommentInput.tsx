import React from 'react'
import './scss/CommentInput.scss';

interface Cinput{

}

class CommentInput extends React.Component{
    constructor(props){
        super(props);
        this.state={
            username:'',
            content:''
        }
    }
    handleUsernameChange (event) {
        this.setState({
          username: event.target.value
        })
      }    
    
    handleContentChange (event) {
        this.setState({
            content: event.target.value
        })
    }

    handleSubmit(){
        if(this.props.onSubmit){
            const {username,content}=this.state;
            this.props.onSubmit({username,content})
        }
        this.setState({content:''})
    }
    
    render(){
        return(
            <div className="comment-input">
                <div className="comment-field">
                    <span className="comment-field-name">用户名:</span>
                    <div className="comment-field-input">
                        <input type="text" value={this.state.username} onChange={this.handleUsernameChange.bind(this)}/>
                    </div>
                </div>
                <div className="comment-field">
                    <span className="comment-field-name">评论内容:</span>
                    <div className="comment-field-input">
                        <textarea value={this.state.content} 
                        onChange={this.handleContentChange.bind(this)}></textarea>
                    </div>
                </div>
                <div className="comment-field-button">
                    <button onSubmit={this.handleSubmit.bind(this)}>
                        发布
                    </button>
                </div>
            </div>
        )
    }
}

export default CommentInput;