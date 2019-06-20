import React from 'react';
import PhoneNav from './PhoneNav';
import PresetItem from './PresetItem';
import { Route, Link, Switch } from 'react-router-dom';

function PresetIndex(prop) {
    return(
        <div>
            {/* <PhoneNav/> */}
            <div className="phone-info-bar">
                {/* <h1 className="phone-info-description">Choose The Look You Want</h1> */}
                <h1 className="phone-info-description">CHOOSE THE LOOK YOU WANT</h1>
            </div>
            <div className="phone-preset-index">
                <Link to="/settings">
                    <PresetItem title="Professional" description="Sharp, clean, and powerful image settings." url="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2734&q=80"/>
                </Link>
                <PresetItem title="Lifestyle" description="Low saturation and highlight reduction for a more casual feel" url="https://images.unsplash.com/photo-1506863530036-1efeddceb993?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2741&q=80"/>
                <PresetItem title="Grayscale" description="Sharp, clean, and powerful image settings." url="https://images.unsplash.com/photo-1534385842125-8c9ad0bd123c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2734&q=80"/>
                <PresetItem title="Fashion" description="Sharp, clean, and powerful image settings." url="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2734&q=80"/>
                <PresetItem title="Professional" description="Sharp, clean, and powerful image settings." url="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2734&q=80"/>
                <PresetItem title="Lifestyle" description="Low saturation and highlight reduction for a more casual feel" url="https://images.unsplash.com/photo-1506863530036-1efeddceb993?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2741&q=80"/>
            </div>
        </div>
    )
}

export default PresetIndex;