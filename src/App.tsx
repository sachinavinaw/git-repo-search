import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar';
import Search from './components/search';


function App() {
  
  return (
    <div className="App">
      <Navbar/>
      <Search/> 
    </div>
  );
}

export default App;

