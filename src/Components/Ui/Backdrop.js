import React from 'react';
import './Backdrop.css';

function Backdrop(props) {
    return (
        <div className="backdrop" onClick={props.onConfirm}></div>
    )
}

export default Backdrop;
