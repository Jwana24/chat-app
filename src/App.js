// Modules
import React from 'react';
// Components
import Contact from './components/Contact';

function App() {

  // déclaration d'un tableau de plusieurs users dans des objets
  const users = [
   {
      name: "Alex Mason",
      avatar: "https://randomuser.me/api/portraits/men/17.jpg",
      online: true
   },
   {
      name: "Franklin Kim",
      avatar: "https://randomuser.me/api/portraits/men/16.jpg",
      online: true
   },
   {
      name: "Virgil Foster",
      avatar: "https://randomuser.me/api/portraits/men/10.jpg",
      online: false
   }
  ];

  // maping de la liste des users. On retourne le composant "Contact" à qui on passe la liste des users (user[])
  const listUsers = users.map((user) => {
    return <Contact {...user}/> 
  });

  return (
    <div className="App">
      {/* On retourne à App.js la liste des users, le maping effectué sur notre tableau user */}
      {listUsers}
    </div>
  );
}

export default App;
