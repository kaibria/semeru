import './App.css';
import React from "react";
import {Switch, Route, Redirect, HashRouter} from "react-router-dom";
import Main from './Main.js'
import Login from './Login.js'
import Registration from './Registration.js'
import firebase from 'firebase'


export default function App() {


    return (
        <div>
            <HashRouter>
                <Switch>
                    <Route path={'/login'} component={Login} basename={process.env.PUBLIC_URL}/>
                    <Route path={'/registration'} component={Registration} basename={process.env.PUBLIC_URL}/>
                    <Route path={'/semeru'} component={Main} basename={process.env.PUBLIC_URL}/>
                    <Route path={'/'} basename={process.env.PUBLIC_URL}>
                        <Redirect to="/login"/>
                    </Route>

                </Switch>
            </HashRouter>
        </div>
    );
}
