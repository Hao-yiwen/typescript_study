import React from 'react'
import PropTypes from 'prop-types'

export const connect=(mapStateToProps,mapDispatchProps)=>(WrappedComponent)=>{
    class Connect extends React.Component{
        static contextTypes={
            store:PropTypes.object
        }

        constructor(){
            super()
            this.state={allProps:{}}
        }

        componentWillMount(){
            const {store}=this.context;
            this.__updateProps();
            store.subscribe(()=>this.__updateProps())
        }

        __updateProps(){
            const {store}=this.context;
            let stateProps=mapStateToProps?mapStateToProps(store.getState(),this.props):{};
            let dispatchProps=mapDispatchProps?mapDispatchProps(store.dispatch,this.props):{};
            this.setState({
                allProps:{
                    ...stateProps,
                    ...this.props,
                    ...dispatchProps
                }
            })
        }

        render(){
            return <WrappedComponent {...this.state.allProps}></WrappedComponent>
        }
    }

    return Connect
}

export class Provider extends React.Component{
    static propsTypes={
        store:PropTypes.object,
        children:PropTypes.any
    }

    static childContextTypes={
        store:PropTypes.object
    }

    getChildContext(){
        return{
            store:this.props.store
        }
    }

    render(){
        return <div>{this.props.children}</div>
    }
}