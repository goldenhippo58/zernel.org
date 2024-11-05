import React from 'react';

const Home = ({ setActivePage }) => {
  return (
    <section id="home" className="p-4">
      <h2 className="text-brightGreen text-3xl mb-4 font-terminal text-center">Welcome to Zernel</h2>
      <div className="bg-darkBackground text-terminalWhite p-4 border border-brightGreen font-terminal">
        <p>Zernel is the first kernel specifically optimized for Machine Learning (ML), Large Language Models (LLM), and Artificial Intelligence (AI) development & deployment.</p>
        <div className="mt-6">
          {/* Use buttons and setActivePage to change pages */}
          <button onClick={() => setActivePage('features')} className="text-brightYellow">Explore Features</button>
          <span className="mx-2">|</span>
          <button onClick={() => setActivePage('about')} className="text-brightYellow">Learn More About Zernel</button>
          <span className="mx-2">|</span>
          <button onClick={() => setActivePage('contact')} className="text-brightYellow">Get in Touch</button>
        </div>
      </div>
    </section>
  );
};

export default Home;

