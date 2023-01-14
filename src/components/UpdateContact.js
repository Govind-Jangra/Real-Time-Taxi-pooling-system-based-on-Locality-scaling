import React, { useState } from 'react';

const UpdateContact = ({ selectedContact, updateContact }) => {
  const [name, setName] = useState(selectedContact.name);
  const [email, setEmail] = useState(selectedContact.email);
  const [phone, setPhone] = useState(selectedContact.phone);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedContact = {
      id: selectedContact.id,
      name,
      email,
      phone,
    };
    updateContact(updatedContact);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <br />
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <br />
      <label>
        Phone:
        <input
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </label>
      <br />
      <button type="submit">Update Contact</button>
    </form>
    );
};

export default UpdateContact;
