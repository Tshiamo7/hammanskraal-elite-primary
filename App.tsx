
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Values from './components/Values';
import Culture from './components/Culture';
import Chatbot from './components/Chatbot';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen selection:bg-navy selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Values />
        <Culture />
      </main>
      <Chatbot />
      <Footer />
    </div>
  );
};

export default App;
