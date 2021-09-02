import './App.css';
import firebase from 'firebase';
import React, {useEffect, useState} from "react";
import {Button, FormControl, InputGroup, Spinner} from "react-bootstrap";
import {DoorClosedFill, DoorOpen, DoorOpenFill, Square} from "react-bootstrap-icons";
import {NavLink} from "react-router-dom";

export default function ToDoListe() {
    const [user, setUser] = useState(localStorage.getItem('username'))
    let [entrys, setEntrys] = useState([])
    const [newEntry, setNewEntry] = useState({name: '', start: '', stop: ''})
    const [message, setMessage] = useState('')
    const [stopIndex, setStopIndex] = useState(0)
    const [showSpinner, setShowSpinner] = useState(false)


    useEffect(() => {
        loadContent()
    }, [])

    function saveEntry() {

        // newEntry.start = getCurrentTime()
        entrys.push(newEntry)
        storeEntry(user)
    }

    function startTime(index) {
        setStopIndex(index)
        entrys[index].start = getCurrentTime()
        storeEntry(user)
    }

    function stopTime() {
        entrys[stopIndex].stop = getCurrentTime()
        storeEntry(user)
    }



    function getCurrentTime() {
        let today = new Date()
        return today.getHours() + ':' + String(today.getMinutes()).padStart(2, "0")
    }

    function getWelcomeMessage() {
        let hours = new Date().getHours()

        if (hours >= 0 && hours < 12) {
            return "Good Morning, "
        } else if (hours >= 12 && hours < 18) {
            return "Good Afternoon, "
        } else if (hours >= 18 && hours < 0) {
            return "Good Evening, "
        }
    }

    function storeEntry(user) {
        if (user != null) {
            firebase.database().ref('usernames/' + user + '/entries').set(entrys);
        }
    }

    function loadContent() {
        console.log("loading..")
        let newArray = []
        setEntrys(newArray)
        setShowSpinner(true)
        readEntrys()
    }

    function readEntrys() {
        // on() method
        firebase.database().ref('usernames/' + user + '/entries').on('value', (snap) => {
            if (snap.val()) {
                console.log("snap.val()", snap.val())
                setEntrys(snap.val())
            }
            setShowSpinner(false)
        });
    }

    function deleteEntry(index) {
        let newArray = entrys.filter((entry, idx) => idx !== index);
        setEntrys(newArray);

        if (user != null) {
            firebase.database().ref('usernames/' + user + '/entries').set(newArray);
        }


    }

    function deleteAll() {
        let newArray = []
        setEntrys(newArray)

        if (user != null) {
            firebase.database().ref('usernames/' + user + '/entries').set(newArray);
        }
    }

    function Logout() {
        return (
            <div>
                <h4 className="logout">S E M E R U<NavLink className={"logoutButton"}
                    to="/login"><DoorClosedFill style={{color:"#526b4d", border:"#526b4d"}}></DoorClosedFill></NavLink></h4>
            </div>
        )
    }

    function Settings() {
        return (
            <div className="settingsComponent">
                <br/>
                <h2>Settings</h2>
                <br/>
                <Button style={{background:"#526b4d", border:"#526b4d"}}>Pause</Button>
                <Button style={{background:"#526b4d", border:"#526b4d"}} onClick={stopTime}>Stop</Button>
                <Button style={{background:"#526b4d", border:"#526b4d"}}>Interrupt</Button>
                <br/>
                <br/>
            </div>
        )
    }

    function BetterTable() {
        return (
            <table className="table">
                <thead>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Startzeit</th>
                    <th scope="col">Endzeit</th>
                    <th scope="col">Starten / Neustarten</th>
                    <th scope="col">Löschen</th>
                </tr>
                </thead>
                <tbody>
                {entrys.length === 0 ? <div></div> : entrys.map((entry, index) =>
                    <tr key={index}>
                        <td>{entry.name}</td>
                        <td>{entry.start}</td>
                        <td>{entry.stop}</td>
                        <td>
                            <Button onClick={() => startTime(index)}>Starten</Button>
                        </td>
                        <td>
                            <div onClick={() => deleteEntry(index)}>
                                <Like/>
                            </div>
                        </td>
                    </tr>
                )}
                </tbody>
            </table>
        )
    }

    return (

        <div>
            <Logout/>
            <h1>{getWelcomeMessage()} {user}
            <br/>
            </h1>
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

            <br/>
            <br/>
            <Button  style={{background:"#526b4d", border:"#526b4d"}} onClick={saveEntry}>Speichern</Button>
            <br/>
            <BetterTable/>
            <br/>
            <Button  style={{background:"#526b4d", border:"#526b4d"}} onClick={deleteAll}>Alle löschen</Button>
            <br/>
            <br/>
            <Settings></Settings>
        </div>
    );
}


function Like() {
    return (<Square/>)
}
