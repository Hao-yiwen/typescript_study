import React,{Component} from 'react'
import PropTypes from 'prop-types'
import ThemSwitch from './5.ThemeSwitch'
import {connect} from 'react-redux'

class Content extends Component{
    static contextTypes={
        themeColor:PropTypes.string
    }

    // constructor(){
    //     super();
    //     this.state={
    //         themeColor:''
    //     }
    // }

    // _uodateThemeColor(){
    //     const {store}=this.context;
    //     const state=store.getState();
    //     this.setState({themeColor:state.themeColor})
    // }

    // componentWillMount(){
    //     const {store}=this.context;
    //     this._uodateThemeColor()
    //     store.subscribe(()=>this._uodateThemeColor())
    // }


    render(){
        return(
            <div>
                <p style={{color:this.props.themeColor}}>React.js 小书内容</p>
                <ThemSwitch></ThemSwitch>
            </div>
        )
    }
}

const mapStateToProps=(state)=>{
    return{
        themeColor:state.themeColor
    }
}

Content=connect(mapStateToProps)(Content)


export default Content;