import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import Swal from'sweetalert2';

const handleEnd = (hide) => {
    // hide();
    setTimeout(() => {
        Swal.fire({
          type: 'success',
          title: 'Thanks for using Canon Booth!',
          timer: 1500,
          showConfirmButton: false,
        });
  
    },600);

};
const End = ({ isShowing, hide }) => isShowing ? (
    <div>
        <div onClick={hide} className="modal-overlay"/>
        <div className="end-modal">
            <h1 className="end-modal-text">Are you sure you want to end your session?</h1>
            <div className="modal-buttons">
                <button onClick={hide} id="cancel" className="modal-button">Cancel</button>
                <Link to='/' onClick={handleEnd} id="end" className="modal-button">End</Link>
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