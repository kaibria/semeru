import {FormControl, InputGroup, Button} from "react-bootstrap";
import React, {useState} from "react";
import './App.css';
import firebase from "firebase";
import {NavLink, useHistory} from "react-router-dom";
import {element} from "prop-types";




export default function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [pwFromDatabase, setPwFromDatabase] = useState('')
    let [validationStatus, setValidationStatus] = useState(0)
    const [errorMessage, setErrorMessage] = useState("")

    const history = useHistory();

    function onLogin() {
        findPassword()

        if (password === pwFromDatabase){
            console.log("login successful")
            setValidationStatus(1)
            history.push("/semeru")
        }else{
            setErrorMessage("Incorrect password")
            setValidationStatus(0)
        }
    }

    function findPassword() {
        // on() method
        firebase.database().ref('usernames/' + username + '/security').on('value', (snap) => {
            if (snap.val()) {
                console.log("snap.val()", snap.val())
                setPwFromDatabase(snap.val().password)


            } else {
                console.log("User existiert nicht")

            }
        });
    }

    return (
        <div>
            <h1>Semeru</h1><br/>
            <h2>Login</h2>
            <div className={"d-flex"} id={"inputDiv"}>
                <InputGroup className={"form-group w-25"}>
                    <FormControl
                        aria-label="Default"
                        placeholder="Username"
                        value={username}
                        onChange={e => setUsername(e.target.value)}>
                    </FormControl>
                </InputGroup>
            </div>
            <br/>
            <div className={"d-flex"} id={"inputDiv"}>
                <InputGroup className={"form-group w-25"}>
                    <FormControl
                        aria-label="Default"
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}>
                    </FormControl>
                </InputGroup>
            </div>
            <br/>
            <Button onClick={() => onLogin()}>Login</Button>
            <br/>
            <h6>Don't have an account yet? <NavLink className={"normalLink"} to="/registration">Register</NavLink></h6>
        </div>
    );
}