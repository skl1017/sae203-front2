import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Contact from './components/Contact';
import MainContacts from './components/MainContacts';
import AddContact from './components/AddContact'
import MainTags from './components/MainTags';

function App() {
  return (
    <div className="App">
      <Header/>
    <Routes>
      <Route path="/" element={<MainContacts />} />
      <Route path="/tags" element={<MainTags/>} />
      <Route path="/contacts/:id" element={<Contact/>} />
      <Route path="/addContact" element={<AddContact/>}/>
    </Routes>
      
    </div>
  );
}

export default App;
