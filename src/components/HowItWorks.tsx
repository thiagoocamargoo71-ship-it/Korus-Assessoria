import { Search, ClipboardList, FileText, Send, CheckCircle2 } from 'lucide-react';

type Step = {
  number: number;
  icon: React.ElementType;
  title: string;
  description: string;
};

export default function HowItWorks() {
  const steps: Step[] = [
    {
      number: 1,
      icon: Search,
      title: 'Análise do Perfil',
      description: 'Avaliamos detalhadamente seu perfil, objetivos e documentação disponível para entender suas necessidades específicas.',
    },
    {
      number: 2,
      icon: ClipboardList,
      title: 'Planejamento Estratégico',
      description: 'Criamos uma estratégia personalizada para maximizar suas chances de aprovação, considerando todos os requisitos consulares.',
    },
    {
      number: 3,
      icon: FileText,
      title: 'Preparação da Documentação',
      description: 'Organizamos, revisamos e preparamos toda documentação necessária com atenção aos mínimos detalhes.',
    },
    {
      number: 4,
      icon: Send,
      title: 'Aplicação do Processo',
      description: 'Auxiliamos no preenchimento de formulários e agendamento de entrevistas, preparando você para cada etapa.',
    },
    {
      number: 5,
      icon: CheckCircle2,
      title: 'Acompanhamento Final',
      description: 'Monitoramos o processo até a decisão final, oferecendo suporte contínuo e orientação quando necessário.',
    },
  ];

  return (
    <section id="howItWorks" className="relative py-32 px-6 overflow-hidden bg-background">

      {/* 🎨 FUNDO */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(74, 94, 2, 0.32),transparent_60%)]"></div>
      <div className="absolute inset-0 bg-[linear-gradient(120deg,#1A1F26, #0B1F3A)] opacity-90"></div>

      {/* 🌫️ TEXTURA */}
      <div className="absolute inset-0 opacity-[0.04] bg-[url('https://www.transparenttextures.com/patterns/noise.png')]"></div>

      {/* 🟡 TÍTULO */}
      <div className="text-center mb-20 relative z-10">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
          Como{' '}
          <span
            className="bg-clip-text text-transparent"
            style={{
              backgroundImage: 'linear-gradient(180deg, #e3c59e 0%, #b38b5f 40%, #8a633a 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Funciona
          </span>
        </h2>

        <div className="h-[1px] w-24 bg-gradient-to-r from-transparent via-[#b38b5f]/40 to-transparent mx-auto mb-8"></div>

        <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto">
          Um processo estruturado e transparente para conquistar seu visto.
        </p>
      </div>

      {/* 💎 GRID */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
        {steps.map((step, index) => {
          const Icon = step.icon;

          return (
            <div
              key={step.number}
              className="group relative p-8 rounded-xl bg-white/[0.03] border border-white/10 hover:border-[#b38b5f]/50 transition-all duration-500 hover:-translate-y-2 backdrop-blur-sm overflow-hidden"
            >
              {/* ✨ EFEITO */}
              <div
                className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                style={{
                  background:
                    'radial-gradient(circle at center, rgba(179,139,95,0.15) 0%, rgba(179,139,95,0.05) 40%, transparent 80%)',
                  transform: 'scale(1.5)',
                }}
              />

              {/* ÍCONE */}
              <div className="relative z-10 bg-[#b38b5f]/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6 border border-[#b38b5f]/20 group-hover:bg-[#b38b5f] transition-all duration-500">
                <Icon className="w-8 h-8 text-[#b38b5f] group-hover:text-white transition-colors duration-500" />
              </div>

              {/* NÚMERO */}
              <span className="relative z-10 text-sm text-[#b38b5f] font-semibold">
                Etapa {step.number}
              </span>

              {/* TEXTO */}
              <h3 className="relative z-10 text-xl font-semibold text-white mt-2 mb-3">
                {step.title}
              </h3>

              <p className="relative z-10 text-gray-400 text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          );
        })}
      </div>

      {/* 🚀 CTA FINAL */}     
      <div className="text-center mt-40 relative z-10">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
          Pronto para começar a sua{' '}
          <span
            className="bg-clip-text text-transparent"
            style={{
              backgroundImage: 'linear-gradient(180deg, #e3c59e 0%, #b38b5f 40%, #8a633a 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            jornada?
          </span>
        </h2>
         <div className="h-[1px] w-24 bg-gradient-to-r from-transparent via-[#b38b5f]/40 to-transparent mx-auto mb-8"></div>

        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Nossa equipe está preparada para transformar seu sonho de viajar,
          trabalhar ou estudar no exterior em realidade.
        </p>
      </div>
    </section>
  );
}