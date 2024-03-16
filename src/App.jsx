import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ContactForm from './assets/Components/ContactForm';
import Header from './assets/Components/Header';
import HeroSection from './assets/Components/HeroSection';
import DestinationSection from './assets/Components/DestinationSection';
import Footer from './assets/Components/Footer';
import './App.css';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/destinations" element={<DestinationSection />} />
        <Route path="/contact" element={<ContactForm />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;


