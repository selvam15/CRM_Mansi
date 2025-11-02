import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import CompanyOverview from './components/CompanyOverview';
import BusinessSegments from './components/BusinessSegments';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-slate-50 text-slate-800">
      <Header />
      <main>
        <Hero />
        <CompanyOverview />
        <BusinessSegments />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
