import { Globe, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="section-gradient text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-gradient-to-br from-white to-gray-200 p-2.5 rounded-lg">
                <Globe className="w-7 h-7 text-[#0F2A44]" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Korus</h3>
                <p className="text-sm text-gray-300">Assessoria Internacional</p>
              </div>
            </div>
            <p className="text-gray-300 italic mb-6 leading-relaxed">
              "Abrindo portas para o seu futuro internacional."
            </p>
            <p className="text-gray-400 text-sm leading-relaxed">
              Especialistas em assessoria para vistos internacionais, transformando sonhos em realidade.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Links Rápidos</h4>
            <ul className="space-y-3">
              {[
                { label: 'Home', id: 'home' },
                { label: 'Sobre', id: 'about' },
                { label: 'Serviços', id: 'services' },
                { label: 'Países', id: 'countries' },
                { label: 'Destinos', id: 'destinations' },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Recursos</h4>
            <ul className="space-y-3">
              {[
                { label: 'Simulador', id: 'simulator' },
                { label: 'Como Funciona', id: 'how-it-works' },
                { label: 'FAQ', id: 'faq' },
                { label: 'Avaliações', id: 'reviews' },
                { label: 'Contato', id: 'contact' },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Contato</h4>
            <ul className="space-y-3 text-gray-300">
              <li>
                <p className="text-sm">Email:</p>
                <p className="font-semibold text-white">contato@korusassessoria.com</p>
              </li>
              <li>
                <p className="text-sm">Telefone:</p>
                <p className="font-semibold text-white">+55 (11) 99999-9999</p>
              </li>
              <li>
                <p className="text-sm">Localização:</p>
                <p className="font-semibold text-white">São Paulo, Brasil</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {currentYear} Korus Assessoria Internacional. Todos os direitos reservados.
            </p>

            <div className="flex gap-4">
              {[
                { Icon: Facebook, href: '#' },
                { Icon: Instagram, href: '#' },
                { Icon: Linkedin, href: '#' },
                { Icon: Twitter, href: '#' },
              ].map(({ Icon, href }, index) => (
                <a
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 hover:bg-white/20 p-3 rounded-lg transition-all duration-300 hover:scale-110"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
