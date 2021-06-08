import React, { Component } from 'react';
import "./App.css";
import CadetBox from './components/CadetBox/CadetBox';
import TomatoBox from './components/TomatoBox/TomatoBox';

class App extends Component{
    render(){
        return(
            <div className="App">
                <TomatoBox name="Danilo"/>
                <CadetBox />
            </div>
        )
    }
}

export default App;