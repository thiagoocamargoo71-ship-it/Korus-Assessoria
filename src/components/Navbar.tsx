import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'Sobre', id: 'about' },
    { label: 'Serviços', id: 'services' },
    { label: 'Países', id: 'countries' },
    { label: 'Destinos', id: 'destinations' },
    { label: 'Simulador', id: 'simulator' },
    { label: 'FAQ', id: 'faq' },
    { label: 'Contato', id: 'contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 h-19 ${
        isScrolled
          ? 'bg-background/50 backdrop-blur-3xl shadow-soft border-b border-white/10'
          : 'bg-white/5 backdrop-blur-2xl border-b border-white/10'
      }`}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="w-full h-full bg-gradient-to-b from-white/10 via-transparent to-transparent opacity-40"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-19">

          {/* LOGO */}
          <div 
            className="flex items-center gap-4 group cursor-pointer"
            onClick={() => scrollToSection('home')}
          >
            <div className="flex-shrink-0">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="36" 
                height="36" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="#b38b5f" 
                strokeWidth="1.5" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="opacity-100 group-hover:scale-105 transition-transform duration-300"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                <path d="M2 12h20" />
              </svg>
            </div>

            <div className="flex flex-col justify-center border-l border-white/10 pl-4 py-1">
              <h1 className="text-2xl font-serif font-bold leading-none tracking-tight text-white" style={{ textShadow: "0px 1px 8px rgba(0,0,0,0.3)" }}>Korus</h1>
              <p className="text-[11px] text-white tracking-[0.05em] font-sans mt-1.5 opacity-90">Assessoria Internacional</p>
            </div>
          </div>

          {/* MENU DESKTOP */}
          <div className="hidden lg:flex items-center space-x-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="group relative px-4 py-1 text-sm text-white/80 hover:text-gold transition font-medium tracking-wide"
              >
                {item.label}
                <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-gold transition-all duration-300 group-hover:w-full"></span>
                <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-r from-transparent via-white/10 to-transparent blur-sm"></span>
              </button>
            ))}
          </div>

          {/* MOBILE BUTTON */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-white/10 transition"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-background/80 backdrop-blur-3xl border-t border-white/10">
          <div className="px-6 py-6 space-y-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left px-4 py-3 text-white/80 hover:text-gold hover:bg-white/5 rounded-lg transition"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
