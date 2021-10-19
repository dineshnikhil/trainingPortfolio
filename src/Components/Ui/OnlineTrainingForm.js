import React, { useRef } from 'react'
import swal from 'sweetalert';

import './OnlineTrainingForm.css';

function OnlineTrainingForm (props) {

    const nameInputRef = useRef();
    const emailInputRef = useRef();
    const genderInputRef = useRef();
    const trainingTypeInputRef = useRef();
    const dateInputRef = useRef();
    const timeInputRef = useRef();


    function onsubmitHandler(event) {
        event.preventDefault();

        // variables
        const enteredName = nameInputRef.current.value;
        const enteredEmail = emailInputRef.current.value;
        const enteredGender = genderInputRef.current.value;
        const enteredTrainingType = trainingTypeInputRef.current.value;
        const enteredDate = dateInputRef.current.value;
        const enteredTime = timeInputRef.current.value;

        // form validateion.
        if (enteredName === "") {
            // alert("Please fill Name!");
            swal("Input field not filled", "check your name field!", "warning")
        } else if (enteredEmail === "") {
            swal("Input field not filled", "Please fill Email!", "warning")
        } else if (enteredGender === "") {
            swal("Input field not filled", "Please select your Gender!", "warning")
        } else if (enteredTrainingType === "") {
            swal("Input field not filled", "Please select Training Type!", "warning")
        } else if (enteredDate === "") {
            swal("Input field not filled", "Please select date!", "warning")
        } else if (enteredTime === "") {
            swal("Input field not filled", "Please select Time!", "warning")
        } else {
            swal("", "Successfully Booked Your Online Session!", "success");
            props.onConfirm();
            // console.log({
            //     name: enteredName,
            //     email: enteredEmail,
            //     gender: enteredGender,
            //     trainingType: enteredTrainingType,
            //     date: enteredDate,
            //     time: enteredTime
            // });
        }
    }

    return (
        <div className="onlineTraining-modal-div">
            <h3>Book Your Free One Hour Online training</h3>
            <form onSubmit={onsubmitHandler}>
                <div className="row">
                    <div className="col-lg-6 col-md-6">
                        <label htmlFor="name">Name</label>
                        <input ref={nameInputRef}  id="name" name="name" type="text" />

                        <label htmlFor="email">Email</label>
                        <input ref={emailInputRef} id="email" name="email" type="email" />

                        <select ref={genderInputRef}  name="gender" id="gender">
                            <option value="">Choose your Gender..</option>
                            <option value="male">male</option>
                            <option value="female">female</option>
                        </select>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <select ref={trainingTypeInputRef}  name="training-type" id="training-type">
                            <option value="">Choose training type...</option>
                            <option value="Fat loss training">Fat loss training</option>
                            <option value="Strength training">Strength training</option>
                            <option value="Crossfit training">Crossfit training</option>
                            <option value="Set Diet Plane">Set Diet Plane</option>
                        </select>
                        

                        <input ref={dateInputRef}  id="date" name="date" type="date" />

                        <input ref={timeInputRef} id="time" name="time" type="time" />
                    </div>
                </div>
                <br />
                <button className="btn btn-primary book-btn">BookNow</button>
                
            </form>
            <button onClick={props.onConfirm} class="cross"><i class="fas fa-times"></i></button>
        </div>
    )
}

export default OnlineTrainingForm;
