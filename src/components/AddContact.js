import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

const AddContact = ({ dest,addContact }) => {
  const [name, setName] = useState('');
  const [time, setTime] = useState('');

  const [phone, setPhone] = useState('');
  const [place, setPlace] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!name ||!time ||!phone || !place){
      toast.error("Fill every field properly");
      return;
    }
    const newContact = {
      id: Date.now(),
      name,
      time,
      
      phone,
      place,
    };
    addContact(newContact);
    setName('');
    
    setTime(' ');
    setPhone(' ');
    setPlace('');
    toast.success("Details added successfully");
  };

  return (
    <>
    <div><Toaster/></div>
    <h3 className="mx-16 my-2">Add Your Details to Add in This Pool: {dest}</h3>
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
        Timing:
        <input
          type="datetime-local"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
      </label>
      <br />
      <label>
        Phone:
        <input
          type="number"
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

