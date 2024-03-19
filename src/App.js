import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { getMenu, getMenuStatus } from './redux/slices/menuSlice';
import Navigation from './pages/Navigation/Navigation';
import Menu from './pages/Menu/Menu';
import { getCities, getCitiesStatus } from './redux/slices/citiesSlice';
import Footer from './pages/Footer/Footer';

function App() {

  const dispatch = useDispatch()
  const menuStatus = useSelector(getMenuStatus)
  const citiesStatus = useSelector(getCitiesStatus)

  useEffect(() => {
    if (menuStatus === 'idle') {
      dispatch(getMenu());
    }
  }, [menuStatus, dispatch]);

  useEffect(() => {
    if (citiesStatus === 'idle') {
      dispatch(getCities())
    }
  }, [citiesStatus, dispatch])
  return (
    <div className="App">
      <Navigation />
      <Menu />
      <div style={{display:"block", height: '500px'}} ></div>
      <Footer />
    </div>
  );
}

export default App;
