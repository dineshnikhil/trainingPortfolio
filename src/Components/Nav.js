import React, { useState } from 'react'
import './Nav.css'
import HireModal from './Ui/HireModal';

function Nav() {

    const [price, setprice] = useState(false);

    const hireNowHandler = () => {
        setprice(true)
    };

    const hireLaterHandler = () => {
        setprice(false)
    }

    return (
        <div>
            {price && <HireModal onConfirm={hireLaterHandler} />}
            <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#home">Fitzz</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav ms-auto">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#home">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" href="#about">About</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" href="#training">Training</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" href="#contact">Contact</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" href="#explore">Explore</a>
                            </li>
                            <li class="nav-item">
                                <button class="btn btn-primary hire-btn" onClick={hireNowHandler}>HireNow</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Nav;
