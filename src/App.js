import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Contact from './components/Contact';
import MainContacts from './components/MainContacts';
import AddContact from './components/AddContact'

function App() {
  return (
    <div className="App">
      <Header/>
    <Routes>
      <Route path="/" element={<MainContacts />} />
      <Route path="/tags" element={<h1>Tags</h1>} />
      <Route path="/contacts/:id" element={<Contact/>} />
      <Route path="/addContact" element={<AddContact/>}/>
    </Routes>
      
    </div>
  );
}

export default App;
