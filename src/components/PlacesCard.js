import React from 'react';
import {Link} from 'react-router-dom'
import PoolMemberDetails from './PoolMemberDetails';
import { useNavigate } from 'react-router-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
const PlacesCards = ({ places }) => {
   

  
  return (
    <>
    <div className="flex flex-wrap -mx-3">
      {places.map((place) => (
        
        <Link to={`/PoolMemberDetails/${place.name}`} >
      
        <div key={place.id} className="w-128 mx-4 px-3 py-4  ">
          <div className="bg-white rounded-lg shadow-md">
            <img src="" alt="not found"/>
            <div className="p-4">
              <h2 className="text-lg font-medium">{place.name}</h2>
              <p className="text-gray-600">{place.location}</p>
            </div>
          </div>
          
        </div>
    
        </Link>
      
      ))}
    </div>
    </>
  );
};

export default PlacesCards;
