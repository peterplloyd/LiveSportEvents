import React from 'react';

import Header from './components/header'
import LiveFootballEvents from './features/LiveFootballEvents';
import styles from './app.module.scss';

const App = () => {
  return (
    <div className={styles.appContainer}>
        <Header />
        <LiveFootballEvents />
    </div>
  );
}

export default App;
