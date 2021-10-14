import React, { useState } from 'react';

import './TrainingTypeComp.css'

function TrainingTypeComp(props) {
    // variables
    const [enteredName, setEnteredName] = useState('');
    const [enteredEmail, setEnteredEmail] = useState('');
    const [enteredGender, setEnteredGender] = useState('');


    function nameChangeHandler(event) {
        setEnteredName(event.target.value);
    }

    function emailChangeHandler(event) {
        setEnteredEmail(event.target.value);
    }

    function genderChangeHandler(event) {
        setEnteredGender(event.target.value);
    }

    function onsubmitHandler(event) {
        event.preventDefault();

        if (enteredName === "") {
            alert("Please fill Name input Field!")
        } else if (enteredEmail === "") {
            alert('Please fill Email input Field!')
        } else if (enteredGender === "") {
            alert('Please fill Gender input Field!')
        } else {
            alert(`Thanks ${enteredName.toUpperCase()} for Enroling, We will get in touch with in 24 hours.`);
            props.onConfirm();
        }

    }
    return (
        <div className="trainingModal-div">
            <h3>Enroling to {props.trainingType} Training</h3>
            <form onSubmit={onsubmitHandler}>
                <label htmlFor="name">Name</label>
                <input onChange={nameChangeHandler} id="name" name="name" type="text" />
                

                <label htmlFor="email">Email</label>
                <input onChange={emailChangeHandler} id="email" name="email" type="email" />
                

                <select onChange={genderChangeHandler} name="gender" id="gender">
                    <option value="">Choose your Gender..</option>
                    <option value="male">male</option>
                    <option value="female">female</option>
                </select>

                <button type="submit" className="btn btn-primary" id="enrol-btn">EnrolNow <i class="fas fa-dumbbell"></i></button>
            </form>
            <button onClick={props.onConfirm} class="cross"><i class="fas fa-times"></i></button>
        </div>
    )
}

export default TrainingTypeComp;
