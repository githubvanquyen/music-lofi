import React from 'react';
import Header from './Header'
import Background from './Background';
import AppContextProvider from '../../Provider/AppContext';
import Navigate from './Navigate/Navigate';
import NavigateContextProvider from '../../Provider/NavigateContext';
const Home = () => {
  return(
    <>
    <AppContextProvider>
      <Background/>
      <Header/>
      <Navigate/>
    </AppContextProvider>
    </>
  )
};

export default Home;
