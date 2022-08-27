import React from 'react';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import LiveFootballEvents from './features/LiveFootballEvents/LiveFootballEvents';
import styles from './App.module.scss';

const App = () => {
  return (
    <div className={styles.appContainer}>
        <Header />
        <LiveFootballEvents />
        <Footer />
    </div>
  );
}

export default App;
