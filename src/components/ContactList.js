import React from 'react';

const ContactList = ({ contacts, deleteContact, selectContact }) => {
  return (
    <ul>
      {contacts.map((c) => (
        <li key={c.id}>
          {c.name} - {c.email} - {c.phone} -{c.place}
          <button onClick={() => deleteContact(c.id)}>Delete</button>
          <button onClick={() => selectContact(c.id)}>Edit</button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
