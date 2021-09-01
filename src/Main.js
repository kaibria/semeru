import './App.css';
import firebase from 'firebase';
import React, {useEffect, useState} from "react";
import {Button, FormControl, InputGroup, Spinner} from "react-bootstrap";
import {DoorClosedFill, DoorOpen, DoorOpenFill, Square} from "react-bootstrap-icons";
import {NavLink} from "react-router-dom";

export default function ToDoListe() {
    const [user, setUser] = useState(localStorage.getItem('username'))
    let [entrys, setEntrys] = useState([])
    const [newEntry, setNewEntry] = useState({name: '', start: '', ende: ''})
    const [message, setMessage] = useState('')
    const [errorMessage, setErrorMessage] = useState('')
    const [showSpinner, setShowSpinner] = useState(false)

    function BetterTable() {
        return (
            <table className="table">
                <thead>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Hinzugefügt am</th>
                    <th scope="col">Fällig am</th>
                    <th scope="col">Fertig?</th>
                </tr>
                </thead>
                <tbody>
                {entrys.length === 0 ? <div></div> : entrys.map((toDo, index) =>
                    <tr key={index}>
                        <td>{toDo.name}</td>
                        <td>{toDo.start}</td>
                        <td>{toDo.ende}</td>
                        <td>
                            <div onClick={() => deleteToDo(index)}>
                                <Like/>
                            </div>
                        </td>
                    </tr>
                )}
                </tbody>
            </table>
        )
    }

    useEffect(() => {
        loadContent()
    }, [])

    function buttonPressed() {

        newEntry.start = getCurrentDate()
        entrys.push(newEntry)
        storeToDo(user)
    }

    function getCurrentDate() {
        return new Date().toISOString().substring(0, 10)
    }

    function storeToDo(user) {
        if (user != null) {
            firebase.database().ref('usernames/' + user + '/toDo').set(entrys);
        }
    }

    function loadContent() {
        console.log("loading..")
        let newArray = []
        setEntrys(newArray)
        setShowSpinner(true)
        readToDos()
    }

    function readToDos() {
        // on() method
        firebase.database().ref('usernames/' + user + '/toDo').on('value', (snap) => {
            if (snap.val()) {
                console.log("snap.val()", snap.val())
                setEntrys(snap.val())
            }
            setShowSpinner(false)
        });
    }

    function deleteToDo(index) {
        let newArray = entrys.filter((todo, idx) => idx !== index);
        setEntrys(newArray);

        if (user != null) {
            firebase.database().ref('usernames/' + user + '/toDo').set(newArray);
        }


    }

    function deleteAll() {
        let newArray = []
        setEntrys(newArray)

        if (user != null) {
            firebase.database().ref('usernames/' + user + '/toDo').set(newArray);
        }
    }

    return (

        <div>
            <h1>&emsp;&emsp;&emsp;&ensp;&ensp;&ensp;Welcome {user} &emsp;&emsp;&emsp;&ensp;<NavLink className={"logout"} to="/login"><DoorClosedFill></DoorClosedFill></NavLink></h1>
            <br/>
            <br/>
            <br/>


            <h2>Entry's</h2>

            <h5>Neues To Do:</h5>
            <div className={"d-flex"} id={"inputDiv"}>
                <InputGroup className="form-group w-25">
                    <FormControl
                        aria-label="Default"
                        aria-describedby="inputGroup-sizing-default"
                        value={newEntry.name}
                        onChange={e => setNewEntry(old => ({...old, name: e.target.value}))}
                    />
                </InputGroup>
            </div>

            <br/><br/>
            <h5>Fällig am:</h5>
            <input id={"toDoDate"} type={"date"} value={newEntry.ende}
                   onChange={e => setNewEntry(old => ({...old, ende: e.target.value}))}/>

            <br/>
            <br/>
            <Button onClick={buttonPressed}>Speichern</Button>
            <br/>
            <BetterTable/>
            <br/>
            <Button onClick={deleteAll}>Alle löschen</Button>
        </div>
    );
}


function Like() {
    return (<Square/>)
}
