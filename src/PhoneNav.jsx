import React from 'react';
import useEnd from './useEnd';
import End from './End';

const PhoneNav = () => {
    const {isShowing, toggle} = useEnd();
    return (
        <div className="phone-nav">
            <img className="phone-nav-logo" alt="lol" src="https://files.slack.com/files-pri/TKGNK8SBT-FKS5JA7TR/canon_booth_logo_-__1.png"></img>
            <button onClick={toggle} className="end-session-button">End Session</button>
            <End 
                isShowing={isShowing}
                hide={toggle}
            />
        </div>
    );
};

export default PhoneNav;