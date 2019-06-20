import React from 'react';
import SettingsOptions from './settings_option';
import upload from './images/upload.png';
import UploadModal from './UploadModal';

class Settings extends React.Component {

    render() {
        return (
            <div className="settings-page">
                <div className="settings-top">
                    <h2 className="settings-title">Lifestyle&nbsp;<UploadModal /></h2>
                </div>
                <p className="settings-text">Adjust the filters and see how you look on the photobooth screen! Once you're satisfied, just take a picture using the shutter button below.</p>
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