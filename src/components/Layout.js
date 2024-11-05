import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';      // New Home Component
import Features from './Features';
import About from './About';
import Contact from './Contact';

const Layout = () => {
  const [activePage, setActivePage] = useState('home'); // Set 'home' as default page

  return (
    <div className="min-h-screen flex flex-col">
      <Header setActivePage={setActivePage} />
      <main className="flex-grow p-4">
        {activePage === 'home' && <Home setActivePage={setActivePage} />}        {/* Pass setActivePage to Home */}
        {activePage === 'features' && <Features />}
        {activePage === 'about' && <About />}
        {activePage === 'contact' && <Contact />}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;

