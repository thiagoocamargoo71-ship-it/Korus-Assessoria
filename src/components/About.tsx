import { Target, Eye, Heart } from 'lucide-react';
export default function AboutKorus() {
  return (
    <section
      id="about"
      className="relative py-28 px-6 bg-background overflow-hidden"
    >
      {/* 🎨 FUNDO COM GRADIENTE PROFUNDO */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(74, 94, 2, 0.32),transparent_60%)]"></div>
      <div className="absolute inset-0 bg-[linear-gradient(120deg,#1A1F26, #0B1F3A)] opacity-90"></div>

      {/* 🌫️ TEXTURA / GRAIN (efeito premium) */}
      <div className="absolute inset-0 opacity-[0.04] bg-[url('https://www.transparenttextures.com/patterns/noise.png')]"></div>

      <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* 🟡 TEXTO */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-serif font-bold leading-tight text-white relative inline-block">
            Sobre a{' '}
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

          <p className="mt-6 text-white/70 leading-relaxed">
            A Korus nasceu com o propósito de simplificar processos internacionais
            e transformar objetivos em conquistas reais. Atuamos com estratégia,
            precisão e um acompanhamento completo para garantir que cada cliente
            tenha a melhor experiência possível.
          </p>

          <p className="mt-4 text-white/70 leading-relaxed">
            Nosso diferencial está na forma como analisamos cada perfil,
            criando soluções personalizadas que aumentam significativamente
            as chances de aprovação.
          </p>

          {/* 🔘 CTA */}
          <button
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
            Falar com um especialista →
            </span>
          </button>
        </div>

        {/* 💎 LADO DIREITO (DIFERENCIAIS / NÚMEROS) */}
        <div className="grid grid-cols-2 gap-6">

          {[
            { number: "+500", label: "Processos realizados" },
            { number: "98%", label: "Taxa de aprovação" },
            { number: "+10", label: "Países atendidos" },
            { number: "100%", label: "Suporte completo" },
          ].map((item, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-white/5 backdrop-blur-xl border border-white/10 text-center"
            >
              <h3 className="text-2xl font-bold text-gold">
                {item.number}
              </h3>
              <p className="mt-2 text-sm text-white/70">
                {item.label}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}