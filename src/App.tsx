import React from 'react';

import Header from './components/Header'
import Footer from './components/Footer'
import LiveFootballEvents from './features/LiveFootballEvents';
import styles from './app.module.scss';

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
