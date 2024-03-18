import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { getMenu, getMenuStatus } from './redux/slices/menuSlice';
import Navigation from './pages/Navigation/Navigation';
import Menu from './pages/Menu/Menu';

function App() {

  const dispatch = useDispatch()
  const menuStatus = useSelector(getMenuStatus)

  useEffect(() => {
    if (menuStatus === 'idle') {
      dispatch(getMenu());
    }
  }, [menuStatus, dispatch]);
  return (
    <div className="App">
      <Navigation />
      <Menu />
    </div>
  );
}

export default App;
