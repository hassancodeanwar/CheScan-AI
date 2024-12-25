import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AnalyzeForm from './components/AnalyzeForm';
import About from './components/About';
import Team from './components/Team';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <AnalyzeForm />
        <About />
        <Team />
      </main>
      <Footer />
    </div>
  );
}

export default App;