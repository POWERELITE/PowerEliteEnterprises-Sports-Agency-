
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import RealityCheck from './components/RealityCheck';
import Pillars from './components/Pillars';
import LegalShield from './components/LegalShield';
import Masterclass from './components/Masterclass';
import WealthDesign from './components/WealthDesign';
import LeadCapture from './components/LeadCapture';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('home');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') || 'home';
      setActiveTab(hash);
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section id="home"><Hero /></section>
        <section id="reality"><RealityCheck /></section>
        <section id="pillars"><Pillars /></section>
        <section id="protection" className="py-20 bg-navy-800"><LegalShield /></section>
        <section id="consulting" className="py-20 bg-navy-900"><Masterclass /></section>
        <section id="wealth" className="py-20 bg-navy-800"><WealthDesign /></section>
        <section id="join" className="py-20 bg-navy-900"><LeadCapture /></section>
      </main>
      <Footer />
      <ChatWidget />
    </div>
  );
};

export default App;
