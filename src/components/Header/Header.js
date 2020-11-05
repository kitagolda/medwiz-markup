import React from 'react'

import logo from '../../assets/images/logo.png';
import './Header.css';

function Header() {
    return (
        <nav className="navbar">
            <a href="#" className="navbar-brand">
                <img className="navbar-brand-logo" src={logo} alt="logo" />
            </a>
            <div className="navbar-usefull">
                <div className="navbar-searchline">
                    <form className="form-inline">
                        <input className="form-input" type="input" placeholder="Search" aria-label="Search" />
                        <button className="search-btn" type="submit"><i className="btn-search fas fa-search"></i></button>
                    </form>
                    <a href="#" className="navbar-bookmarks">
                        <i class="navbar-icon far fa-bookmark"></i>
                    </a>
                    <a href="#" className="navbar-notifications">
                        <i class="navbar-icon far fa-bell"></i>
                    </a>
                </div>
                <div className="account">
                    <img className="account-img" src="https://images.unsplash.com/photo-1544507888-56d73eb6046e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" alt="account img" />
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown">
                        Anna
                    </a>
                    <div class="dm dropdown-menu" aria-labelledby="navbarDropdown">
                        <a className="dropdown-item" href="#">Account <i class="fas fa-user fas-dropdown"></i></a>
                        <a className="dropdown-item" href="#">Settings <i class="fas fa-sliders-h fas-dropdown"></i></a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" href="#">Logout <i class="fas fa-sign-out-alt fas-dropdown"></i></a>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Header
