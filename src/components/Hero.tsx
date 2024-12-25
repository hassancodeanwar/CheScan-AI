import React from 'react';

export default function Hero() {
  return (
    <section className="relative bg-blue-700 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">Advanced AI-Powered Chest X-Ray Analysis</h2>
            <p className="text-xl mb-8">
              "Empowering healthcare through artificial intelligence, making accurate diagnoses more accessible than ever."
            </p>
            <a
              href="#analyze"
              className="bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Start Analysis
            </a>
          </div>
          <div className="relative">
            <img
              src="https://img.freepik.com/free-photo/making-diagnosis-team-task-doctors-looking-patient-s-x-ray_1157-48130.jpg?ga=GA1.1.1194610793.1724149890&semt=ais_hybrid"
              alt="X-ray Analysis"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}