import React, {Component} from 'react';

class MainText extends Component{
    render(){
        return(
        <div>
            <h1>{this.props.h1} </h1>
            <p>{this.props.p}</p>
        </div>
            
        )
    }
}

export default MainText;