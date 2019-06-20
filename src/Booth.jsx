import React from 'react';

class Booth extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            tick: 0,
            img: "http://172.20.10.13:8080/ccapi/ver100/shooting/liveview/flip",
        }
        this.shutter = this.shutter.bind(this);
    }

    componentDidMount() {
        // debugger
        // var interval = setInterval(() => {
        //     document.location.reload();
        
        // }, 1500);
    }

    shutter(url) {
        // POST http://172.20.10.13:8080/ccapi/ver100/shooting/control/shutterbutton/manual
        // {"action": "full_press", "af": true}
        fetch(url, {
            method: 'POST',
            mode: 'no-cors',
        }).then(response => {
            debugger 
        })
    }

    render() {
        return <div>
            <h1>Video</h1>
            <p>
                <video autoPlay="autoPlay" src="http://localhost:8080">
                </video>
            </p>
            <div id="shutter-button" onClick={() => this.shutter("http://localhost:8080/ccapi/ver100/shooting/control/shutterbutton/manual")}>
            </div>
        </div>
    }

}

export default Booth;