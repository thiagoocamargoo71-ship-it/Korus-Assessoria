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
    <section id="footer" className="relative py-49 px-7 overflow-hidden bg-background">

      {/* 🎨 FUNDO */}
<div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(74,94,2,0.25),transparent_60%)]"></div>

<div className="absolute inset-0 bg-[linear-gradient(120deg,#0F141A,#071526)] opacity-95"></div>

{/* 🌫️ TEXTURA */}
<div className="absolute inset-0 opacity-[0.05] bg-[url('https://www.transparenttextures.com/patterns/noise.png')]"></div>

{/* ✨ DIVISOR METÁLICO PREMIUM */}
<div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#b38b5f]/60 to-transparent relative">

  {/* brilho central suave */}
  <div className="absolute inset-0 blur-sm opacity-70 bg-gradient-to-r from-transparent via-[#e3c59e]/70 to-transparent"></div>

  {/* glow externo mais difuso */}
  <div className="absolute inset-0 blur-md opacity-40 bg-gradient-to-r from-transparent via-[#b38b5f]/50 to-transparent"></div>

</div>

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* 💎 GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* 🔹 LOGO + FRASE */}
          <div>
            <div className="flex items-center gap-3 mb-6">

              <div className="bg-gradient-to-br from-[#b38b5f] to-[#8a633a] p-3 rounded-xl shadow-lg">
                <Globe className="w-6 h-6 text-white" />
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white tracking-wide">
                  KORUS
                </h3>
                <p className="text-xs text-white/60">
                  Assessoria Internacional
                </p>
              </div>
            </div>

            <p className="text-[#b38b5f] italic text-lg mb-4">
              “Abrindo portas para o seu futuro internacional.”
            </p>

            <p className="text-white/60 text-sm leading-relaxed">
              Especialistas em assessoria para vistos internacionais,
              transformando planos em conquistas reais.
            </p>
          </div>

          {/* 🔹 LINKS */}
          <div>
            <h4 className="text-white font-semibold mb-6">Navegação</h4>
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
                    className="text-white/60 hover:text-[#b38b5f] transition-all duration-300 hover:translate-x-1"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* 🔹 RECURSOS */}
          <div>
            <h4 className="text-white font-semibold mb-6">Recursos</h4>
            <ul className="space-y-3">
              {[
                { label: 'Simulador', id: 'simulator' },
                { label: 'Como Funciona', id: 'HowltWorks' },
                { label: 'FAQ', id: 'faq' },
                { label: 'Avaliações', id: 'Reviews' },
                { label: 'Contato', id: 'contact' },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-white/60 hover:text-[#b38b5f] transition-all duration-300 hover:translate-x-1"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* 🔹 CONTATO */}
          <div>
            <h4 className="text-white font-semibold mb-6">Contato</h4>

            <div className="space-y-4 text-white/60 text-sm">
              <div>
                <p>Email</p>
                <p className="text-white font-medium">atendimentokorusassessoria@gmail.com</p>
              </div>

              <div>
                <p>Telefone</p>
                <p className="text-white font-medium">+55 (31) 97342-4524</p>
              </div>

              <div>
                <p>Localização</p>
                <p className="text-white font-medium">Belo Horizonte - MG / Brasil</p>
              </div>
            </div>
          </div>
        </div>

        {/* 🔻 DIVISOR */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">

          <p className="text-white/40 text-sm text-center md:text-left">
            © {currentYear} Korus Assessoria Internacional. Todos os direitos reservados.
          </p>

          {/* 🌈 REDES SOCIAIS */}
          <div className="flex gap-4">

            <a
              href="#"
              className="p-3 rounded-xl bg-white/5 hover:bg-[#1877F2]/20 transition-all hover:scale-110"
            >
              <Facebook className="w-5 h-5 text-[#1877F2]" />
            </a>

            <a
              href="#"
              className="p-3 rounded-xl bg-white/5 hover:bg-[#E1306C]/20 transition-all hover:scale-110"
            >
              <Instagram className="w-5 h-5 text-[#E1306C]" />
            </a>

            <a
              href="#"
              className="p-3 rounded-xl bg-white/5 hover:bg-[#0A66C2]/20 transition-all hover:scale-110"
            >
              <Linkedin className="w-5 h-5 text-[#0A66C2]" />
            </a>

            <a
              href="#"
              className="p-3 rounded-xl bg-white/5 hover:bg-[#1DA1F2]/20 transition-all hover:scale-110"
            >
              <Twitter className="w-5 h-5 text-[#1DA1F2]" />
            </a>

          </div>
        </div>
        </div>
    </section>
  );
}