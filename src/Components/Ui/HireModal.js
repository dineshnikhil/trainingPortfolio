import React, { useState } from 'react';
import ReactDom from 'react-dom';
import './HireModal.css';
import swal from 'sweetalert';


const Backdrop = (props) => {
    return (
        <div className="backdrop" onClick={props.onConfirm}></div>
    )
};

const ModalOverlay = (props) => {

    // variables..
    const [enteredName, setenteredName] = useState('');
    const [enteredEmail, setenteredEmail] = useState('');
    const [enteredGender, setenteredGender] = useState('');
    const [trainingType, settrainingType] = useState('');

    function nameChangeHandler(event) {
        setenteredName(event.target.value);
    }
    function emailChangedHandler(event) {
        setenteredEmail(event.target.value);
    }

    function genderChangeHandler(event) {
        setenteredGender(event.target.value);
    }

    function trainingtypeChangeHandler(event) {
        settrainingType(event.target.value)
    }


    function onSubmitHandler(event) {
        event.preventDefault();

        if (enteredEmail !== "" && enteredName !== "" && enteredGender !== "" && trainingType !== "") {
            swal("", "Successfully Hired!", "success");
            props.onConfirm();
            setenteredName('');
            setenteredEmail('');
            setenteredGender('');
            settrainingType('');
        } else {
            swal("Input Field Error", "Please check your input fields Again! (name, email, gender, trainingType)", "warning")
        }

        
    }

    return (
        <div className="price-modal-div">
            <form onSubmit={onSubmitHandler}>
                <label htmlFor="name">Name</label>
                <input onChange={nameChangeHandler} id="name" name="name" type="text" />
                

                <label htmlFor="email">Email</label>
                <input onChange={emailChangedHandler} id="email" name="email" type="email" />
                

                <select onChange={genderChangeHandler} name="gender" id="gender">
                    <option value="">Choose your Gender..</option>
                    <option value="male">male</option>
                    <option value="female">female</option>
                </select>
            
                <select onChange={trainingtypeChangeHandler} name="training-type" id="training-type">
                    <option value="">Choose training type...</option>
                    <option value="Fat loss training">Fat loss training</option>
                    <option value="Strength training">Strength training</option>
                    <option value="Crossfit training">Crossfit training</option>
                    <option value="Set Diet Plane">Set Diet Plane</option>
                </select>
                

                <button type="submit" className="btn btn-primary" id="price-modal-div-hire-btn">Hire <i class="fas fa-dumbbell"></i></button>
            </form>
            <button onClick={props.onConfirm} class="cross"><i class="fas fa-times"></i></button>
        </div>
    )
};

function PriceModal(props) {
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

export default PriceModal
