import React from 'react';
import './App.css';
import Header from './components/header'
import LiveFootballEvents from './features/liveEvents/footballEvents';

const App = () => {
  return (
    <div className="App">
     <Header />
        <LiveFootballEvents />
    </div>
  );
}

export default App;
