import React from 'react';

class Gallery extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            images: [],
        }
    }

    componentDidMount() {
        fetch("http://192.168.1.2:8080/ccapi/ver100/contents/sd/100CANON?type=jpeg")
            .then(resp => resp.json())
            .then(data => {
                this.setState({
                    images: data["url"]
                }) 
            })
    }

    render() {
        const imgs = this.state.images.map(img => {
            return <img className="gallery-img" src={img}></img>
        })

        return <div id="gallery-container"> 
            {imgs}
        </div>
    }

}

export default Gallery;