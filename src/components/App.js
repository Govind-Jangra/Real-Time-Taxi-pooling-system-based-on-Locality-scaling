import React from 'react';
import Navbar from './Navbar';
import About from './About';
import Contact from './Contact';
import './App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home';
import ViewPools from './ViewPools';
import CrudDetails from './CrudDetails';
const App = () => {
  
  return (
    <>   
    <BrowserRouter>
    <Navbar/>
      <Routes>  
      <Route exact path="/" element={<Home/>} />
      <Route exact path="/about" element={<About/>} />
      <Route exact path="/viewpools" element={<ViewPools/>} />
      <Route exact path="/PoolMemberDetails/:id" render={(props) => <CrudDetails {...props} place={props.match.params.id}  />} element={<CrudDetails />} />    
        <Route exact path="/contact" element={<Contact/>} />
      </Routes>      
      </BrowserRouter>
    </>
  );
};

export default App;
