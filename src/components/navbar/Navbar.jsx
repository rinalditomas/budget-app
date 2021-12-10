import React from 'react'
import './Navbar.css'
const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="navbar-header">
            <img className='profile-img' src="https://st3.depositphotos.com/4111759/13425/v/600/depositphotos_134255532-stock-illustration-profile-placeholder-male-default-profile.jpg" alt="" />
            <p className='user-name'>Name Name</p>
            </div>
            <div className="navbar-menu">
                <div className="menu-option">
                <i class="far fa-eye menu-icon"></i>
                <a className='icon' href="">Overview</a>
                </div>
                <div className="menu-option">
                <i class="far fa-chart-bar menu-icon"></i>
                <a className='icon' href="">Graph</a>
                </div>
                <div className="menu-option">
                <i class="fas fa-cog menu-icon"></i>
                <a  href="">Settings</a>
                </div>
                
                
            </div>
            
        </div>
    )
}

export default Navbar
