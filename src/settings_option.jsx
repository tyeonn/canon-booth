import React from 'react';
import Slider from 'react-rangeslider';
import 'react-rangeslider/lib/index.css';

class SettingsOptions extends React.Component {
    constructor(props, context) {
        super(props, context)
        this.state = {
            number: 0
        }
    }

    handleOnChange = (value) => {
        this.setState({
            number: value
        })
    }

    render() {
        let { number } = this.state;
        return (
            <div className="settings-option-item-each">
                <Slider className="settings-slider"
                    value={number}
                    orientation="horizontal"
                    onChange={this.handleOnChange}
                    min={0}
                    max={100}
                    step={1}
                />
            </div>
        )
    }
}

export default SettingsOptions;

// class SettingsOptions extends React.Component {
//     constructor(props) {
//         super(props);
//     }

//     render() {
//         return (
//             <div className="settings-option-item">
//                 <div className="settings-option-item-each">
//                     <div className="settings-option-item-numbers">
//                         <p>0</p>
//                         <p>50</p>
//                         <p>100</p>
//                     </div>
//                     <div className="settings-option-item-bar"></div>
//                 </div>
//                 <div className="settings-option-item-each">
//                     <div className="settings-option-item-numbers">
//                         <p>0</p>
//                         <p>50</p>
//                         <p>100</p>
//                     </div>
//                     <div className="settings-option-item-bar"></div>
//                 </div>
//                 <div className="settings-option-item-each">
//                     <div className="settings-option-item-numbers">
//                         <p>0</p>
//                         <p>50</p>
//                         <p>100</p>
//                     </div>
//                     <div className="settings-option-item-bar"></div>
//                 </div>
//                 <div className="settings-option-item-each">
//                     <div className="settings-option-item-numbers">
//                         <p>0</p>
//                         <p>50</p>
//                         <p>100</p>
//                     </div>
//                     <div className="settings-option-item-bar"></div>
//                 </div>
//                 <div className="settings-option-item-each">
//                     <div className="settings-option-item-numbers">
//                         <p>0</p>
//                         <p>50</p>
//                         <p>100</p>
//                     </div>
//                     <div className="settings-option-item-bar"></div>
//                 </div>
//                 <div className="settings-option-item-each">
//                     <div className="settings-option-item-numbers">
//                         <p>0</p>
//                         <p>50</p>
//                         <p>100</p>
//                     </div>
//                     <div className="settings-option-item-bar"></div>
//                 </div>
//                 {/* <div className="settings-option-item-bar-drag"></div> */}
//             </div>
//         )
//     }

// }

// export default SettingsOptions;

// const SettingsOptions = () => {
//     return (
//         <div className="settings-option-item-bar">
//             <Slider 
//                 style={{ width: 200, height: 40 }}
//                 minimumValue={0}
//                 maximumValue={100}
//                 minimumTrackTintColor="#FFFFFF"
//                 maximumTrackTintColor="#000000" step={5} />
//         </div>
//     )
// };

// export default SettingsOptions;