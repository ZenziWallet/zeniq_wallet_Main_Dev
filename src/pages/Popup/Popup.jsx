import React from 'react';
import Header from '../../containers/Greetings/Header';
import Greetings from '../../containers/Greetings/Greetings';
import './Popup.css';

const Popup = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <Greetings />
      </header>
    </div>
  );
};

export default Popup;
