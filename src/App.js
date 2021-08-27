import './App.css';
import React from "react";
import {Switch, Route, Link} from "react-router-dom";
import Main from './Main.js'
import Login from './Login.js'
import Registration from './Registration.js'
import firebase from 'firebase'


function App() {


    return (
        <div>
            <Switch>
                <Route exact path="/" component={Main}/>
                <Route path="/login" component={Login}/>
                <Route path="/registration" component={Registration}/>
            </Switch>

        </div>
    );
}

export default App;
