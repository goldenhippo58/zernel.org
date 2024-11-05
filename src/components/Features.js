import React from 'react';

const Features = () => {
  const featuresList = [
    'Custom ML Scheduler',
    'Dynamic Resource Allocation (CPU, GPU, TPU)',
    'Distributed Computing and Fault Tolerance',
    'CLI-based IDE',
    'Real-time Model Visualization and Monitoring',
    'Automated Hyperparameter Tuning',
  ];

  return (
    <section id="features" className="p-4">
      <h2 className="text-brightGreen text-2xl mb-4 font-terminal">Key Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {featuresList.map((feature, index) => (
          <div key={index} className="bg-darkBackground text-terminalWhite p-4 border border-brightGreen font-terminal">
            {feature}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;

