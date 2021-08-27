import './App.css';
import React from "react";
import {Switch, Route, Link} from "react-router-dom";
import Main from './Main.js'
import Login from './Login.js'
import Registration from './Registration.js'
import firebase from 'firebase'



// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBbzX_9Vp3RqNkR7Ky8Z42HNTIj07VKWGA",
    authDomain: "semeru-7eac8.firebaseapp.com",
    databaseURL: "https://semeru-7eac8-default-rtdb.firebaseio.com",
    projectId: "semeru-7eac8",
    storageBucket: "semeru-7eac8.appspot.com",
    messagingSenderId: "652725791499",
    appId: "1:652725791499:web:2ab8295068db2719df100e",
    measurementId: "G-7BD6XZ6BY1"
};
firebase.initializeApp(firebaseConfig);

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
