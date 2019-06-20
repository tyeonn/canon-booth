import React from 'react';
import { Link } from 'react-router-dom';
import SettingsOptions from './settings_option';
import UploadModal from './UploadModal';

class Settings extends React.Component {

    render() {
        return (
            <div className="settings-page">
                <div className="phone-info-bar">
                    {/* <h1 className="phone-info-description">Choose The Look You Want</h1> */}
                    {/* <h1 className="phone-info-description">LIFESTYLE</h1> */}
                        <h1 className="icon-chevron"><Link to="/phone">{'<'}</Link></h1>
                    <h1 className="phone-info-description">{this.props.location.state.preset}</h1>
                </div>
                {/* <div className="settings-top">
                    <p className="settings-text">Adjust the filters and see how you look on the photobooth screen! Once you're satisfied, just take a picture using the shutter button below.</p>
                    <h2 className="settings-title">Lifestyle&nbsp;<UploadModal /></h2>
                </div> */}
                <p className="settings-text">Adjust the filters and see how you look on the photobooth screen! Once you're satisfied, just take a picture using the shutter button below.</p>
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
                            <SettingsOptions number={60} field="AV"/>
                            <SettingsOptions number={44} field="TV"/>
                            <SettingsOptions number={40} field="ISO"/>
                            <SettingsOptions number={75} field="Exposure"/>
                            <SettingsOptions number={20} field="White Balance"/>
                        </div>
                        {/* <div className="settings-toggle-bar"></div> */}
                    </div>
                </div>
                <div className="settings-footer">
                    <div className="gallery-button"><img className="gallery-preview" src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2734&q=80" alt=""/></div>
                    <button className="camera-button"><div className="inner-circle"></div></button>
                </div>
            </div>
        )
    }
}


export default Settings;