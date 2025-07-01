import logo from './logo.svg';
import './main.css';
import React from 'react';
import Listing from './components/Listing';
import items from "./data/items";   



function App() {
  return (
    <div className="App">
      <Listing />
    </div>
  );
}

export default App;
