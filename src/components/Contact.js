// Modules
import React from 'react';

// Components
import "./Contact.css";

class Contact extends React.Component{

   constructor(props){
      super(props)
      this.state = {
         online: props.online
      }
   }

   render(){
      const stateOnline = this.state.online ? "status-online" : "status-offline";
      const textOnline = this.props.online ? <p className="status-text">online</p> : <p className="status-text">offline</p>;
      return(
      <div className="contact-list">
         <img className="avatar" src={this.props.avatar} alt={this.props.name} />
         <div>
            <h6 className="name">{this.props.name}</h6>
            <div className="status" onClick={ (event) => {
               const newStatus = !this.state.online;
               this.setState({ online: newStatus })
            }}>
               <p className={stateOnline}></p>
               {textOnline}
            </div>
         </div>
      </div>
      );
   }

}

// function Contact({name, avatar, online})
// {
// }

export default Contact;