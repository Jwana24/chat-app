import React from 'react';
import "./Contact.css";

function Contact()
{
    return(
        <div className="Contact">
            <div>
                <img className="avatar" src="https://randomuser.me/api/portraits/men/17.jpg" />
            </div>
            <div>
                <h6 className="name">Alex Mason</h6>
            </div>
        </div>
    );
}

export default Contact;