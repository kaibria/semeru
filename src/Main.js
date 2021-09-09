import './App.css';
import firebase from 'firebase';
import React, {useEffect, useState} from "react";
import ReactStopwatch from 'react-stopwatch';
import {Button, FormControl, InputGroup} from "react-bootstrap";
import {DoorClosedFill, Square} from "react-bootstrap-icons";
import {NavLink} from "react-router-dom";

export default function Main() {
    const [user, setUser] = useState(localStorage.getItem('username'))
    let [entrys, setEntrys] = useState([])
    const [newEntry, setNewEntry] = useState({
        name: '',
        start: '',
        stop: '',
        hours: '',
        minutes: '',
        seconds: '',
        duration: '',
        interrupted: false,
        interruptedIndex: 0
    })
    const [entryIndex, setEntryIndex] = useState(0)
    const [stopButtonValue, setStopButtonValue] = useState(true);
    const [pauseButtonValue, setPauseButtonValue] = useState(true);
    const [interruptButtonValue, setInterruptButtonValue] = useState(true);
    const [stopWatchValue, setStopWatchValue] = useState(false);
    const [seconds, setSeconds] = useState(0)
    const [minutes, setMinutes] = useState(0)
    const [hours, setHours] = useState(0)
    const [formOfAdress, setFormOfAdress] = useState('')
    const [dates, setDates] = useState([])
    const [dailyEntries, setDailyEntries] = useState([])
    const [weeklyEntries, setWeeklyEntries] = useState([])
    const [monthlyEntries, setMonthlyEntries] = useState([])


    useEffect(() => {
        loadContent()
        findFormOfAdress()
        setStatistics()
    }, [])

    function saveEntry() {

        entrys.push(newEntry)
        storeEntry(user)
    }

    async function startTime(index) {

        if (entrys[index].interrupted === true) {
            let interruptedIndex = parseInt(localStorage.getItem(user + ": index -> "))
            setMinutes(entrys[interruptedIndex].minutes)
            setSeconds(entrys[interruptedIndex].seconds)
            setHours(entrys[interruptedIndex].hours)
        } else {

            entrys[index].start = getCurrentTime()
            const newDates = await readDatesOfIndex(index)

            if (newDates) {
                setDates([...newDates, getCurrentDate()])
            } else {
                setDates([getCurrentDate()])
            }

            setMinutes(0)
            setSeconds(0)
            setHours(0)
            entrys[index].duration = String(hours).padStart(2, "0") + ':' + String(minutes).padStart(2, "0") + ':' + String(seconds).padStart(2, "0")
            storeEntry(user)

        }
        setEntryIndex(index)
        setStopWatchValue(true)
        setStopButtonValue(false)
        setPauseButtonValue(false)
        setInterruptButtonValue(false)
        storeEntry(user)
    }

    function stopTime() {
        resetValues()
        entrys[entryIndex].stop = getCurrentTime()
        entrys[entryIndex].duration = String(hours).padStart(2, "0") + ':' + String(minutes).padStart(2, "0") + ':' + String(seconds).padStart(2, "0")
        entrys[entryIndex].hours = hours
        entrys[entryIndex].minutes = minutes
        entrys[entryIndex].seconds = seconds

        storeEntry(user)
    }

    function resetValues() {
        setSeconds(0)
        setMinutes(0)
        setHours(0)
        setStopWatchValue(false)
        setStopButtonValue(true)
        setPauseButtonValue(true)
        setInterruptButtonValue(true)
    }

    function interruptTime() {
        entrys[entryIndex].interrupted = true
        localStorage.setItem(user + ": index -> ", String(entryIndex))

        stopTime()
    }

    function pauseTime() {
        if (stopWatchValue === false) {
            setStopWatchValue(true)
        } else {
            setStopWatchValue(false)
        }

    }

    function findFormOfAdress() {
        // on() method
        firebase.database().ref('usernames/' + user + '/security').on('value', (snap) => {
            if (snap.val()) {
                console.log("snap.val()", snap.val())
                setFormOfAdress(snap.val().formOfAdress)

            }
        });
    }


    function getCurrentTime() {
        let today = new Date()
        return String(today.getHours()).padStart(2, "0") + ':' + String(today.getMinutes()).padStart(2, "0")
    }

    function getCurrentDate() {
        return new Date().toISOString().substring(0, 10)
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
            console.log(typeof dates)
            firebase.database().ref('usernames/' + user + '/entries/' + entryIndex + "/dates").set(dates);
        }
    }

    function loadContent() {
        console.log("loading..")
        let newArray = []
        setEntrys(newArray)
        readEntrys()
    }

    function readEntrys() {
        // on() method
        firebase.database().ref('usernames/' + user + '/entries').on('value', (snap) => {
            if (snap.val()) {
                console.log("Entries: ", snap.val())
                setEntrys(snap.val())
            }
        })
    }

    async function readDatesOfIndex(index) {
        // on() method
        const snap = await firebase.database().ref('usernames/' + user + '/entries/' + index + '/dates').get()
        console.log("index:" + index + " | dates:" + snap.val())

        return snap.val();
    }

    async function readDates() {
        // on() method
        const snap = await firebase.database().ref('usernames/' + user + '/entries').get()

        if (snap.val()) {
            console.log("All Dates:" + snap.val())
            return snap.val();
        }
    }

    async function setStatistics() {
        const allDates = await readDates()

        if (allDates) {

            for (let i = 0; i < allDates.length; i++) {
                for (let date = 0; date < allDates[i].dates.length; date++) {
                    if (allDates[i].dates[date] == getCurrentDate()) {
                        setDailyEntries([...dailyEntries, allDates[i].name])
                        console.log("Daily Entries: " + dailyEntries)
                        console.log("Name: " + allDates[i].name)
                    }
                }
            }
        }

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
                                                           to="/login"><DoorClosedFill
                    style={{color: "#526b4d", border: "#526b4d"}}/></NavLink></h4>
            </div>
        )
    }

    function Stopwatch() {
        return (
            <ReactStopwatch
                seconds={seconds}
                minutes={minutes}
                hours={hours}
                onChange={({hours, minutes, seconds}) => {
                    setSeconds(seconds)
                    setMinutes(minutes)
                    setHours(hours)
                }
                }
                onCallback={() => console.log('Finish')}
                autoStart={stopWatchValue}
                render={({formatted}) => {
                    return (
                        <div>
                            <p>
                                {formatted}
                            </p>
                        </div>
                    );
                }}
            />
        )
    }

    function Settings() {
        return (
            <div className="component">
                <br/>
                <h4 className={"setting"}>S E T T I N G S</h4>
                <br/>
                <h3 className={"stopwatch"}><Stopwatch/></h3>
                <br/>
                <Button style={{background: "#526b4d", border: "#526b4d"}} onClick={pauseTime}
                        disabled={pauseButtonValue}>Pause/Resume</Button>&emsp;
                <Button style={{background: "#526b4d", border: "#526b4d"}} onClick={stopTime}
                        disabled={stopButtonValue}>Stop</Button>&emsp;
                <Button style={{background: "#526b4d", border: "#526b4d"}} onClick={interruptTime}
                        disabled={interruptButtonValue}>Interrupt</Button>
                <br/>
                <br/>
            </div>
        )
    }

    function Statistics() {
        return (
            <div className="component">
                <br/>
                <h4 className={"setting"}>S T A T I S T I C S</h4>
                <br/>
                <br/>
                <h3>Daily</h3>
                <h3>Weekly</h3>
                <h3>Monthly</h3>

                <br/>
                <br/>
            </div>
        )
    }

    function BetterTable() {
        return (
            <div className="tableFixHead">
                <table>
                    <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Start Time</th>
                        <th scope="col">End Time</th>
                        <th scope="col">Duration</th>
                        <th scope="col">Start / Restart</th>
                        <th scope="col">Delete</th>
                    </tr>
                    </thead>
                    <tbody>
                    {entrys.length === 0 ? <div/> : entrys.map((entry, index) =>
                        <tr key={index} className={"tableBody"}>
                            <td>{entry.name}</td>
                            <td>{entry.start}</td>
                            <td>{entry.stop}</td>
                            <td>{entry.duration}</td>
                            <td>
                                <Button style={{background: "#526b4d", border: "#526b4d"}}
                                        onClick={() => startTime(index)}>Start</Button>
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
            </div>
        )
    }

    return (

        <div>
            <Logout/>
            <h1>{getWelcomeMessage()} {formOfAdress + user}
                <br/>
            </h1>
            <br/>
            <br/>
            <br/>


            <h2>Tasks</h2>
            <br/>
            <h5>Task Name</h5>
            <div className={"d-flex"} id={"inputDiv"}>
                <InputGroup className="form-group w-50">
                    <FormControl
                        aria-label="Default"
                        aria-describedby="inputGroup-sizing-default"
                        value={newEntry.name}
                        onChange={e => setNewEntry(old => ({...old, name: e.target.value}))}
                    />
                </InputGroup>
                <Button style={{background: "#526b4d", border: "#526b4d"}} onClick={saveEntry}>Add</Button>
            </div>
            <br/>
            <br/>
            <BetterTable/>
            <br/>
            <Button style={{background: "#526b4d", border: "#526b4d"}} onClick={deleteAll}>Delete All</Button>
            <br/>
            <br/>

            <Settings/>
            <br/>
            <br/>
            <br/>
            <Statistics/>
        </div>
    );
}


function Like() {
    return (<Square/>)
}
