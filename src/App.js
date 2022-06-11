import React from 'react';
import Navbar from './components/navbar/Navbar';
import MainContent from './components/main-content/MainContent';
import ContactForm from './components/contact-form/ContactForm';
import './App.css';

const App = () => {
  return (
    <>
      <Navbar navItems={[{ title: 'About' }, { title: 'Contact' }]} />
      <MainContent />
      <ContactForm />
    </>
  );
};

export default App;
