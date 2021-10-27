import React, { useState } from 'react'
import './Nav.css'
import HireModal from './Ui/HireModal';
import NavModal from './Ui/NavModal';

function Nav() {

    const [price, setprice] = useState(false);
    const [navToggle, setNavToggle] = useState(false);

    const navShow = () => {
        setNavToggle(true);
    }

    const navHide =  () => {
        setNavToggle(false);
    }

    const hireNowHandler = () => {
        setprice(true)
    };

    const hireLaterHandler = () => {
        setprice(false)
    }


    return (
        <div>
            {price && <HireModal onConfirm={hireLaterHandler} />}
            {navToggle && <NavModal onConfirm={navHide} />}
            <nav>
                <a href="/" className="nav-brand">Fitzz</a>
                
                <ul>
                    <li>
                        <a className="scrollto active" href="#home">Home</a>
                    </li>
                    <li>
                        <a className="scrollto" href="#about">About</a>
                    </li>
                    <li>
                        <a className="scrollto" href="#training">Training</a>
                    </li>
                    <li>
                        <a className="scrollto" href="#contact">Contact</a>
                    </li>
                    <li>
                        <a className="scrollto" href="#explore">Explore</a>
                    </li>
                    <li>
                        <button className="hire-btn" onClick={hireNowHandler}>Hire <i class="fas fa-dumbbell"></i></button>
                    </li>
                </ul>

                <button onClick={navShow} class="nav-toggler"><i class="fas fa-grip-lines"></i></button>
            </nav>
        </div>
    )
}

export default Nav;
