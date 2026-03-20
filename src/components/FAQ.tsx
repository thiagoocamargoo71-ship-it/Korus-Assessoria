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
    <section id="faq" className="py-20 section-gradient">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-xl text-gray-300">
            Respostas para as dúvidas mais comuns sobre vistos internacionais
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="card-glass rounded-2xl overflow-hidden hover:bg-white/12 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
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
          <p className="text-gray-300 mb-6">Não encontrou a resposta que procurava?</p>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-[#E11D48] hover:bg-[#c91c40] text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300"
          >
            Entre em Contato Conosco
          </button>
        </div>
      </div>
    </section>
  );
}
