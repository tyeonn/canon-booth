import React from "react";

class Booth extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // fetch("http://192.168.1.2:8080/ccapi/ver100/shooting/liveview", {
        //     method: "POST",
        //     body: JSON.stringify({
        //     liveviewsize: "small",
        //     cameradisplay: "on"
        //     })
        // });
        // fetch("http://192.168.1.2:8080/ccapi/ver100/shooting/control/af", {
        //     method: "POST",
        //     body: JSON.stringify({
        //         action: "start"
        //     })
        // });
    }

    render() {
        return (
            <div>
                <p>
                <video
                    id="live-booth-view"
                    autoPlay="autoPlay"
                    src="http://localhost:8080"
                />
                </p>
            </div>
        );
    }
}

export default Booth;
