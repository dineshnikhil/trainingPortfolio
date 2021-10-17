import React from 'react';
import ReactDom from 'react-dom'
import './TrainingTypeModal.css'
import TrainingTypeComp from './TrainingTypeComp';

const Backdrop = (props) => {
    return (
        <div className="backdrop" onClick={props.onConfirm}></div>
    )
};

function TrainingTypeModal(props) {
    return (
        
       <React.Fragment>
           {ReactDom.createPortal(
                <Backdrop onConfirm={props.onConfirm} />,
                document.getElementById('backdrop-root')
            )}

            {ReactDom.createPortal(
                <TrainingTypeComp onConfirm={props.onConfirm} trainingType={props.trainingType} />,
                document.getElementById('modal-root')
            )}
       </React.Fragment>

    )
}

export default TrainingTypeModal;
