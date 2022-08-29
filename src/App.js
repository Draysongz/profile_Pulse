import React from 'react';
import './App.css';
import Profile from './components/Profile';




const App =()=> {
  return (
    <div className='App'>
      <h1 className='Heading'>profile <br /> <span className='pulse'>PULSE</span> </h1>
      <Profile></Profile>
    </div>
  )
}

export default App