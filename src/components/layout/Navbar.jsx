import React from 'react';
import { Link } from 'react-router-dom';
import SignInLinks from './SignInLinks';
import SignOutInLinks from './SignOutLinks';

const Navbar = () => { 
  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        <Link to='/' className='brand-logo'>MikleAmazingApp</Link>
        <SignInLinks />
        <SignOutInLinks />
      </div>
    </nav>
  )
}


export default Navbar;