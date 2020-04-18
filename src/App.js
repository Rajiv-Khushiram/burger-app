import React from 'react';
import Layout from './containers/hoc/Layout/Layout'
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder'
// import logo from './logo.svg';
// import Header from './components/Header/Header'

// import styles from './App.module.css';

function App() {
  return (
    <div>
      {/* <div className={styles.Appheader}>We are styled!</div>
      
      
      <Header/> */}
    <Layout>
      <BurgerBuilder/>
      </Layout>
    </div>
  );
}

export default App;
