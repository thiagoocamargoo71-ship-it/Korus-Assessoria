import { Globe, MapPin, FileCheck, Shield, TrendingUp } from 'lucide-react';

export default function WorldPath() {
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
    <section className="py-20 section-gradient relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 1200 800">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Seu Caminho para o Mundo
          </h2>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Transformamos seus sonhos internacionais em realidade com planejamento estratégico
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {pathSteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="group card-glass p-8 hover:bg-white/12 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="bg-gradient-to-br from-[#3B82F6] to-[#E11D48] w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-gray-300 leading-relaxed">{step.description}</p>
              </div>
            );
          })}
        </div>

        <div className="card-glass rounded-3xl p-12 text-center">
          <div className="inline-block bg-white/20 p-6 rounded-2xl mb-8">
            <Globe className="w-20 h-20 text-white" />
          </div>
          <h3 className="text-3xl font-bold text-white mb-4">
            Mais de 40 Países ao Seu Alcance
          </h3>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Nossa expertise global permite que você explore oportunidades em todos os continentes.
            Do planejamento à aprovação, estamos com você em cada etapa da jornada internacional.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-white">
            {['América do Norte', 'Europa', 'Ásia', 'Oceania', 'Oriente Médio', 'América Latina'].map((region, index) => (
              <span
                key={index}
                className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full border border-white/30 hover:bg-white/30 transition-colors"
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
