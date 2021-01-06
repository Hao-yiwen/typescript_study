//防止组件渲染

import React from 'react';
import ReactDOM from 'react-dom';

function WarningBanner(props){
    if(!props.warn){
        return null;
    }

    return(
        <div className="warning">
            Warning!
        </div>
    )
}

class Page extends React.Component{
    constructor(props){
        super(props);
        this.handleToggleClick=this.handleToggleClick.bind(this);
        this.state={showWarning:true};
    }

    handleToggleClick(){
        this.setState(state=>({
            showWarning:!state.showWarning
        }));
    }
    
    render() {
        return (
            <div>
                <WarningBanner warn={this.state.showWarning}></WarningBanner>
                <button onClick={this.handleToggleClick}>
                    {this.state.showWarning?'hide':'show'}
                </button>
            </div>
        );
    }
}

ReactDOM.render(
    <Page></Page>,
    document.getElementById('root')
)