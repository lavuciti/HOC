import React from "react";
import { Component } from "react";

const withCounter = (MainComponent) =>{
    class NewComponent extends Component {
        state = {
            counter : 0
        }

        incCounter = () => {
            this.setState({counter:this.state.counter + 1})
            
        }
        render(){
            return (
                <MainComponent name={this.props.name} counter={this.state.counter} incCounter={this.incCounter} />
            )
        }
    }
    return NewComponent;
}

export default withCounter;