import React, { useState } from 'react';
import ReactDom from 'react-dom';
import swal from 'sweetalert';


import './OnlineTrainingModal.css'


const Backdrop = (props) => {
    return (
        <div className="backdrop" onClick={props.onConfirm}></div>
    )
};

const ModalOverlay = (props) => {

    // variables
    const [enteredName, setenteredName] = useState('');
    const [enteredEmail, setEnteredEmail] = useState('');
    const [enteredGender, setEnteredGender] = useState('');
    const [enteredTrainingType, setEnteredTrainingType] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    const [enteredTime, setEnteredTime] = useState('');

    // handler functions.
    function nameChangeHandler(event) {
        setenteredName(event.target.value);
    }
    function emailChangeHandler(event) {
        setEnteredEmail(event.target.value);
    }
    function genderChangedHandler(event) {
        setEnteredGender(event.target.value);
    }
    function trainingTypeChangedHandler(event) {
        setEnteredTrainingType(event.target.value);
    }
    function dateChangeHandler(event) {
        setEnteredDate(event.target.value);
    }
    function timeChangeHandler(event) {
        setEnteredTime(event.target.value);
    }

    function onsubmitHandler(event) {
        event.preventDefault();

        // form validateion.
        if (enteredName === "") {
            // alert("Please fill Name!");
            swal("Input field not filled", "check your name field!", "warning")
        } else if (enteredEmail === "") {
            alert("Please fill Email!")
        } else if (enteredGender === "") {
            alert("Please select your Gender!")
        } else if (enteredTrainingType === "") {
            alert("Please select Training Type!")
        } else if (enteredDate === "") {
            alert("Please select date!")
        } else if (enteredTime === "") {
            alert("Please select Time!")
        } else {
            alert("Successfully Booked Your Online Session!");
            props.onConfirm();
            console.log({
                name: enteredName,
                email: enteredEmail,
                gender: enteredGender,
                trainingType: enteredTrainingType,
                date: enteredDate,
                time: enteredTime
            });
        }
    }
    return (
        <div className="onlineTraining-modal-div">
            <h3>Book Your Free One Hour Online training</h3>
            <form onSubmit={onsubmitHandler}>
                <div className="row">
                    <div className="col-lg-6 col-md-6">
                        <label htmlFor="name">Name</label>
                        <input onChange={nameChangeHandler} id="name" name="name" type="text" />

                        <label htmlFor="email">Email</label>
                        <input onChange={emailChangeHandler} id="email" name="email" type="email" />

                        <select onChange={genderChangedHandler} name="gender" id="gender">
                            <option value="">Choose your Gender..</option>
                            <option value="male">male</option>
                            <option value="female">female</option>
                        </select>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <select onChange={trainingTypeChangedHandler} name="training-type" id="training-type">
                            <option value="">Choose training type...</option>
                            <option value="Fat loss training">Fat loss training</option>
                            <option value="Strength training">Strength training</option>
                            <option value="Crossfit training">Crossfit training</option>
                            <option value="Set Diet Plane">Set Diet Plane</option>
                        </select>
                        

                        <input onChange={dateChangeHandler} id="date" name="date" type="date" />

                        <input onChange={timeChangeHandler} id="time" name="time" type="time" />
                    </div>
                </div>
                <br />
                <button className="btn btn-primary book-btn">BookNow</button>
                
            </form>
            <button onClick={props.onConfirm} class="cross"><i class="fas fa-times"></i></button>
        </div>
    )
};

function OnlineTrainingModal(props) {
    return (
        <React.Fragment>
            
            {ReactDom.createPortal(
                <Backdrop onConfirm={props.onConfirm} />,
                document.getElementById('backdrop-root')
            )}

            {ReactDom.createPortal(
                <ModalOverlay onConfirm={props.onConfirm} />,
                document.getElementById('modal-root')
            )}
            
        </React.Fragment>
    )
}

export default OnlineTrainingModal;
