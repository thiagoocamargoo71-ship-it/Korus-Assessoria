import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'Quanto tempo leva para obter um visto?',
      answer: 'O tempo varia conforme o tipo de visto e o país de destino. Vistos de turismo podem levar de 2 a 4 semanas, enquanto vistos de trabalho ou estudo podem levar de 2 a 6 meses. Nossa assessoria ajuda a agilizar o processo ao garantir que toda documentação esteja correta desde o início.',
    },
    {
      question: 'A assessoria aumenta as chances de aprovação?',
      answer: 'Sim! Nossa assessoria especializada aumenta significativamente as chances de aprovação ao garantir que sua documentação esteja completa, correta e alinhada com os requisitos específicos de cada consulado. Também preparamos você para entrevistas consulares e identificamos possíveis pontos fracos em sua aplicação.',
    },
    {
      question: 'Quais documentos são necessários?',
      answer: 'Os documentos variam conforme o tipo de visto e país de destino, mas geralmente incluem: passaporte válido, comprovantes financeiros, carta de intenção, comprovantes de vínculos com o Brasil, fotos, formulários preenchidos e documentos específicos do tipo de visto (carta de admissão para estudos, contrato de trabalho, etc.). Nossa equipe fornece uma lista completa personalizada para seu caso.',
    },
    {
      question: 'Preciso fazer entrevista consular?',
      answer: 'Depende do país e tipo de visto. Estados Unidos, Canadá e Reino Unido geralmente exigem entrevista para a maioria dos tipos de visto. Alguns países europeus dispensam a entrevista para vistos de turismo. Nossa assessoria inclui preparação completa para entrevistas consulares quando necessário.',
    },
    {
      question: 'Posso solicitar mais de um tipo de visto?',
      answer: 'Sim, você pode solicitar diferentes tipos de visto, mas não simultaneamente para o mesmo país. É importante escolher o tipo de visto que melhor se adequa ao propósito da sua viagem. Nossa equipe ajuda a identificar o visto mais apropriado para seu caso específico.',
    },
    {
      question: 'O que acontece se meu visto for negado?',
      answer: 'Em caso de negação, analisamos os motivos e desenvolvemos uma nova estratégia para uma segunda aplicação. É importante entender que uma negação não é permanente. Nossa experiência nos permite identificar pontos de melhoria e fortalecer sua próxima aplicação.',
    },
    {
      question: 'Vocês garantem a aprovação do visto?',
      answer: 'Nenhuma assessoria pode garantir 100% de aprovação, pois a decisão final é do oficial consular. No entanto, nossa metodologia comprovada, análise detalhada e preparação estratégica maximizam significativamente suas chances de sucesso.',
    },
    {
      question: 'Qual é o investimento na assessoria?',
      answer: 'O investimento varia conforme o tipo de visto, complexidade do caso e serviços necessários. Oferecemos uma análise inicial gratuita para avaliar seu perfil e fornecer um orçamento personalizado. Entre em contato para mais informações.',
    },
  ];

  return (
    <section id="faq" className="relative py-32 px-6 overflow-hidden bg-background">
      
      {/* 🎨 FUNDO INTEGRADO COM O HERO */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(74, 94, 2, 0.32),transparent_60%)]"></div>
      <div className="absolute inset-0 bg-[linear-gradient(120deg,#1A1F26, #0B1F3A)] opacity-90"></div>
      
      {/* 🌫️ TEXTURA / GRAIN */}
      <div className="absolute inset-0 opacity-[0.04] bg-[url('https://www.transparenttextures.com/patterns/noise.png')]"></div>

      <div className="relative z-10 max-w-5xl mx-auto">
        
        {/* 🟡 TÍTULO COM DESTAQUE BRONZE */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-white mb-6">
            Perguntas <span 
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: `linear-gradient(180deg, #e3c59e 0%, #b38b5f 40%, #8a633a 100%)`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                filter: "drop-shadow(0px -1px 0.5px rgba(255,255,255,0.3))"
              }}
            >Frequentes</span>
          </h2>
          <div className="h-[1px] w-24 bg-gradient-to-r from-transparent via-[#b38b5f]/40 to-transparent mx-auto mb-8"></div>
          <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto font-sans leading-relaxed">
            Soluções de alta performance e consultoria estratégica para sua mobilidade global.
          </p>
        </div>
          
                {/* ✨ EFEITO DOURADO EMANANTE NO HOVER ✨ */}
                <div 
                  className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-out pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at center, rgba(179,139,95,0.15) 0%, rgba(179,139,95,0.05) 40%, transparent 80%)`,
                    transform: 'scale(1.5)',
                  }}
                />

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="card-glass rounded2xl overflow-hidden hover:bg-white/15 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-2 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
              >
                <span className="text-lg font-semibold text-white pr-8">
                  {faq.question}
                </span>
                <div className="flex-shrink-0">
                  {openIndex === index ? (
                    <Minus className="w-6 h-6 text-[#E11D48]" />
                  ) : (
                    <Plus className="w-6 h-6 text-[#E11D48]" />
                  )}
                </div>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-8 pb-6 border-t border-white/10">
                  <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
        
        </div>
      </div>
    </section>
  );
}
