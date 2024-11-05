import React from 'react';

const Header = ({ setActivePage }) => {
  return (
    <header className="bg-darkBackground text-brightGreen p-4 flex justify-between">
      {/* Clicking Zernel logo takes you to Home */}
      <h1 
        onClick={() => setActivePage('home')} 
        className="text-3xl font-terminal cursor-pointer"
      >
        Zernel
      </h1>
      <nav>
        <button onClick={() => setActivePage('home')} className="text-brightGreen ml-4">Home</button>
        <button onClick={() => setActivePage('features')} className="text-brightGreen ml-4">Features</button>
        <button onClick={() => setActivePage('about')} className="text-brightGreen ml-4">About</button>
        <button onClick={() => setActivePage('contact')} className="text-brightGreen ml-4">Contact</button>
      </nav>
    </header>
  );
};

export default Header;

