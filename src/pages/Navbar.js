import React from 'react';
import '../styles/navbar.css';
import {Link} from 'react-router-dom';

const Navbar = () => {
	return (
		<nav>
		    <div className="nav-wrapper">
		      <Link to='/'><img className="logo" src="logo.png" /> <a className="brand-logo">BITE SIZE VOTER</a></Link>
		    </div>
		</nav>
	);
}


export default Navbar;