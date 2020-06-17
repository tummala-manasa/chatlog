import React from 'react';
import './index.css';

function Timestamp({ timestamp }) {
    let Date = `${timestamp.getDate()}-${timestamp.getMonth() + 1}-${timestamp.getFullYear()}`;
    let Time = timestamp.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });

    return (
        <p className="time">
            {Date} <i>{Time}</i>
        </p>
    );
}
export default Timestamp;