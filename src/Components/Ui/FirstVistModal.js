import React from 'react';
import ReactDom from 'react-dom';
import Backdrop from './Backdrop';

import './FirstVistModal.css';
import working from '../../Images/Working-from-anywhere.gif';


const NavigationModal = (props) => {
    return (
        <div className="firstVist-modal-div">
            <div class="row">
                <div class="col-lg-6 firstVist-modal-img-div">
                    <img src={working} alt="" />
                </div>
                <div class="col-lg-6 firstVist-modal-info-div">
                    <h2>Howday!</h2>
                    <p>Thank you so much for getting here! i'm yourName, i'd really love to get in touch with you to hear your feedback or just say hello!</p>
                    <h3>Reach Me On</h3>
                    <i class="fab fa-twitter"></i>
                    <i class="fab fa-instagram"></i>
                    <i class="fas fa-map-marked-alt"></i>
                </div>
            </div>
            <button onClick={props.onConfirm} class="cross"><i class="fas fa-times"></i></button>
        </div>
    )
}




function NavModal(props) {
    return (
        <React.Fragment>
            
            {ReactDom.createPortal(
                <Backdrop onConfirm={props.onConfirm} />,
                document.getElementById('backdrop-root')
            )}

            {ReactDom.createPortal(
                <NavigationModal onConfirm={props.onConfirm} />,
                document.getElementById('modal-root')
            )}

        </React.Fragment>
    )
}

export default NavModal;