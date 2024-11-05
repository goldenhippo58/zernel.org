import React from 'react';

function Market() {
    return (
        <div className="flex justify-center pt-20 bg-primary text-white min-h-screen">
            <div className="text-center">
                <h1 className="text-4xl font-bold text-accent mb-6">Target Market</h1>
                <p className="text-xl text-gray-300 mb-4">
                    Zernel is designed for:
                </p>
                <ul className="list-disc list-inside text-gray-400">
                    <li>Research Institutions: Scalable, high-performance ML environments.</li>
                    <li>ML Startups: Rapid prototyping and infrastructure cost reduction.</li>
                    <li>Enterprises: Optimized workflows for AI/ML tasks to reduce operational costs.</li>
                </ul>
            </div>
        </div>
    );
}

export default Market;
