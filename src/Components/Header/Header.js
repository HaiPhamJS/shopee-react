import React from 'react';
import HeaderTop from './HeaderTop';
import HeaderMid from './HeaderMid';
import HeaderBottom from './HeaderBottom';

import '../../Css/header.css';

const Header = () => {
    return (
        <div className="header container-fluid">
            <div className="container">
                <HeaderTop />
                <HeaderMid />
                <HeaderBottom />
            </div>
        </div>
    )
}

export default Header
