import React from 'react'
import './Home.css'

// importing images..
import homeImg from '../Images/home-img.png';

function Home() {
    return (
        <div className="container-fluid home-div" id="home">
            <div className="row">
                <div className="col-lg-6 home-img-div">
                    <img src={homeImg} id="home-img" alt="a man running and with background about his stats of fitness" />
                </div>
                <div className="col-lg-6 home-info-div">
                    <h1>Park Before Arriving</h1>
                    <h4>More than 1,000,000 drivers have now booked with BookPark</h4>
                </div>
            </div>
        </div>
    )
}

export default Home;
