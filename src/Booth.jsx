import React from 'react';

function Booth(){
    return <div>
        <p>
            <video id="live-booth-view" autoPlay="autoPlay" src="http://localhost:8080">
            </video>
        </p>
    </div>
}

export default Booth;