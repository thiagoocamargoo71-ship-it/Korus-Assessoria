import { useState } from 'react';
import { 
  Calculator, 
  CheckCircle, 
  AlertTriangle, 
  XCircle, 
  ArrowRight, 
  RefreshCcw, 
  Sparkles 
} from 'lucide-react';

export default function Simulator() {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [showResult, setShowResult] = useState<boolean>(false);

  // 🌍 Configuração de Dificuldade por País (Impacta o Score Final)
  const countryDifficulty: Record<string, number> = {
    'Estados Unidos': 0.8, 
    'Canadá': 0.85,
    'Reino Unido': 0.85,
    'Austrália': 0.9,
    'Portugal': 1.1,      
    'França': 1.0,
    'Itália': 1.0,
    'Espanha': 1.0,
    'Outro': 1.0
  };

  const questions = [
    {
      id: 0,
      question: 'Qual país você deseja visitar?',
      options: ['Estados Unidos', 'Canadá', 'Portugal', 'Reino Unido', 'França', 'Itália', 'Espanha', 'Austrália', 'Outro'],
    },
    {
      id: 1,
      question: 'Motivo da sua viagem?',
      options: ['Turismo', 'Trabalho', 'Estudo', 'Negócios', 'Residência'],
    },
    {
      id: 2,
      question: 'Situação profissional atual?',
      options: ['Empregado CLT', 'Autônomo', 'Empresário', 'Estudante', 'Aposentado'],
    },
    {
      id: 3,
      question: 'Já viajou para o exterior?',
      options: ['Sim, várias vezes', 'Sim, uma vez', 'Não, primeira vez'],
    },
    {
      id: 4,
      question: 'Documentação organizada?',
      options: ['Sim, completa', 'Parcialmente', 'Não, preciso de ajuda'],
    },
  ];

  const handleAnswer = (answer: string) => {
    setAnswers((prev) => ({ ...prev, [currentStep]: answer }));
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setShowResult(true);
    }
  };

  const calculateEligibility = (): number => {
    let baseScore = 0;
    const a = answers as Record<number, string>;
    const selectedCountry = a[0] || 'Outro';
    
    if (a[2] === 'Empregado CLT' || a[2] === 'Empresário') baseScore += 35;
    else if (a[2] === 'Autônomo' || a[2] === 'Aposentado') baseScore += 25;
    
    if (a[3] === 'Sim, várias vezes') baseScore += 30;
    else if (a[3] === 'Sim, uma vez') baseScore += 15;
    
    if (a[4] === 'Sim, completa') baseScore += 25;
    else if (a[4] === 'Parcialmente') baseScore += 10;

    baseScore += 10; 

    const difficultyMultiplier = countryDifficulty[selectedCountry] || 1.0;
    const finalScore = baseScore * difficultyMultiplier;

    return Math.min(Math.max(Math.round(finalScore), 10), 98);
  };

  const resetSimulator = () => {
    setCurrentStep(0);
    setAnswers({});
    setShowResult(false);
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  // 📊 LÓGICA DE FEEDBACK VISUAL (VERMELHO / LARANJA / VERDE)
  const getResultFeedback = (percentage: number) => {
    if (percentage < 40) {
      return {
        status: "Análise Requer Cuidado",
        color: "#EF4444", // Vermelho
        icon: <XCircle className="w-16 h-16" />,
        message: "Sua análise inicial sugere pontos críticos que precisam ser otimizados. Sugerimos focar em construir vínculos antes de tentar vistos de alta complexidade. Nossa assessoria pode traçar uma estratégia para reverter esse cenário."
      };
    } else if (percentage < 70) {
      return {
        status: "Perfil Intermediário",
        color: "#F59E0B", // Laranja
        icon: <AlertTriangle className="w-16 h-16" />,
        message: "Você possui alguns vínculos, mas o processo ainda requer cautela. A forma como você apresenta sua documentação será decisiva. Nossa consultoria pode blindar sua aplicação para aumentar suas chances."
      };
    } else {
      return {
        status: "Alta Compatibilidade",
        color: "#10B981", // Verde
        icon: <CheckCircle className="w-16 h-16" />,
        message: "Excelente perfil inicial! Suas chances são sólidas. Nossa assessoria especializada garante que nenhum detalhe seja esquecido para que sua aprovação seja confirmada."
      };
    }
  };

  const eligibility = showResult ? calculateEligibility() : 0;
  const feedback = getResultFeedback(eligibility);

  return (
    <section id="simulator" className="relative py-32 px-6 overflow-hidden bg-background">
      
      {/* 🎨 FUNDO INTEGRADO COM O HERO */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(74, 94, 2, 0.32),transparent_60%)]"></div>
      <div className="absolute inset-0 bg-[linear-gradient(120deg,#1A1F26, #0B1F3A)] opacity-90"></div>

      <div className="relative z-10 max-w-4xl mx-auto w-full">
        
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
            Simulador de <span 
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: `linear-gradient(180deg, #e3c59e 0%, #b38b5f 40%, #8a633a 100%)`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent"
              }}
            >Elegibilidade</span>
          </h2>
          <div className="h-[1px] w-20 bg-[#b38b5f]/30 mx-auto"></div>
        </div>

        {!showResult ? (
          <div className="bg-white/[0.04] border border-white/10 rounded-2xl backdrop-blur-md p-6 md:p-10 shadow-xl transition-all">
            
            {/* ⬆️ CABEÇALHO COM SPARKLES CORRIGIDO */}
            <div className="mb-6 flex items-center justify-between border-b border-white/5 pb-4">
              <span className="text-[11px] font-bold text-[#b38b5f] uppercase tracking-widest flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 animate-pulse" />
                Simulador Korus Assessoria
              </span>

              <div className="text-sm font-bold text-white/80">
                <span className="text-[#b38b5f]">Etapa {currentStep + 1} de {questions.length}</span> — {Math.round(((currentStep + 1) / questions.length) * 100)}%
              </div>
            </div>

            <div className="w-full bg-white/5 rounded-full h-[1px] mb-8">
              <div
                className="bg-[#b38b5f] h-full rounded-full transition-all duration-500 ease-out shadow-[0_0_5px_#b38b5f]"
                style={{ width: `${((currentStep + 1) / questions.length) * 100}%` }}
              ></div>
            </div>

            <div className="min-h-[280px]">
              <h3 className="text-2xl md:text-3xl font-serif font-bold text-white mb-6 leading-snug">
                {questions[currentStep].question}
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {questions[currentStep].options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswer(option)}
                    className="w-full text-left p-4 bg-white/[0.02] border border-white/5 rounded-lg hover:border-[#b38b5f]/40 hover:bg-[#b38b5f]/10 transition-all duration-200 text-white/90 text-sm flex justify-between items-center group"
                  >
                    <span>{option}</span>
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transform translate-x-[-2px] group-hover:translate-x-0 transition-all text-[#e3c59e]" />
                  </button>
                ))}
              </div>
            </div>

            {currentStep > 0 && (
              <button
                onClick={() => setCurrentStep(currentStep - 1)}
                className="text-white/20 hover:text-[#b38b5f] font-bold transition-colors text-[9px] uppercase tracking-widest mt-6"
              >
                ← Voltar
              </button>
            )}
          </div>
        ) : (
          /* 🏁 RESULTADO COM CORES DINÂMICAS E BRILHO EXTERNO */
          <div className="bg-white/[0.04] border border-white/10 rounded-xl backdrop-blur-md p-10 text-center animate-fade-in border-t-white/10 shadow-3xl overflow-hidden relative">
            
            {/* Brilho interno sutil */}
            <div className="absolute inset-0 opacity-10 pointer-events-none" style={{
              background: `radial-gradient(circle at center, ${feedback.color}80 0%, transparent 70%)`
            }}></div>

            {/* ÍCONE COM BRILHO EXTERNO DINÂMICO */}
            <div className="inline-flex p-5 rounded-full mb-8 relative z-10" style={{
              backgroundColor: `${feedback.color}15`,
              
            }}>
              <div style={{ color: feedback.color }}>
                {feedback.icon}
              </div>
            </div>

            <h3 className="text-2xl font-serif font-bold text-white mb-2 uppercase tracking-tight relative z-10">Análise Final</h3>
            <p className="text-[11px] font-medium uppercase tracking-[0.2em] mb-4 relative z-10" style={{ color: feedback.color }}>
              {feedback.status}
            </p>

            <div className="mb-6 relative z-10">
              <div className="text-7xl font-bold tracking-tighter" style={{ color: feedback.color, textShadow: `0 0 20px ${feedback.color}40` }}>
                {eligibility}%
              </div>
              <p className="text-[10px] text-white/30 tracking-widest uppercase font-bold mt-1">Compatibilidade Consular Estimada</p>
            </div>

            <div className="bg-white/[0.02] rounded-2xl p-6 md:p-8 mb-10 border border-white/5 relative z-10">
              <p className="text-base text-white/80 leading-relaxed italic font-light max-w-lg mx-auto">
                "{feedback.message}"
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8 relative z-10">
              <button
              onClick={scrollToContact}
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
    Solicitar Consultoria completa →
  </span>
</button>
              <button onClick={resetSimulator} className="px-7 py-3 rounded-lg border border-primaryLight text-white/80 hover:bg-primaryLight/10 transition">
            Reiniciar Análise
          </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}