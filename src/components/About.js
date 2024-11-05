import React from 'react';

const About = () => {
  return (
    <section id="about" className="p-4">
      <h2 className="text-brightGreen text-2xl mb-4 font-terminal">About Zernel</h2>
      <div className="bg-darkBackground text-terminalWhite p-4 border border-brightGreen font-terminal">
        <p>
          Zernel is a cutting-edge kernel specifically designed for Machine Learning (ML) and Large Language Models (LLM). 
          With a strong emphasis on performance, scalability, and efficiency, Zernel offers a highly optimized environment 
          that can handle resource allocation across various hardware, including CPUs, GPUs, and TPUs. Whether you're 
          training neural networks or deploying high-performance AI models, Zernel ensures your infrastructure is maximized 
          for speed and reliability.
        </p>
        <p className="mt-4">
          Features like a CLI-based Integrated Development Environment (IDE) and real-time model visualization make Zernel 
          not only powerful but also user-friendly for developers working on next-generation AI technologies. Our custom ML 
          scheduler and distributed computing support make it easier to build fault-tolerant systems that operate efficiently 
          at scale.
        </p>
        <p className="mt-4">
          Zernel is an ongoing project aimed at transforming the way Machine Learning and AI development is done on the 
          operating system level. Stay tuned for more updates as we continue to evolve and add new features to our platform.
        </p>
      </div>
    </section>
  );
};

export default About;

