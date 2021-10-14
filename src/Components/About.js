import React, { useState } from 'react'
import aboutImg from '../Images/about-img.png';
import HireModal from './Ui/HireModal';

import './About.css'

function About() {

    const [price, setprice] = useState(false);

    const hireNowHandler = () => {
        setprice(true)
    };

    const hireLaterHandler = () => {
        setprice(false)
    }

    return (
        <React.Fragment>

        {price && <HireModal onConfirm={hireLaterHandler} />}
        
        <div className="container-fluid about-div" id="about">
            <div className="row">
                <div className="col-lg-6 about-info-div">
                    <h1>I am Your Name</h1>
                    <h5>"Fitness to me is a self Love It’s so important to remember that exercising is an act of self-love. The more of it you have for yourself, the more likely
                    you are to stick to your goals. Our bodies naturally want to move, so show yourself some love by working up a sweat!"</h5>

                    <h4>Speciality</h4>
                    <span className="speciality-type">Fat-Loss</span>
                    <span className="speciality-type">General well being</span>
                    <span className="speciality-type">Transformation</span>

                    <h4>Intersted In</h4>
                    <span className="speciality-type">Body Building</span>

                    <button className="btn btn-primary enrol-btn" onClick={hireNowHandler}>HireNow <i class="fas fa-dumbbell"></i></button>
                </div>
                <div className="col-lg-6 about-img-div">
                    <img src={aboutImg} alt="" />
                </div>
            </div>
        </div>
        </React.Fragment>
    )
}

export default About;
