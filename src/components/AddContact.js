import React, { useState } from 'react';

const AddContact = ({ addContact }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [place, setPlace] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newContact = {
      id: Date.now(),
      name,
      email,
      phone,
      place,
    };
    addContact(newContact);
    setName('');
    setEmail('');
    setPhone('');
    setPlace((''));
  };

  return (
    <>
    
    <h3 className="mx-16 my-2">Add Your Details to Add in This Pool:</h3>
    <div className="  bg-white dark:bg-gray-900">
    <form onSubmit={handleSubmit} >
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
      <label>
        Place:
        <input
          type="text"
          value={place}
          onChange={(e) => setPlace(e.target.value)}
        />
      </label>
      <br />
      <button class=" py-2 mx-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" type="submit">Add In Pool</button>
    </form>
    </div>
    </>
  );
};

export default AddContact;

