import {FormControl, InputGroup, Button} from "react-bootstrap";
import React, {useState} from "react";
import './App.css';
import firebase from "firebase";
import {element} from "prop-types";




export default function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [pwFromDatabase, setPwFromDatabase] = useState('')

    function onLogin() {
        findPassword()

        if (password == pwFromDatabase){
            console.log("login successful")
            this.props.history.push("/semeru/#/registration")

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
            <h1>Sbabu List</h1><br/>
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
            <h6>Don't have an account yet? <a className={"normalLink"} href="/semeru/#/registration">Register</a></h6>
        </div>
    );
}