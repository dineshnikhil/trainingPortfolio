import React from 'react'
import './Footer.css'

import worldImg from '../Images/footer-map.png'

function Footer() {
    return (
        <div className="container-fluid footer-div">
            <div className="row" >
                <div className="col-lg-6 footer-brand-div">
                    <h1>Fitzz</h1>
                    <h3>By your Name</h3>
                    <i className="fab fa-instagram"></i>
                    <i className="fab fa-twitter"></i>
                    <i className="fab fa-youtube"></i>
                </div>
                <div className="col-lg-6 footer-explore-div">
                    <div className="row">
                        <div className="col-lg-6 footer-explore-img-div">
                            <img src={worldImg} alt="" id="world-map" />
                        </div>
                        <div className="col-lg-6 footer-explore-info-div">
                            <h4>Explore</h4>
                            <ul>
                                <li><a href="#home">Home</a></li>
                                <li><a href="#about">About</a></li>
                                <li><a href="#training">Training</a></li>
                                <li><a href="#contact">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copyrights">
                <p>Copyright Fitzz. All Rights Reserved</p>
                <p>Designed By DineshNikhil</p>
            </div>
        </div>
    )
}

export default Footer;
