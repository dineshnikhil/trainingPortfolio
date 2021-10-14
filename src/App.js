import React from 'react';
import './App.css';

import Nav from './Components/Nav';
import Home from './Components/Home';
import About from './Components/About';
import Training from './Components/Training';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Explore from './Components/Calculation/Explore';

function App() {
  return (
    <React.Fragment>
      <Nav />
      <Home />
      <About />
      <Training />
      <Contact />
      <Explore />
      <Footer />
    </React.Fragment>
  );
}

export default App;
