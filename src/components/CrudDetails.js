
import AddContact from './AddContact';
import ContactList from './ContactList';
import React, { useState, useEffect } from 'react';
const CrudDetails = () => {
  
    const [contacts, setContacts] = useState([]);
    const [selectedContact, setSelectedContact] = useState(null);
    useEffect(() => {
        const storedContacts = JSON.parse(localStorage.getItem('contacts'));
        if (storedContacts) {
          setContacts(storedContacts);
        }
      }, []);

      useEffect(() => {
        localStorage.setItem('contacts', JSON.stringify(contacts));
      }, [contacts]);
    
      const addContact = (contact) => {
        setContacts([...contacts, contact]);
      };
    
      const deleteContact = (id) => {
        setContacts(contacts.filter((c) => c.id !== id));
      };

      const updateContact = (updatedContact) => {
        setContacts(
          contacts.map((c) => (c.id === updatedContact.id ? updatedContact : c))
        );
      };
    
      const selectContact = (id) => {
        const selected = contacts.find((c) => c.id === id);
        setSelectedContact(selected);
      };
  return (
    <>
      
      <ContactList
        contacts={contacts}
        deleteContact={deleteContact}
        selectContact={selectContact}
      />
      <AddContact addContact={addContact} />
    </>
  )
}

export default CrudDetails
