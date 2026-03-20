import { useState } from 'react';
import { Calculator, CheckCircle, XCircle } from 'lucide-react';

export default function Simulator() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [showResult, setShowResult] = useState(false);

  const questions = [
    {
      id: 0,
      question: 'Qual país você deseja visitar?',
      options: ['Estados Unidos', 'Canadá', 'Reino Unido', 'Austrália', 'União Europeia', 'Outro'],
    },
    {
      id: 1,
      question: 'Qual o motivo da sua viagem?',
      options: ['Turismo', 'Trabalho', 'Estudo', 'Negócios', 'Residência'],
    },
    {
      id: 2,
      question: 'Qual sua situação profissional atual?',
      options: ['Empregado CLT', 'Autônomo', 'Empresário', 'Estudante', 'Aposentado'],
    },
    {
      id: 3,
      question: 'Você já viajou para o exterior?',
      options: ['Sim, várias vezes', 'Sim, uma vez', 'Não, será minha primeira vez'],
    },
    {
      id: 4,
      question: 'Você possui documentação básica organizada?',
      options: ['Sim, completamente', 'Parcialmente', 'Não, preciso de ajuda'],
    },
  ];

  const handleAnswer = (answer: string) => {
    setAnswers({ ...answers, [currentStep]: answer });

    if (currentStep < questions.length - 1) {
      setTimeout(() => setCurrentStep(currentStep + 1), 300);
    } else {
      setTimeout(() => setShowResult(true), 300);
    }
  };

  const calculateEligibility = () => {
    let score = 0;

    if (answers[2] === 'Empregado CLT' || answers[2] === 'Empresário') score += 25;
    if (answers[3] === 'Sim, várias vezes') score += 30;
    else if (answers[3] === 'Sim, uma vez') score += 15;
    if (answers[4] === 'Sim, completamente') score += 25;
    else if (answers[4] === 'Parcialmente') score += 15;

    score += 20;

    return Math.min(score, 95);
  };

  const resetSimulator = () => {
    setCurrentStep(0);
    setAnswers({});
    setShowResult(false);
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  if (showResult) {
    const eligibility = calculateEligibility();
    const isGood = eligibility >= 70;

    return (
      <section id="simulator" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl shadow-2xl p-12 border border-gray-200">
            <div className="text-center">
              <div className={`inline-block p-6 rounded-full mb-6 ${isGood ? 'bg-green-100' : 'bg-yellow-100'}`}>
                {isGood ? (
                  <CheckCircle className="w-16 h-16 text-green-600" />
                ) : (
                  <Calculator className="w-16 h-16 text-yellow-600" />
                )}
              </div>

              <h3 className="text-3xl font-bold text-[#0F2A44] mb-4">
                Resultado da Análise de Elegibilidade
              </h3>

              <div className="mb-8">
                <div className="text-6xl font-bold text-[#B11226] mb-2">{eligibility}%</div>
                <p className="text-xl text-gray-600">Compatibilidade com os requisitos básicos</p>
              </div>

              <div className="bg-white rounded-2xl p-8 mb-8 border border-gray-200">
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  {isGood ? (
                    <>
                      Parabéns! Com base nas suas respostas, você possui um perfil favorável para solicitar o visto.
                      Nossa equipe pode ajudá-lo a fortalecer ainda mais sua aplicação e aumentar suas chances de aprovação.
                    </>
                  ) : (
                    <>
                      Sua análise inicial mostra que você pode se beneficiar significativamente de nossa assessoria especializada.
                      Podemos trabalhar juntos para fortalecer seu perfil e aumentar suas chances de aprovação do visto.
                    </>
                  )}
                </p>
                <p className="text-sm text-gray-500">
                  * Este é um resultado indicativo. Uma análise completa do seu perfil será realizada por nossos especialistas.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={scrollToContact}
                  className="bg-[#B11226] hover:bg-[#8f0e1e] text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300"
                >
                  Solicitar Análise Completa
                </button>
                <button
                  onClick={resetSimulator}
                  className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-8 py-4 rounded-xl font-semibold transition-all duration-300"
                >
                  Fazer Nova Simulação
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="simulator" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#0F2A44] mb-4">
            Simulador de Elegibilidade
          </h2>
          <p className="text-xl text-gray-600">
            Descubra suas chances de aprovação em poucos minutos
          </p>
        </div>

        <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl shadow-2xl p-8 sm:p-12 border border-gray-200">
          <div className="mb-8">
            <div className="flex justify-between items-center mb-4">
              <span className="text-sm font-semibold text-gray-600">
                Pergunta {currentStep + 1} de {questions.length}
              </span>
              <span className="text-sm font-semibold text-[#B11226]">
                {Math.round(((currentStep + 1) / questions.length) * 100)}%
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div
                className="bg-gradient-to-r from-[#B11226] to-[#8f0e1e] h-3 rounded-full transition-all duration-500"
                style={{ width: `${((currentStep + 1) / questions.length) * 100}%` }}
              ></div>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-bold text-[#0F2A44] mb-8">
              {questions[currentStep].question}
            </h3>

            <div className="space-y-3">
              {questions[currentStep].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(option)}
                  className="w-full text-left p-5 bg-white border-2 border-gray-200 rounded-xl hover:border-[#B11226] hover:bg-gray-50 transition-all duration-200 font-medium text-gray-700"
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          {currentStep > 0 && (
            <button
              onClick={() => setCurrentStep(currentStep - 1)}
              className="text-gray-600 hover:text-[#B11226] font-medium transition-colors"
            >
              ← Voltar
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
