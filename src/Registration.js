import {FormControl, InputGroup, Button, DropdownButton, Dropdown} from "react-bootstrap";
import React, {useState} from "react";
import './App.css';
import firebase from "firebase";
import {NavLink, useHistory} from "react-router-dom";


export default function Registration() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [firstPw, setFirstPw] = useState('')
    const [errorMessage, setErrorMessage] = useState("")
    const [dropdownValue, setDropdownValue] = useState('')
    const [isAlreadyUsed, setIsAlreadyUsed] = useState(false)

    let formOfAdress = [{value: "Mr. "}, {value: "Ms. "}, {value: "Mrs. "}]

    const history = useHistory();

    function storeUser() {
        firebase.database().ref('usernames/' + username + '/security/password').set(password)
        firebase.database().ref('usernames/' + username + '/security/formOfAdress').set(dropdownValue)
    }

    function isUserAlreadyUsed() {
        // on() method
        firebase.database().ref('usernames/' + username).on('value', (snap) => {
            if (!snap.val().length > 0) {
                console.log(snap.val())
                setIsAlreadyUsed(true)

            }
        });
    }

    function validate() {
        isUserAlreadyUsed()
        if (!isAlreadyUsed) {
            if (firstPw === password) {
                if (username.length > 1) {
                    storeUser()
                    console.log(username)
                    history.push("/login")
                } else {
                    setErrorMessage("Username too short")
                }
            } else {
                setErrorMessage("Passwords do not match")
            }
        } else {
            setErrorMessage("User is already in use")
        }
    }

    return (
        <div>
            <h1>Semeru</h1><br/>
            <h2>Registration</h2>
            <br/>

            <Dropdown>
                <Dropdown.Toggle variant="primary" id="dropdown-basic"
                                 style={{background: "#526b4d", border: "#526b4d"}}>
                    Form of Adress
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    {formOfAdress.map((adress, index) => <Dropdown.Item
                        key={index} onClick={() => setDropdownValue(adress.value)}>{adress.value}</Dropdown.Item>)}
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
            <h6 id={"errormessage"}>{errorMessage}</h6>
            <br/>
            <Button style={{background: "#526b4d", border: "#526b4d"}} onClick={() => validate()}>Sign Up</Button>
            <h6>Already have an account? <NavLink className={"normalLink"} to="/login">Sign in</NavLink></h6>

        </div>
    );
}

