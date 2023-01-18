import React from 'react';

const ContactList = ({ contacts, deleteContact, selectContact }) => {
  return (
    <ul>
    
      {contacts.map((c) => (
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <li key={c.id}>
        <div className="">Name: {c.name} </div>
        <div className="">Email: {c.email} </div>
        <div className="">Phone No:  {c.phone} </div>
        <div className="">Destination: {c.place} </div>
          
        
          <button onClick={() => deleteContact(c.id)} class=" py-2 mx-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
          Delete
</button>
        </li>
        </div>
      ))}
    </ul>
  );
};

export default ContactList;
