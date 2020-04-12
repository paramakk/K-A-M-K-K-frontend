import * as React from "react";
import ReactDOM from 'react-dom';
import "./App.scss";
import HomePage from "./components/home_page/HomePage";
import Topics from "./components/topics/Topics";
import { Button, MenuItem } from '@material-ui/core';
import { Router, Route, Switch } from 'react-router';
import { Component } from "react";

class App extends React.Component {
    render(){
        return (
            <div className="App">
                <header className="App-header">
                    <Button style={{
                        position: 'absolute',
                        left: 5,
                        top: 5,
                        background: 'grey'
                    }}>
                        MENÜ
                    </Button>
                    <HomePage />
                    {/* <Topics /> */}
                </header>
            </div>
        );
    }
};

/*
const App = () => {

    return (
        <div className="App">
            <header className="App-header">
                <Button style={{
                    position: 'absolute',
                    left: 5,
                    top: 5,
                    background: 'grey'
                }}>
                    MENÜ
                </Button>
                <HomePage />
            </header>
        </div>
    );
};
*/

export default App;