// Modules
import React from 'react';

// Components
import "./Contact.css";


function Contact({name, avatar, online})
{
   return(
   <div className="contact-list">
      <img className="avatar" src={avatar} alt={name} />
      <div>
         <h6 className="name">{name}</h6>
         <div className="status">
            {online ? <p className="status-online"></p> : <p className="status-offline"></p>}
            {online ? <p className="status-text">online</p> : <p className="status-text">offline</p>}
         </div>
      </div>
   </div>
   );
}

export default Contact;