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
    <div className='end-modal-container'>
        <div onClick={hide} className="modal-overlay"/>
        <div id="end-modal">
            <h1 className="end-modal-text">Are you sure you want to end your session?</h1>
            <div className="modal-buttons">
                <button onClick={hide} id="cancel" className="modal-button">Cancel</button>
                <Link to='/' onClick={handleEnd} id="end" className="modal-button">End</Link>
            </div>
        </div>
    </div>
)
 : null;

export default End;