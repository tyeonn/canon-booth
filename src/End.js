import React from 'react';

const End = ({ isShowing, hide }) => isShowing ? (
    <div>
        <div onClick={hide} className="modal-overlay"/>
        <div className="end-modal">
            <h1 className="end-modal-text">Are you sure you want to end your session?</h1>
            <div className="modal-buttons">
                <button onClick={hide} id="cancel" className="modal-button">Cancel</button>
                <button onClick={hide} id="end" className="modal-button">End</button>
            </div>
        </div>
    </div>
)
 : null;

export default End;