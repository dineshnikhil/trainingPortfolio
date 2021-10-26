import React, { useState, useEffect } from 'react';
import './App.css';

import Nav from './Components/Nav';
import Home from './Components/Home';
import About from './Components/About';
import Training from './Components/Training';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Explore from './Components/Calculation/Explore';

import FirstVistModal from './Components/Ui/FirstVistModal';

function App() {
  const [isFirstVisit, setIsFirstVisit] = useState(false);

  useEffect(() => {
    setIsFirstVisit(true)
  }, []);

  function vistHandler() {
    setIsFirstVisit(false);
  }


  return (
    <React.Fragment>
      {isFirstVisit && <FirstVistModal onConfirm={vistHandler} /> }
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
