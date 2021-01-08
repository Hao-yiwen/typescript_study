import React,{Component} from 'react'
import PropTypes from 'prop-types'
import ThemSwitch from './ThemeSwitch'
import {connect} from 'react-redux'

class Content extends Component{
    static contextTypes={
        themeColor:PropTypes.string
    }

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