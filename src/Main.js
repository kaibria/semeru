import './App.css';
import firebase from 'firebase';
import React, {useState} from "react";
import {Button, FormControl, InputGroup, Spinner} from "react-bootstrap";
import {Square} from "react-bootstrap-icons";

export default function ToDoListe() {
    const [user, setUser] = useState()
    let [toDos, setToDos] = useState([])
    const [newToDo, setNewToDo] = useState({name: '', start: '', ende: ''})
    const [message, setMessage] = useState('')
    const [errorMessage, setErrorMessage] = useState('')
    const [showSpinner, setShowSpinner] = useState(false)


    return (

        <div>
            <h4>Login</h4>
            <div className={"d-flex"} id={"inputDiv"}>
                <InputGroup className="form-group w-25">
                    <FormControl
                        aria-label="Default"
                        aria-describedby="inputGroup-sizing-default"
                        value={user}
                        onChange={e => setUser(e.target.value)}
                    />
                </InputGroup>
            </div>
            <br/>
            {showSpinner && <Spinner size={"sm"} animation="border" variant="light"/>}

            <br/>
            <Button onClick={loginButtonPressed}>Login</Button>
            <br/>
            <br/>
            <br/>
            <h5>
                {message}
                <br/>
                <br/>
                {errorMessage}
            </h5>
            -----------------------------------------------------------------------------------------------------
            <br/>
            <br/>

            <h2>To Do's</h2>

            <h5>Neues To Do:</h5>
            <div className={"d-flex"} id={"inputDiv"}>
                <InputGroup className="form-group w-25">
                    <FormControl
                        aria-label="Default"
                        aria-describedby="inputGroup-sizing-default"
                        value={newToDo.name}
                        onChange={e => setNewToDo(old => ({...old, name: e.target.value}))}
                    />
                </InputGroup>
            </div>

            <br/><br/>
            <h5>Fällig am:</h5>
            <input id={"toDoDate"} type={"date"} value={newToDo.ende}
                   onChange={e => setNewToDo(old => ({...old, ende: e.target.value}))}/>

            <br/>
            <br/>
            <Button onClick={buttonPressed}>Speichern</Button>
            <br/>
            <BetterTable/>
            <br/>
            <Button onClick={deleteAll}>Alle löschen</Button>
        </div>
    );

    function BetterTable() {
        return (
            <table className="table">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Hinzugefügt am</th>
                    <th scope="col">Fällig am</th>
                    <th scope="col">Fertig?</th>
                </tr>
                </thead>
                <tbody>
                {toDos.length === 0 ? <div></div> : toDos.map((toDo, index) =>
                    <tr key={index}>
                        <th scope="row">{index}</th>
                        <td>{toDo.name}</td>
                        <td>{toDo.start}</td>
                        <td>{toDo.ende}</td>
                        <td>
                            <div onClick={() => deleteByIndex(index)}>
                                <Like/>
                            </div>
                        </td>
                    </tr>
                )}
                </tbody>
            </table>
        )
    }

    function Like() {
        return (<Square/>)
    }

    function deleteByIndex(index) {
        deleteToDo(index)
    }


    function buttonPressed() {
        newToDo.start = getCurrentDate()
        toDos.push(newToDo)
        storeToDo(user)
    }

    function getCurrentDate() {
        return new Date().toISOString().substring(0, 10)
    }

    function storeToDo(user) {
        if (user != null) {
            firebase.database().ref('users/' + user + '/toDo').set(toDos);
        }
    }

    function loginButtonPressed() {
        let newArray = []
        setToDos(newArray)
        setShowSpinner(true)
        readToDos()
    }

    function readToDos() {
        // on() method
        firebase.database().ref('users/' + user + '/toDo').on('value', (snap) => {
            if (snap.val()) {
                console.log("snap.val()", snap.val())
                setToDos(snap.val())
                setMessage("User erfolgreich angemeldet")
                setErrorMessage("")
            } else {
                setMessage("-User erfolgreich angemeldet")
                setErrorMessage("-User hat noch keine Einträge")
            }
            setShowSpinner(false)
        });
    }

    function deleteToDo(index) {
        let newArray = toDos.filter((todo, idx) => idx !== index);
        setToDos(newArray);

        if (user != null) {
            firebase.database().ref('users/' + user + '/toDo').set(newArray);
        }


    }

    function deleteAll() {
        let newArray = []
        setToDos(newArray)

        if (user != null) {
            firebase.database().ref('users/' + user + '/toDo').set(newArray);
        }
    }
}