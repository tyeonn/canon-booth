import React from 'react';
import ReactDOM from 'react-dom';

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

// const End = ({ isShowing, hide }) => isShowing ? ReactDOM.createPortal(
//     <React.Fragment>
//         <div className="modal-overlay" />
//         <div className="modal-wrapper" aria-modal aria-hidden tabIndex={-1} role="dialog">
//             <div className="modal">
//                 <div className="modal-header">
//                     <button type="button" className="modal-close-button" data-dismiss="modal" aria-label="Close" onClick={hide}>
//                         <span aria-hidden="true">&times;</span>
//                     </button>
//                 </div>
//                 <p>
//                     Hello, I'm a modal.
//         </p>
//             </div>
//         </div>
//     </React.Fragment>, document.body
// ) : null;

export default End;