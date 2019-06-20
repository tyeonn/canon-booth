import React from 'react';
import Slider from 'react-rangeslider';
import 'react-rangeslider/lib/index.css';

class SettingsOptions extends React.Component {
    constructor(props, context) {
        super(props, context)
        this.state = {
            number: props.number,
            field: props.field,
            ranges: [],
        }
    }

    componentDidMount() {
       switch(this.state.field) {
        case "AV" : 
            this.setState({
                ranges: settings["av"]["ability"]
            })
            break;
        case "TV" :
            this.setState({
                ranges: settings["tv"]["ability"]
            })
            break;
        case "ISO" :
            this.setState({
                ranges: settings["iso"]["ability"]
            })
            break;
        case "Exposure" :
            this.setState({
                ranges: settings["exposure"]["ability"]
            }) 
            break; 
        case "White Balance" : 
            this.setState({
                ranges: settings["wb"]["ability"]
            })
            break;
        default:
            break;
       }
    }

    handleOnChange = (value) => {
        this.setState({
            number: value
        })
        // let defaultOptions = {
        //     url:'',
        //     method:'PUT',
        //     mode: 'cors',
        //     headers:{
        //     'Access-Control-Allow-Origin':'*'
        //     },
        //     body:null,
        // };
        // this.setState({
        //     number: value
        // })
        switch(this.state.field) {
            case "AV" : 
                // fetch("http://192.168.1.2:8080/ccapi/ver100/shooting/settings/av", {
                //     method: "PUT",
                //     body: JSON.stringify({
                //         value: settings["av"][100/value]
                //     }),
                //     // mode: "no-cors"
                // })
                break;
            case "TV" :
                break;
            case "ISO" :
                break;
            case "Exposure" : 
                break; 
            case "White Balance" : 
                break;
            default:
                break;
        }
    }

    render() {
        let { number } = this.state;
        return (
            <div className="settings-option-item">
                <div className="settings-option-item-each">
                    <Slider 
                        className="settings-slider"
                        value={number}
                        orientation="horizontal"
                        onChange={this.handleOnChange}
                        min={0}
                        max={100} 
                        step={100 / (this.state.ranges ? (this.state.ranges.length - 1) : (1))}
                    />
                </div>
            </div>
        )
    }
}

export default SettingsOptions;

const settings = {
    "av": {
        "value": "f4.0",
        "ability": [
            "f3.4",
            "f4.0",
            "f4.5",
            "f5.0",
            "f5.6",
            "f6.3",
        ]
    },
    "tv": {
        "value": "1/125",
        "ability": [
            "1/4",
            "1/5",
            "1/6",
            "1/8",
            "1/10",
            "1/13",
            "1/15",
            "1/20",
            "1/25",
            "1/30",
            "1/40",
            "1/50",
            "1/60",
            "1/80",
            "1/100",
            "1/125",
            "1/160",
            "1/200",
            "1/250",
            "1/320",
            "1/400",
            "1/500",
            "1/640",
            "1/800",
            "1/1000",
            "1/1250",
        ]
    },
    "iso": {
        "value": "auto",
        "ability": [
            "100",
            "125",
            "160",
            "200",
            "250",
            "320",
        ]
    },
    "exposure": {
        "value": "+0.0",
        "ability": [
            "-0_2/3",
            "-0_1/3",
            "+0.0",
            "+0_1/3",
            "+0_2/3",
        ]
    },
    "wb": {
        "value": "auto",
        "ability": [
            "auto",
            "daylight",
            "shade",
            "cloudy",
            "tungsten",
            "whitefluorescent",
        ]
    },
}

// class SettingsOptions extends React.Component {
//     constructor(props) {
//         super(props);
//     }

//     render() {
//         let { number } = this.state;
//         return (
//             <div className="settings-option-item-each">
//                 <div className="settings-option-item-saturation">
//                     <div className="settings-option-item-numbers">
//                         <p>0</p>
//                         <p>50</p>
//                         <p>100</p>
//                     </div>
//                     <Slider
//                         className="settings-slider"
//                         value={number}
//                         orientation="horizontal"
//                         onChange={this.handleOnChange}
//                     />
//                 </div>
//                 <div className="settings-option-item-highlights">
//                     <div className="settings-option-item-numbers">
//                         <p>0</p>
//                         <p>50</p>
//                         <p>100</p>
//                     </div>
//                     <Slider
//                         className="settings-slider"
//                         value={number}
//                         orientation="horizontal"
//                         onChange={this.handleOnChange}
//                     />
//                 </div>
//                 <div className="settings-option-item-polarization">
//                     <div className="settings-option-item-numbers">
//                         <p>0</p>
//                         <p>50</p>
//                         <p>100</p>
//                     </div>
//                     <Slider
//                         className="settings-slider"
//                         value={number}
//                         orientation="horizontal"
//                         onChange={this.handleOnChange}
//                     />
//                 </div>
//                 <div className="settings-option-item-aperature">
//                     <div className="settings-option-item-numbers">
//                         <p>0</p>
//                         <p>50</p>
//                         <p>100</p>
//                     </div>
//                     <Slider
//                         className="settings-slider"
//                         value={number}
//                         orientation="horizontal"
//                         onChange={this.handleOnChange}
//                     />
//                 </div>
//                 <div className="settings-option-item-brightness">
//                     <div className="settings-option-item-numbers">
//                         <p>0</p>
//                         <p>50</p>
//                         <p>100</p>
//                     </div>
//                     <Slider
//                         className="settings-slider"
//                         value={number}
//                         orientation="horizontal"
//                         onChange={this.handleOnChange}
//                     />
//                 </div>
//                 <div className="settings-option-item-contrast">
//                     <div className="settings-option-item-numbers">
//                         <p>0</p>
//                         <p>50</p>
//                         <p>100</p>
//                     </div>
//                     <Slider
//                         className="settings-slider"
//                         value={number}
//                         orientation="horizontal"
//                         onChange={this.handleOnChange}
//                     />
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