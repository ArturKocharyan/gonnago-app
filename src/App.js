import React from 'react';
import './App.css';
import Navigation from './pages/Navigation/Navigation';
import Menu from './pages/Menu/Menu';
import Footer from './pages/Footer/Footer';

function App() {

  return (
    <div className="App">
      <Navigation />
      <Menu />
      <div className="Stub_div" ></div>
      <Footer />
    </div>
  );
}

export default App;
