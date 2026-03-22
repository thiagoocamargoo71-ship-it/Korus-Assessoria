import { ShieldCheck, Target, Headphones, Award } from "lucide-react";

export default function WhyKorus() {
  const items = [
    {
      title: "Especialistas em Vistos",
      description: "Equipe experiente com profundo conhecimento em processos consulares e imigração internacional.",
      icon: <ShieldCheck className="w-6 h-6" />,
    },
    {
      title: "Processo Estratégico",
      description: "Cada cliente recebe um plano personalizado para maximizar as chances de aprovação.",
      icon: <Target className="w-6 h-6" />,
    },
    {
      title: "Acompanhamento Completo",
      description: "Do início ao fim, você terá suporte em todas as etapas do processo.",
      icon: <Headphones className="w-6 h-6" />,
    },
    {
      title: "Alta Taxa de Aprovação",
      description: "Histórico sólido de resultados positivos em diversos países e categorias de visto.",
      icon: <Award className="w-6 h-6" />,
    },
  ];

  return (
    <section
      id="about"
      className="relative py-32 px-6 overflow-hidden bg-background"
    >
      {/* 🎨 FUNDO INTEGRADO COM O HERO (GRADIENTE PROFUNDO) */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(74, 94, 2, 0.32),transparent_60%)]"></div>
      <div className="absolute inset-0 bg-[linear-gradient(120deg,#1A1F26, #0B1F3A)] opacity-90"></div>

      {/* 🌫️ TEXTURA / GRAIN (Mesmo efeito premium do Hero) */}
      <div className="absolute inset-0 opacity-[0.04] bg-[url('https://www.transparenttextures.com/patterns/noise.png')]"></div>

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* 🟡 TÍTULO COM DESTAQUE EM BRONZE NA MARCA (Korus) */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-5xl md:text-6xl font-serif font-bold leading-tight text-white relative inline-block">
            Por que escolher a{' '}
            {/* 🌟 APENAS 'Korus' COM EFEITO METÁLICO 3D */}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: `linear-gradient(180deg, #e3c59e 0%, #b38b5f 40%, #8a633a 100%)`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                // Filtro de luz na borda superior (Chanfrado)
                filter: "drop-shadow(0px -1px 0.5px rgba(255,255,255,0.3))"
              }}
            >
              Korus
            </span>
          </h2>
          
          {/* Linha de detalhe em bronze sutil */}
          <div className="h-[1px] w-24 bg-gradient-to-r from-transparent via-[#b38b5f]/40 to-transparent mx-auto mt-6"></div>

          <p className="mt-8 text-white/70 font-sans text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
            Uma abordagem estratégica e orientada a resultados para transformar seu objetivo internacional em realidade.
          </p>
        </div>

        {/* 💎 CARDS COM EFEITO DOURADO EMANANTE (HOVER) */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-xl bg-white/[0.03] border border-white/10 hover:border-[#b38b5f]/50 transition-all duration-500 hover:-translate-y-2 backdrop-blur-sm overflow-hidden cursor-default"
            >
              {/* ✨ Pseudo-elemento para o Brilho Emanante no Fundo */}
              <div 
                className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-out"
                style={{
                  background: `
                    radial-gradient(
                      circle at center,
                      rgba(179,139,95,0.2) 0%,   /* Centro Bronze suave */
                      rgba(179,139,95,0.1) 30%,  /* Meio difuso */
                      rgba(179,139,95,0.01) 70%, /* Borda quase transparente */
                      transparent 100%           /* Fundo do Card */
                    )
                  `,
                  transform: 'scale(1.2)', // Começa maior para emanar suavemente
                  transition: 'opacity 0.7s, transform 0.5s ease-out',
                }}
              />
              
              {/* Efeito secundário de "pulse" do centro para a borda no hover */}
              <div 
                className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{
                  background: `
                    radial-gradient(
                      circle at center,
                      #b38b5f00 0%,
                      #b38b5f00 50%,
                      #b38b5f10 80%, /* Pulsação dourada perto da borda */
                      #b38b5f00 100%
                    )
                  `,
                  animation: 'group-hover:emanatePulse 1.5s ease-out infinite',
                }}
              />

              {/* ÍCONE EM BRONZE METÁLICO */}
              <div className="relative z-10 mb-6 inline-flex p-3 rounded-lg bg-[#b38b5f]/10 text-[#b38b5f] group-hover:bg-[#b38b5f] group-hover:text-white transition-all duration-500 shadow-[0_0_20px_rgba(179,139,95,0.1)] group-hover:shadow-[0_0_30px_rgba(179,139,95,0.3)] group-hover:scale-105">
                {item.icon}
              </div>

              <h3 className="relative z-10 text-xl font-bold text-white mb-4 group-hover:text-[#e3c59e] transition-colors font-serif">
                {item.title}
              </h3>

              <p className="relative z-10 text-sm text-white/50 leading-relaxed group-hover:text-white/80 transition-colors">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}