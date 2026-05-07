export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center text-center px-6 overflow-hidden bg-background">

      {/* 🎨 FUNDO COM GRADIENTE PROFUNDO */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(74, 94, 2, 0.32),transparent_60%)]"></div>
      <div className="absolute inset-0 bg-[linear-gradient(120deg,#1A1F26, #0B1F3A)] opacity-90"></div>

      {/* 🌫️ TEXTURA / GRAIN (efeito premium) */}
      <div className="absolute inset-0 opacity-[0.04] bg-[url('https://www.transparenttextures.com/patterns/noise.png')]"></div>

      <div className="relative z-10 max-w-5xl">

        {/* 🟡 BADGE: RETANGULAR COM ÍCONE EM TRAÇOS METÁLICOS */}
        <div className="inline-flex items-center gap-3 px-5 py-1.5 rounded-md border border-[#b38b5f]/30 bg-[#8a633a]/5 backdrop-blur-md shadow-[0_0_15px_rgba(138,99,58,0.15)] text-sm font-sans tracking-wide mx-auto mb-6">
          {/* ÍCONE DE GLOBO EM SVG (Traços no tom bronze do H1) */}
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="18" 
            height="18" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="#b38b5f" 
            strokeWidth="1.5" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className="opacity-90"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
            <path d="M2 12h20" />
          </svg>
          
          <span className="text-[#b38b5f] font-medium uppercase text-[10px] tracking-[0.2em]">
            Plataforma Global de Assessoria para Vistos
          </span>
        </div>

        {/* 🟡 TÍTULO COM EFEITO METÁLICO 3D */}
        <h1 className="mt-8 text-5xl md:text-7xl font-serif font-bold leading-tight relative tracking-tight">

          {/* 1. SOMBRA PROJETADA (DROP SHADOW) */}
          <span
            className="absolute inset-0 z-0 select-none"
            aria-hidden="true"
            style={{
              transform: "translate(3px, 5px)",
              color: "transparent",
              textShadow: `
                0px 0px 4px rgba(0,0,0,0.8),
                0px 6px 15px rgba(0,0,0,0.7)
              `
            }}
          >
            Assessoria Global para <br /> Vistos Internacionais
          </span>

          {/* 2. TEXTO METÁLICO COM EFEITO 3D (CHANFRADO) */}
          <span
            className="relative z-10 bg-clip-text text-transparent block"
            style={{
              backgroundImage: `
                linear-gradient(
                  180deg, 
                  #e3c59e 0%,    /* Topo claro (luz) */
                  #b38b5f 30%,   /* Bronze médio */
                  #8a633a 60%,   /* Sombra média */
                  #c4a173 100%   /* Reflexo inferior */
                )
              `,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              // Filtro que cria a "borda de luz" no topo das letras
              filter: `
                drop-shadow(0px -1px 0px rgba(255,255,255,0.4))
              `
            }}
          >
            Assessoria Global para <br /> Vistos Internacionais
          </span>
        </h1>
        {/* 🔤 SUBTÍTULO */}
        <p className="mt-6 text-lg text-white/70 max-w-2xl mx-auto font-sans tracking-wide">
          Simplificamos processos complexos para que você conquiste seu visto
          com mais segurança, estratégia e tranquilidade.
        </p>

        {/* 🔘 BOTÕES */}
        <div className="mt-10 flex flex-col md:flex-row gap-4 justify-center">

          {/* Primário */}
          <button
          onClick={() => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  }}
  className="relative px-7 py-3 rounded-lg text-white font-medium transition transform hover:scale-105 overflow-hidden border border-white/20"
  style={{
    background: `
      linear-gradient(
        120deg,
        #0A317B 0%,
        #1545A5 40%,
        #3B82F6 50%,
        #1545A5 60%,
        #0A317B 100%
      )
    `,
    boxShadow: "0 0 20px rgba(21,69,165,0.5)"
  }}
>
  {/* brilho metálico */}
  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 hover:opacity-100 transition"></span>

  <span className="relative z-10">
    Solicitar Análise de Perfil →
  </span>
</button>

          {/* Secundário */}
          <button 
  onClick={() => {
    const phoneNumber = '5531973424524';
    const message = encodeURIComponent('Olá! Gostaria de solicitar uma análise do meu perfil.');
    const url = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(url, '_blank'); // Abre o WhatsApp em nova aba ou app
  }}          
  className="px-7 py-3 rounded-lg border border-primaryLight text-white/80 hover:bg-primaryLight/10 transition"
>
  Falar com um Especialista
</button>

        </div>
      </div>
    </section>
  );
}