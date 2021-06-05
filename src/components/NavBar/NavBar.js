import React from "react";
import {Link} from "react-router-dom";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faBars } from'@fortawesome/free-solid-svg-icons';
import './NavBar.css'

export default function NavBar() {
    return(
        <div className="nav-bar">
          <div className='icon-wrapper'>
        {/* <button className='icon' id='nav-button' onClick={e => this.handleNav()}><FontAwesomeIcon icon={faBars}/>{' '}</button> */}
        </div>
        <ul id='menu' className='menu'>
            <li className="logo"><Link to={'/'}>Home</Link></li>
            <li><Link to={'/project'}>Create Project</Link></li>
            <li><Link to={'/tutorial'}>Tutorial</Link></li>
            <li><Link to={'/sign-in'}>Sign In/Out</Link></li>
            <li><Link to={'/sign-up'}>Create Account</Link></li>
        </ul>
        
        </div>
    )
}
