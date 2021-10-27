import React from 'react'

import Nav from './Nav';
import Home from './Home';
import About from './About';
import Training from './Training';
import Contact from './Contact';
import Footer from './Footer';
import Explore from './Calculation/Explore';

function Main() {
    return (
        <div>
            <Nav />
            <Home />
            <About />
            <Training />
            <Contact />
            <Explore />
            <Footer />
        </div>
    )
}

export default Main
