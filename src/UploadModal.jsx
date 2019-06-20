import React from 'react';
import Modal from 'react-modal';
import upload from './images/upload.png';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};
// Modal.setAppElement(el);

class UploadModal extends React.Component {
    constructor() {
        super();

        this.state = {
            modalIsOpen: false,
            email: ""
        };

        this.openModal = this.openModal.bind(this);
        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    openModal() {
        this.setState({ modalIsOpen: true });
    }

    afterOpenModal() {
        // references are now sync'd and can be accessed.
        this.subtitle.style.color = '#f00';
    }

    closeModal() {
        this.setState({ modalIsOpen: false });
    }

    update(field) {
        return (e => this.setState({
            [field]: e.target.value
        }));
    }

    render() {
        return (
            <div className="upload-modal">
                <button onClick={this.openModal}><img src={upload} className="upload-icon" /></button>
                <Modal
                    className="upload-visible-modal"
                    isOpen={this.state.modalIsOpen}
                    onAfterOpen={this.afterOpenModal}
                    onRequestClose={this.closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                >
                    <div className="close" onClick={this.closeModal}>&times;</div>
                    <h2 ref={subtitle => this.subtitle = subtitle}></h2>
                    <form className="upload-email-input">
                        <input type="text" value={this.state.email} onChange={this.update('email')} placeholder="Enter your email" />
                    </form>
                    <button onClick={this.closeModal}>Send</button>
                </Modal>
            </div>
        );
    }
}

export default UploadModal;