import React from 'react'
import './Home.css'

// importing images..
import homeImg from '../Images/home-img.png';

function Home() {
    return (
        <div className="container-fluid home-div" id="home">
            <div className="row">
                <div className="col-lg-6 col-md-6 home-img-div">
                    <img src={homeImg} id="home-img" alt="a man running and with background about his stats of fitness" />
                </div>
                <div className="col-lg-6 col-md-6 home-info-div">
                    <h1>Look And Feel Better With Personalized Training</h1>
                    <h4>Define your own goals and work towards them from anywhere, at any time, however you’d like.</h4>
                    <a className="btn btn-primary learn-btn" href="#training">Learn More <i class="fas fa-arrow-right"></i></a>
                </div>
            </div>
        </div>
    )
}

export default Home;
