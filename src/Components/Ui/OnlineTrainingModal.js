import React from 'react';
import ReactDom from 'react-dom';
import Backdrop from './Backdrop';
import OnlineTrainingForm from './OnlineTrainingForm';


function OnlineTrainingModal(props) {
    return (
        <React.Fragment>
            
            {ReactDom.createPortal(
                <Backdrop onConfirm={props.onConfirm} />,
                document.getElementById('backdrop-root')
            )}

            {ReactDom.createPortal(
                <OnlineTrainingForm onConfirm={props.onConfirm} />,
                document.getElementById('modal-root')
            )}
            
        </React.Fragment>
    )
}

export default OnlineTrainingModal;
