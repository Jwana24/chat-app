// Modules
import React from 'react';
import PropTypes from 'prop-types';
// Components
import "./Contact.css";

function Contact(user) // On passe le tableau user du parent à l'enfant
{
   return(
   // On va chercher dans le tableau user chaque objet indépendamment, selon notre besoin
   <div className="Contact">
      <img className="avatar" src={user.avatar} alt={user.name} />
      <div>
         <h6 className="name">{user.name}</h6>
         <div className="status">
            {user.online ? <p className="status-online"></p> : <p className="status-offline"></p>}
            {user.online ? <p className="status-text">online</p> : <p className="status-text">offline</p>}
         </div>
      </div>
   </div>
   );
}

/* Il s'agit du module PropTypes qui permet de vérifier et valider ou non les types passés dans les valeurs. Ici
nous avons des types d'objets contenu dans "user" */
Contact.propTypes = {
   name: PropTypes.objectOf(PropTypes.user).isRequired,
   avatar: PropTypes.objectOf(PropTypes.user).isRequired,
   online: PropTypes.objectOf(PropTypes.user).isRequired,
 };

export default Contact;