import React from 'react';

import Header from './components/Header';
import About from './components/About';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Portfolio from './components/Portfolio';
import Hobbies from './components/Hobbies';
import Coordinates from './components/Coordinates';
import './App.scss'

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Coordinates />
      <Experience />
      <Portfolio />
      <Hobbies />
      <Contact />
      <Footer />
    </>
  );
};

export default App;