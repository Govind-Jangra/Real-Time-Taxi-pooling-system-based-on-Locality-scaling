import React from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useAuth0 } from "@auth0/auth0-react";
const ContactList = ({ id,contacts, deleteContact, selectContact }) => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  
  const notify = () => toast.success('Deleted Succesfully');
  return (
    <>
     <div><Toaster/></div>
    
    <h1 class="font-medium leading-tight text-5xl mt-0 mb-2 text-blue-600">Destination Place : {id}</h1>
    <div className="flex bg-cyan-100">
    <ul>
    
      {contacts.map((c) => (
        c.place===id?
        
        <div className=" w-100vh max-w-sm rounded overflow-hidden shadow-lg">
        <li key={c.id}>
        <div className="font-medium text-xl mb-2"> {c.name} </div>
        <div className="text-gray-600">Timing: {c.time} </div>
        <div className="text-gray-600">Phone No:  {c.phone} </div>
        <div className="text-gray-600">Destination: {c.place} </div>
          
        { isAuthenticated && (user.name === c.name) &&
        <button 
  onClick={() => {
    deleteContact(c.id);
    notify();
  }} 
  className=" mt-4 bg-red-500 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-full"
>

          Delete
</button>
        }
        </li>
        </div>
        :null
      ))}
    </ul>
    </div>
    </>
  );
};

export default ContactList;
