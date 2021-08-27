import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Login from "./Login";
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter} from 'react-router-dom';
import App from "./App";
import firebase from "firebase";

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

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
