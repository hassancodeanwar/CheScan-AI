import React from 'react';
import { Brain, Shield, Clock } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: <Brain className="h-8 w-8" />,
      title: "Advanced AI Technology",
      description: "Powered by state-of-the-art deep learning models trained on extensive medical datasets."
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Secure & Private",
      description: "Your medical data is encrypted and handled with the highest security standards."
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Instant Results",
      description: "Get analysis results within seconds, helping speed up the diagnostic process."
    }
  ];

  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">About Our Platform</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-6 rounded-lg bg-gray-50">
              <div className="inline-block p-3 bg-blue-100 rounded-full text-blue-600 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}