import React from 'react';
import useEnd from './useEnd';
import End from './End';
import logo from './images/logo.png';

const PhoneNav = () => {
    const {isShowing, toggle} = useEnd();
    return (
        <div className="phone-nav">
            <img className="phone-nav-logo" alt="lol" src={logo}></img>
            <button onClick={toggle} className="end-session-button">End Session</button>
            <End 
                isShowing={isShowing}
                hide={toggle}
            />
        </div>
    );
};

export default PhoneNav;