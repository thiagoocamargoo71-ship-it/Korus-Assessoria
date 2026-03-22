import { Plane, Briefcase, GraduationCap, Building2, Home, RefreshCw } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Plane,
      title: 'Visto de Turismo',
      description: 'Viaje sem preocupações. Cuidamos de toda a burocracia, do preenchimento do DS-160 à estratégia para sua entrevista consular.',
    },
    {
      icon: Briefcase,
      title: 'Visto de Trabalho',
      description: 'Sua carreira global começa aqui. Suporte estratégico para profissionais que buscam expansão profissional e legalidade internacional.',
    },
    {
      icon: GraduationCap,
      title: 'Visto de Estudo',
      description: 'Garanta sua vaga no exterior. Orientação completa para matrículas e conformidade com requisitos educacionais de alta exigência.',
    },
    {
      icon: Building2,
      title: 'Visto de Negócios',
      description: 'Maximize suas oportunidades comerciais. Consultoria ágil para executivos e empresários em missões internacionais.',
    },
    {
      icon: Home,
      title: 'Visto de Residência',
      description: 'O caminho seguro para seu novo lar. Análise detalhada de elegibilidade para planos de residência permanente ou temporária.',
    },
    {
      icon: RefreshCw,
      title: 'Renovação de Vistos',
      description: 'Mantenha sua liberdade de viajar. Processo simplificado e seguro para renovar suas permissões sem riscos de interrupção.',
    },
  ];

  return (
    <section id="services" className="relative py-32 px-6 overflow-hidden bg-background">
      
      {/* 🎨 FUNDO INTEGRADO COM O HERO */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(74, 94, 2, 0.32),transparent_60%)]"></div>
      <div className="absolute inset-0 bg-[linear-gradient(120deg,#1A1F26, #0B1F3A)] opacity-90"></div>
      
      {/* 🌫️ TEXTURA / GRAIN */}
      <div className="absolute inset-0 opacity-[0.04] bg-[url('https://www.transparenttextures.com/patterns/noise.png')]"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* 🟡 TÍTULO COM DESTAQUE BRONZE */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-white mb-6">
            Nossos <span 
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: `linear-gradient(180deg, #e3c59e 0%, #b38b5f 40%, #8a633a 100%)`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                filter: "drop-shadow(0px -1px 0.5px rgba(255,255,255,0.3))"
              }}
            >Serviços</span>
          </h2>
          <div className="h-[1px] w-24 bg-gradient-to-r from-transparent via-[#b38b5f]/40 to-transparent mx-auto mb-8"></div>
          <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto font-sans leading-relaxed">
            Soluções de alta performance e consultoria estratégica para sua mobilidade global.
          </p>
        </div>

        {/* 💎 GRID DE SERVIÇOS COM EFEITO EMANANTE */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
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
                  {service.title}
                </h3>

                <p className="relative z-10 text-white/50 leading-relaxed group-hover:text-white/80 transition-colors text-sm">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}