import React from 'react';
import "./Contact.css";

function Contact()
{
    const online = true;
    return(
        <div className="Contact">
            <img className="avatar" src="https://randomuser.me/api/portraits/men/17.jpg" />
            <div>
                <h6 className="name">Alex Mason</h6>
                <div className="status">
                    {online ? <p className="status-online"></p> : <p className="status-offline"></p>}
                    {online ? <p className="status-text">online</p> : <p className="status-text">offline</p>}
                </div>
            </div>
        </div>
    );
}

export default Contact;