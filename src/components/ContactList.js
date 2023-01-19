// import React from 'react';
// import toast, { Toaster } from 'react-hot-toast';
// import { useAuth0 } from "@auth0/auth0-react";
// const ContactList = ({ id,contacts, deleteContact, selectContact }) => {
//   const { user, isAuthenticated, isLoading } = useAuth0();
  
//   const notify = () => toast.success('Deleted Succesfully');
//   return (
//     <>
//      <div><Toaster/></div>
    
//     <h1 class="font-medium leading-tight text-5xl mt-0 mb-2 text-blue-600">Destination Place : {id}</h1>
//     <div className="flex bg-cyan-100">
//     <ul>
    
//       {contacts.map((c) => (
//         c.place===id?
        
//         <div className=" w-100vh max-w-sm rounded overflow-hidden shadow-lg">
//         <li key={c.id}>
//         <div className="font-medium text-xl mb-2"> {c.name} </div>
//         <div className="text-gray-600">Timing: {c.time} </div>
//         <div className="text-gray-600">Phone No:  {c.phone} </div>
//         <div className="text-gray-600">Destination: {c.place} </div>
          
//         { isAuthenticated && (user.name === c.name) &&
//         <button 
//   onClick={() => {
//     deleteContact(c.id);
//     notify();
//   }} 
//   className=" mt-4 bg-red-500 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-full"
// >

//           Delete
// </button>
//         }
//         </li>
//         </div>
//         :null
//       ))}
//     </ul>
//     </div>
//     </>
//   );
// };

// export default ContactList;



import React from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useAuth0 } from "@auth0/auth0-react";
const ContactList = ({ id,contacts, deleteContact, selectContact }) => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  
  const notify = () => toast.success('Deleted Succesfully');
  return (
    <>
     <div><Toaster/></div>
    


    <h1 class="bg-yellow-200 font-medium leading-tight text-5xl mt-0 mb-2 text-black-600 flex justify-center">Destination Place : {id}</h1>
   
   
   
   
    <div className="flex flex-wrap bg-yellow-200 m-0 p-0">
    <ul className='flex flex-wrap justify-self-auto gap-10 mx-10 p-0 '>
    


      {contacts.map((c) => (
        c.place===id?
        
        <div className="mx-auto grid max-w-6xl  grid-cols-1 gap-6 p-6 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 rounded-xl bg-white shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300">
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
