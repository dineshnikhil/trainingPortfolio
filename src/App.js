import React, { useState, useEffect } from 'react';
import './App.css';


import Main from './Components/Main';
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
      <Main />
    </React.Fragment>
  );
}

export default App;
