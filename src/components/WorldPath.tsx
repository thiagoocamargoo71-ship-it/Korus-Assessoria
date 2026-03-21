import { Globe, MapPin, FileCheck, Shield, TrendingUp } from 'lucide-react';

export default function WorldPath() {
  // 1. A variável aqui se chama pathSteps
  const pathSteps = [
    {
      icon: Globe,
      title: 'Planejamento Internacional',
      description: 'Analisamos seus objetivos e criamos um plano personalizado para seu futuro global.',
    },
    {
      icon: MapPin,
      title: 'Escolha do País Ideal',
      description: 'Identificamos o destino que melhor se alinha com suas metas profissionais e pessoais.',
    },
    {
      icon: Shield,
      title: 'Estratégia para Aprovação',
      description: 'Desenvolvemos uma estratégia sólida para maximizar suas chances de aprovação do visto.',
    },
    {
      icon: FileCheck,
      title: 'Preparação Documental',
      description: 'Organizamos e revisamos toda documentação necessária com atenção aos detalhes.',
    },
    {
      icon: TrendingUp,
      title: 'Acompanhamento Especializado',
      description: 'Suporte contínuo durante todo o processo até a decisão final do seu visto.',
    },
  ];

  return (
    <section id="services" className="relative py-32 px-6 overflow-hidden bg-[#1A1F26]">
      
      {/* 🎨 FUNDO INTEGRADO COM O HERO */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(179,139,95,0.15),transparent_60%)]"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-[#1A1F26] via-[#0B1F3A] to-[#1A1F26] opacity-90"></div>

      {/* 🌫️ TEXTURA / GRAIN */}
      <div className="absolute inset-0 opacity-[0.04] bg-[url('https://www.transparenttextures.com/patterns/noise.png')]"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* 🟡 TÍTULO COM DESTAQUE BRONZE */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
            Seu caminho para o <span 
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: `linear-gradient(180deg, #e3c59e 0%, #b38b5f 40%, #8a633a 100%)`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                filter: "drop-shadow(0px -1px 0.5px rgba(255,255,255,0.3))"
              }}
            >mundo</span>
          </h2>
          <div className="h-[1px] w-24 bg-gradient-to-r from-transparent via-[#b38b5f]/40 to-transparent mx-auto mb-8"></div>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Transformamos seus sonhos internacionais em realidade com planejamento estratégico
          </p>
        </div>

        {/* 💎 GRID DE SERVIÇOS - CORRIGIDO DE services.map PARA pathSteps.map */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {pathSteps.map((step, index) => {
            const Icon = step.icon; // Agora pegando do array correto
            return (
              <div
                key={index}
                className="group relative p-8 rounded-xl bg-white/[0.03] border border-white/10 hover:border-[#b38b5f]/50 transition-all duration-500 hover:-translate-y-2 backdrop-blur-sm overflow-hidden cursor-default"
              >
                {/* ✨ EFEITO DOURADO EMANANTE NO HOVER ✨ */}
                <div 
                  className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-out pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at center, rgba(179,139,95,0.15) 0%, rgba(179,139,95,0.05) 40%, transparent 80%)`,
                    transform: 'scale(1.5)',
                  }}
                />
                
                {/* ÍCONE EM BRONZE */}
                <div className="relative z-10 bg-[#b38b5f]/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6 border border-[#b38b5f]/20 group-hover:bg-[#b38b5f] group-hover:shadow-[0_0_25px_rgba(179,139,95,0.4)] transition-all duration-500">
                  <Icon className="w-8 h-8 text-[#b38b5f] group-hover:text-white transition-colors duration-500" />
                </div>

                <h3 className="relative z-10 text-xl font-bold text-white mb-4 group-hover:text-[#e3c59e] transition-colors font-serif uppercase tracking-tight">
                  {step.title}
                </h3>

                <p className="relative z-10 text-white/50 leading-relaxed group-hover:text-white/80 transition-colors text-sm">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* 🌍 CARD DE ALCANCE GLOBAL */}
        <div className="relative z-10 bg-white/[0.02] border border-white/10 rounded-3xl p-12 text-center backdrop-blur-md">
          <div className="inline-block bg-[#b38b5f]/20 p-6 rounded-2xl mb-8 border border-[#b38b5f]/30">
            <Globe className="w-16 h-16 text-[#e3c59e]" />
          </div>
          <h3 className="text-3xl font-bold text-white mb-4 font-serif">
            Mais de 40 Países ao Seu Alcance
          </h3>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Nossa expertise global permite que você explore oportunidades em todos os continentes.
            Do planejamento à aprovação, estamos com você em cada etapa da jornada.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-white">
            {['América do Norte', 'Europa', 'Ásia', 'Oceania', 'Oriente Médio', 'América Latina'].map((region, index) => (
              <span
                key={index}
                className="bg-white/5 backdrop-blur-sm px-6 py-2 rounded-full border border-white/10 hover:border-[#b38b5f]/50 hover:bg-[#b38b5f]/10 transition-all cursor-default text-sm font-medium"
              >
                {region}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}