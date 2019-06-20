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

    handleChange(field) {

    }

    render() {
        return (
            <div className="settings-page">
                <div className="settings-top">
                    <h2 className="settings-title">Lifestyle</h2>
                    <p className="settings-text">Adjust the filters and see how you look on the photobooth screen! Once you're satisfied, just take a picture using the shutter button below.</p>
                </div>
                <div className="settings-options">
                    <div className="settings-left-side">
                        <p>AV</p>
                        <p>TV</p>
                        <p>ISO</p>
                        <p>Exposure</p>
                        <p>White Balance</p>
                        {/* <p>Shutter&nbsp;Speed</p> */}
                    </div>
                    <div className="settings-right-side">
                        <div className="settings-toggle-bar">
                            <SettingsOptions number={50} field="AV"/>
                            <SettingsOptions number={42} field="TV"/>
                            <SettingsOptions number={71} field="ISO"/>
                            <SettingsOptions number={28} field="Exposure"/>
                            <SettingsOptions number={63} field="White Balance"/>
                        </div>
                        {/* <div className="settings-toggle-bar"></div> */}
                    </div>
                </div>
            </div>
        )
    }
}


export default Settings;