import React, { Component } from "react";
import "./TomatoBox.css";
import withCounter from "../hoc/withCounter"

class TomatoBox extends Component{
    render(){
        return (
            <div onClick={this.props.incCounter} className="TomatoBox">
                {this.props.counter}
            </div>
        )
    }
}

export default withCounter(TomatoBox);