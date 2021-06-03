import React, { Component } from "react";
import "./TomatoBox.css";
import withCounter from "../hoc/withCounter"

class TomatoBox extends Component{
    
   provera = () => {
       console.log(this.props.incCounter);
   }

    render(){
        return (
            <div onClick={this.provera} className="TomatoBox">
                {this.props.counter}
            </div>
        )
    }
}

export default withCounter(TomatoBox);