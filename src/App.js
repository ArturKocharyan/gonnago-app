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
      <div style={{display:"flex", height: '500px'}} ></div>
      <Footer />
    </div>
  );
}

export default App;
