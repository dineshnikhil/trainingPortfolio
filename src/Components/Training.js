import React, { useState } from 'react'
import OnlineTrainingModal from './Ui/OnlineTrainingModal';
import TrainingTypeModal from './Ui/TrainingTypeModal';
import cardio from '../Images/cardio-img.png'
import crossfit from '../Images/crossfit-img.png'
import strength from '../Images/strength-img.png'
import online from '../Images/online-training.png'

import './Training.css'

function Training() {

    const [bookToogle, setbookToogle] = useState(false);
    const [enrolBtnToogle, setEnrolBtnToogle] = useState(false);
    const [trainingTypeClicked, setTrainingTypeClicked] = useState('');

    const bookNow = () =>{
        setbookToogle(true)
    };

    const bookLater = () => {
        setbookToogle(false)
    }

    const enrolNow = (event) =>{
        setEnrolBtnToogle(true)
        setTrainingTypeClicked(event.target.value);
    };

    const enrolLater = () => {
        setEnrolBtnToogle(false)
    }

    return (
        <React.Fragment>
            {bookToogle && <OnlineTrainingModal onConfirm={bookLater} />}
            {enrolBtnToogle && <TrainingTypeModal onConfirm={enrolLater} trainingType={trainingTypeClicked} />}
            <div className="container-fluid training-div" id="training">
                <div className="container-fluid online-training-div" data-aos="fade-up">
                    <div className="row">
                        <div className="col-8 online-training-info-div">
                            <h3>We are Training Online</h3>
                            <h5>Book Your Free One Hour Training Session Now!</h5>
                            <button onClick={bookNow} className="btn" id="online-training-book-btn">BookNow  <i class="fas fa-play"></i></button>
                        </div>
                        <div className="col-4 online-training-img-div">
                            <img src={online} alt="" id="online-training-img" />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-4 card-div" data-aos="fade-right" data-aos-offset="120">

                        <div class="card">
                            <img src={strength} class="card-img-top" alt="" />
                            <div class="card-body">
                                <h5 class="card-title">Strength Training</h5>
                                <p class="card-text">Coustomized Training Plane + Free one month Diet Plan</p>
                                <button value="strength" onClick={enrolNow} class="btn btn-primary">EnrolNow <i class="fas fa-dumbbell"></i></button>
                            </div>
                        </div>

                    </div>
                    <div className="col-lg-4 col-md-4 card-div" data-aos="fade-up" data-aos-offset="120">

                        <div class="card">
                            <img src={crossfit} class="card-img-top" alt="" />
                            <div class="card-body">
                                <h5 class="card-title">Crossfit Training</h5>
                                <p class="card-text">Coustomized Training Plane + Free one month Diet Plan</p>
                                <button value="crossfit" onClick={enrolNow} class="btn btn-primary">EnrolNow <i class="fas fa-dumbbell"></i></button>
                            </div>
                        </div>
                        
                    </div>
                    <div className="col-lg-4 col-md-4 card-div" data-aos="fade-left" data-aos-offset="120">
                        <div class="card">
                            <img src={cardio} class="card-img-top" alt="" />
                            <div class="card-body">
                                <h5 class="card-title">Cardio Training</h5>
                                <p class="card-text">Coustomized Training Plane + Free one month Diet Plan</p>
                                <button value="cardio" onClick={enrolNow} class="btn btn-primary">EnrolNow <i class="fas fa-dumbbell"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Training;
