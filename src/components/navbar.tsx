import React from 'react';
import logo from '../logo.svg';

const Navbar = () => {
    return ( 
        <nav className="navbar navbar-dark bg-dark">
            <div className="container-fluid">
                <div className="navbar-brand">
                <img src={logo} className="App-logo" alt="logo" />
                GitHub
                </div>
            </div>
        </nav>
     );
}
 
export default Navbar;