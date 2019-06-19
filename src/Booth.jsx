import React from 'react';

class Booth extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            tick: 0,
            img: "http://172.20.10.13:8080/ccapi/ver100/shooting/liveview/flip",
        }
    }

    componentDidMount() {
        // debugger
        var interval = setInterval(() => {
            document.location.reload();
            // console.log(this.state.tick);
            // this.setState({
            //     tick: this.state.tick + 1,
            //     img: "http://172.20.10.13:8080/ccapi/ver100/shooting/liveview/flip"
            // })
        }, 1000);
    }

    render() {
        return <div>
            <img src={this.state.img}></img>
        </div>
    }

}

export default Booth;