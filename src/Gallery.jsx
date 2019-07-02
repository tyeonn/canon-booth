import React from 'react';
import { Link } from 'react-router-dom';
import upload from './images/upload.png';

class Gallery extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            image: [],
        }
    }

    componentDidMount() {
        fetch("http://192.168.1.2:8080/ccapi/ver100/contents/sd/100CANON?type=jpeg")
            .then(resp => resp.json())
            .then(data => {
                debugger
                this.setState({
                    image: data["url"][data["url"].length - 1]
                }) 
            })
    }

    render() {

        return <div id="gallery-container"> 
            <div id="gallery-nav">
                <h1 className="icon-chevron"><Link to="/phone">{'<'}</Link></h1>
                <h1 id="nav-header">Photos (Lifestyle)</h1>
                <img src={upload} id="gallery-upload"></img>
            </div>
            <img src={this.state.image} className="gallery-img"></img>
        </div>
    }

}

export default Gallery;