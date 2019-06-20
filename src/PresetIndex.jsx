import React from 'react';
// import PhoneNav from './PhoneNav';
import PresetItem from './PresetItem';
import { Link } from 'react-router-dom';
import Classic from './images/classic.jpg';
import Deep from './images/dark.jpg';
import Fashion from './images/fashion.jpg';
import Grayscale from './images/grayscale.jpeg';
import Lifestyle from './images/lifestyle.jpg';
import Light from './images/light.jpg';
import Professional from './images/professional.png';

function PresetIndex(prop) {
    return(
        <div>
            {/* <PhoneNav/> */}
            <div className="phone-info-bar">
                {/* <h1 className="phone-info-description">Choose The Look You Want</h1> */}
                <h1 className="phone-info-description">CHOOSE THE LOOK YOU WANT</h1>
            </div>
            <div className="phone-preset-index">
                <Link to={{
                    pathname: '/phone/settings',
                    state: {
                        preset: "Professional"
                    }
                }}>
                    <PresetItem title="Professional" description="Sharp, clean, and powerful image settings." url={Professional}/>
                </Link>
                <Link to={{
                    pathname: '/phone/settings',
                    state: {
                        preset: "Lifestyle"
                    }
                }}>
                    <PresetItem title="Lifestyle" description="Low saturation and highlight reduction for a more casual feel." url={Lifestyle}/>
                </Link>
                <Link to={{
                    pathname: '/phone/settings',
                    state: {
                        preset: "Grayscale"
                    }
                }}>
                    <PresetItem title="Grayscale" description="For those that love the look of black and white photos." url={Grayscale}/>
                </Link>
                <Link to={{
                    pathname: '/phone/settings',
                    state: {
                        preset: "Fashion"
                    }
                }}>
                    <PresetItem title="Fashion" description="High color saturation and wide focus to capture your style." url={Fashion}/>
                </Link>
                <Link to={{
                    pathname: '/phone/settings',
                    state: {
                        preset: "Classic"
                    }
                }}>
                    <PresetItem title="Classic" description="Lower contrast and faded filtering for a vintage feel" url={Classic} />
                </Link>
                <Link to={{
                    pathname: '/phone/settings',
                    state: {
                        preset: "Light"
                    }
                }}>
                    <PresetItem title="Light" description="Bright lights to show off that bright smile" url={Light} />
                </Link>
                <Link to={{
                    pathname: '/phone/settings',
                    state: {
                        preset: "Deep"
                    }
                }}>
                    <PresetItem title="Deep" description="Darker tones for those that want a more serious look" url={Deep}/>
                </Link>
                <Link to={{
                    pathname: '/phone/settings',
                    state: {
                        preset: "None"
                    }
                }}>
                    <PresetItem title="None" description="You don't need presets and want to adjust settings freely" url="" />
                </Link>
            </div>
        </div>
    )
}

export default PresetIndex;