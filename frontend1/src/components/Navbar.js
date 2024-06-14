import React from "react";
import { Link } from 'react-router-dom';


function Navbar () {
    return (
        <div className="navbar">
            <nav>
                <ul>
                    <li><Link to="home">Home</Link></li>
                    <li><Link to="/events">Events</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/services">Services</Link></li>
                    <li><Link to="/scavenger">Scavenger</Link></li>
                    <li><Link to="/donate">Donate</Link></li>
                </ul>
            </nav>
        </div>
    );
}
    

export default Navbar;