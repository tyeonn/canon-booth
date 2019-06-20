import React from 'react';
// import SliderBar from './settings_option';
import SettingsOptions from './settings_option';

class Settings extends React.Component {
    constructor(props) {
        super(props);

        // this.state = {
        //     show: false
        // };
    }

    render() {
        return (
            <div className="settings-page">
                <div className="phone-info-bar">
                    {/* <h1 className="phone-info-description">Choose The Look You Want</h1> */}
                    {/* <h1 className="phone-info-description">LIFESTYLE</h1> */}
                    <h1 className="phone-info-description">{this.props.location.state.preset}</h1>
                </div>
                <div className="settings-top">
                    <p className="settings-text">Adjust the filters and see how you look on the photobooth screen! Once you're satisfied, just take a picture using the shutter button below.</p>
                </div>
                <div className="settings-options">
                    <div className="settings-left-side">
                        <p>Saturation</p>
                        <p>Highlights</p>
                        <p>Polarization</p>
                        <p>Aperature</p>
                        <p>Brightness</p>
                        <p>Contrast</p>
                        {/* <p>Shutter&nbsp;Speed</p> */}
                    </div>
                    <div className="settings-right-side">
                        <div className="settings-toggle-bar">
                            <SettingsOptions number={50} />
                            <SettingsOptions number={42} />
                            <SettingsOptions number={71} />
                            <SettingsOptions number={28} />
                            <SettingsOptions number={63} />
                            <SettingsOptions number={25} />
                        </div>
                        {/* <div className="settings-toggle-bar"></div> */}
                    </div>
                </div>
            </div>
        )
    }
}


export default Settings;