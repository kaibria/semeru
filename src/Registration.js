import {FormControl, InputGroup, Button} from "react-bootstrap";
import React from "react";
import './App.css';


// Initialize Firebase


function App() {
    return (
        <div>
            <h1>Semeru</h1><br/>
            <div className={"d-flex"} id={"inputDiv"}>
                <InputGroup className={"form-group w-25"}><FormControl aria-label="Default"
                                                                       placeholder="Username"></FormControl></InputGroup>
            </div>
            <br/>
            <div className={"d-flex"} id={"inputDiv"}>
                <InputGroup className={"form-group w-25"}><FormControl aria-label="Default" type="password"
                                                                       placeholder="Password"></FormControl></InputGroup>
            </div>
            <br/>
            <h5>Hast du noch keinen Account?<h5><a href="registration"> Registrieren</a></h5></h5>
            <Button>Login</Button>
        </div>
    );
}

export default App;
