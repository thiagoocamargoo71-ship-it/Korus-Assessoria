export default function Countries() {
  const countries = [
    {
      flag: '🇺🇸',
      name: 'Estados Unidos',
      description: 'Líder em turismo, negócios e educação. Oferece oportunidades excepcionais para trabalho qualificado e estudos de classe mundial.',
    },
    {
      flag: '🇨🇦',
      name: 'Canadá',
      description: 'Destino preferido para imigração, trabalho e estudos. Conhecido por sua qualidade de vida e políticas de imigração acolhedoras.',
    },
    {
      flag: '🇬🇧',
      name: 'Reino Unido',
      description: 'Referência em educação de excelência e oportunidades profissionais. Destino histórico com rica cultura e economia robusta.',
    },
    {
      flag: '🇦🇺',
      name: 'Austrália',
      description: 'Excelente qualidade de vida, oportunidades de trabalho e estudo. Conhecido por sua natureza espetacular e multiculturalismo.',
    },
    {
      flag: '🇪🇺',
      name: 'União Europeia',
      description: 'Acesso a múltiplos países com um único visto Schengen. Diversidade cultural, histórica e econômica incomparável.',
    },
    {
      flag: '🇯🇵',
      name: 'Japão',
      description: 'Tecnologia de ponta e cultura milenar. Oportunidades crescentes para profissionais qualificados e estudantes internacionais.',
    },
    {
      flag: '🇦🇪',
      name: 'Emirados Árabes',
      description: 'Hub de negócios do Oriente Médio. Oportunidades excepcionais em diversos setores e qualidade de vida premium.',
    },
  ];

  return (
    <section id="countries" className="relative py-32 px-6 overflow-hidden bg-background">

      {/* 🎨 FUNDO INTEGRADO COM O HERO */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(74, 94, 2, 0.32),transparent_60%)]"></div>
      <div className="absolute inset-0 bg-[linear-gradient(120deg,#1A1F26, #0B1F3A)] opacity-90"></div>
      
      {/* 🌫️ TEXTURA / GRAIN */}
      <div className="absolute inset-0 opacity-[0.04] bg-[url('https://www.transparenttextures.com/patterns/noise.png')]"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Países Atendidos
          </h2>
          <div className="h-[1px] w-24 bg-gradient-to-r from-transparent via-[#b38b5f]/40 to-transparent mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Assessoria especializada para os principais destinos internacionais
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {countries.map((country, index) => (
            <div
              key={index}
              className="group card-glass p-6 hover:bg-white/12 transition-all duration-300 border-white/15 hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {country.flag}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                {country.name}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {country.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}