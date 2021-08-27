import {FormControl, InputGroup, Button, DropdownButton, Dropdown} from "react-bootstrap";
import React, {useState} from "react";
import './App.css';
import firebase from "firebase";


export default function Registration() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [firstPw, setFirstPw] = useState('')

    function storeUser() {
        firebase.database().ref('usernames/' + username + '/security/password').set(password)
    }

    function validate() {
        console.log(username)
        if (username != null && firstPw == password) {
            storeUser()
            console.log(username)
        }
    }

    return (
        <div>
            <h1>Semeru</h1><br/>
            <h2>Registration</h2>
            <br/>

            <Dropdown>
                <Dropdown.Toggle variant="primary" id="dropdown-basic">
                    Form of Address
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Mr.</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Ms.</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Mrs.</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>

            <br/>

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
                        aria-label="Default" type="password"
                        placeholder="Password"
                        value={firstPw}
                        onChange={e => setFirstPw(e.target.value)}
                    >
                    </FormControl>
                </InputGroup>
            </div>

            <br/>

            <div className={"d-flex"} id={"inputDiv"}>
                <InputGroup className={"form-group w-25"}>
                    <FormControl
                        aria-label="Default" type="password"
                        placeholder="Confirm Password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}>
                    </FormControl>
                </InputGroup>
            </div>

            <br/>
            <Button onClick={() => validate()}>Register</Button>
            <h6>Already have an account? <a href="login">Sign in</a></h6>

        </div>
    );
}

