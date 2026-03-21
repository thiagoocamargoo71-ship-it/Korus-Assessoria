import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import About from './components/About';
import Services from './components/Services';
import Countries from './components/Countries';
import PopularCountries from './components/PopularCountries'; // ✅ ADICIONADO
import WorldPath from './components/WorldPath';
import Simulator from './components/Simulator';
import HowItWorks from './components/HowItWorks';
import FAQ from './components/FAQ';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes fade-in {
        from {
          opacity: 0;
          transform: translateY(20px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
      .animate-fade-in {
        animation: fade-in 1s ease-out;
      }
      html {
        scroll-behavior: smooth;
      }
    `;
    document.head.appendChild(style);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Benefits />
      <About />
      <Services />
      <Countries />

      {/* 🌍 NOVA SEÇÃO - PAÍSES MAIS PROCURADOS */}
      <PopularCountries />

      <WorldPath />
      <Simulator />
      <HowItWorks />
      <FAQ />
      <Reviews />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;