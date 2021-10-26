import React, { useRef } from 'react';
import ReactDom from 'react-dom';
import './HireModal.css';
import swal from 'sweetalert';
import Backdrop from './Backdrop';

const ModalOverlay = (props) => {

    const nameInputRef = useRef();
    const emailInputRef = useRef();
    const genderInputRef = useRef();
    const trainingTypeInputRef = useRef();


    function onSubmitHandler(event) {
        event.preventDefault();

        const enteredName = nameInputRef.current.value;
        const enteredEmail = emailInputRef.current.value;
        const enteredGender = genderInputRef.current.value;
        const enteredTrainingType = trainingTypeInputRef.current.value;

        // console.log({
        //     name: enteredName,
        //     email: enteredEmail,
        //     gender: enteredGender,
        //     trainingType: enteredTrainingType
        // });

        if (enteredEmail !== "" && enteredName !== "" && enteredGender !== "" && enteredTrainingType !== "") {

            swal("", "Successfully Hired!", "success");
            props.onConfirm();

        } else {

            swal("Input Field Error", "Please check your input fields Again! (name, email, gender, trainingType)", "warning")

        }

        
    }

    return (
        <div className="price-modal-div">
            <form onSubmit={onSubmitHandler}>

                <label htmlFor="name">Name</label>
                <input 
                    id="name" 
                    name="name" 
                    type="text"
                    ref={nameInputRef} 
                />
                

                <label htmlFor="email">Email</label>
                <input 
                    id="email" 
                    name="email" 
                    type="email"
                    ref={emailInputRef}
                />
                

                <select name="gender" id="gender" ref={genderInputRef}>
                    <option value="">Choose your Gender..</option>
                    <option value="male">male</option>
                    <option value="female">female</option>
                </select>
            
                <select ref={trainingTypeInputRef} name="training-type" id="training-type">
                    <option value="">Choose training type...</option>
                    <option value="Fat loss training">Fat loss training</option>
                    <option value="Strength training">Strength training</option>
                    <option value="Crossfit training">Crossfit training</option>
                    <option value="Set Diet Plane">Set Diet Plane</option>
                </select>
                

                <button 
                    type="submit" 
                    className="btn btn-primary" 
                    id="price-modal-div-hire-btn"
                >
                    Hire <i class="fas fa-dumbbell"></i>
                </button>
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
