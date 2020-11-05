import React from 'react'

import logo from '../../assets/images/logo.png';
import './MobileHeader.css';

function MobileHeader() {
    return (
        <div className="mobile-header">
            <a className="humburger" href="#">
                <i class="fas fa-bars"></i>
            </a>
            <a className="mobile-logo" href="#">
                <img className="mobile-logo__img" src={logo} alt="mobile logo" />
            </a>
        </div>
    )
}

export default MobileHeader
