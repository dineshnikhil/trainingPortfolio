import React from 'react';
import ReactDom from 'react-dom';

import './NavModal.css';

const Backdrop = (props) => {
    return (
        <div className="backdrop" onClick={props.onConfirm}></div>
    )
};

const NavigationModal = (props) => {
    return (
        <div className="nav-modal-div">
            <ul>
                <li><a href="#home" onClick={props.onConfirm}>Home</a></li>
                <li><a href="#about" onClick={props.onConfirm}>About</a></li>
                <li><a href="#training" onClick={props.onConfirm}>Training</a></li>
                <li><a href="#contact" onClick={props.onConfirm}>Contact</a></li>
                <li><a href="#explore" onClick={props.onConfirm}>Explore</a></li>
            </ul>
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
