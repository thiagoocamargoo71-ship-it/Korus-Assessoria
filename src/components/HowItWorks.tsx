import { Search, ClipboardList, FileText, Send, CheckCircle2 } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
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
    <section id="how-it-works" className="py-20 section-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Como Funciona
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Um processo estruturado e transparente para conquistar seu visto
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-[#3B82F6] via-[#E11D48] to-[#3B82F6] transform -translate-y-1/2"></div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 relative">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="relative animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                  <div className="card-glass p-6 hover:bg-white/12 transition-all duration-300 hover:-translate-y-2 h-full">
                    <div className="flex flex-col items-center text-center">
                      <div className="relative mb-6">
                        <div className="bg-gradient-to-br from-[#3B82F6] to-[#E11D48] w-20 h-20 rounded-full flex items-center justify-center shadow-lg">
                          <Icon className="w-10 h-10 text-white" />
                        </div>
                        <div className="absolute -top-2 -right-2 bg-[#E11D48] w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-md">
                          {step.number}
                        </div>
                      </div>

                      <h3 className="text-xl font-bold text-white mb-3">
                        {step.title}
                      </h3>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-16 card-glass rounded-3xl p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">
            Pronto para Começar Sua Jornada Internacional?
          </h3>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Nossa equipe está preparada para transformar seu sonho de viajar, trabalhar ou estudar no exterior em realidade.
          </p>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-[#E11D48] hover:bg-[#c91c40] text-white px-10 py-4 rounded-xl font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            Iniciar Minha Análise de Perfil
          </button>
        </div>
      </div>
    </section>
  );
}
