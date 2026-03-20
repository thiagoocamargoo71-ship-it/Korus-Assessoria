import { ArrowRight } from 'lucide-react';

export default function Destinations() {
  const destinations = [
    {
      name: 'Estados Unidos',
      flag: '🇺🇸',
      image: 'https://images.pexels.com/photos/64271/queen-of-liberty-statue-of-liberty-new-york-liberty-statue-64271.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Terra das oportunidades. Realize seus sonhos americanos com nossa assessoria especializada.',
    },
    {
      name: 'Canadá',
      flag: '🇨🇦',
      image: 'https://images.pexels.com/photos/3921045/pexels-photo-3921045.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Qualidade de vida excepcional. Comece sua jornada canadense com segurança e planejamento.',
    },
    {
      name: 'Reino Unido',
      flag: '🇬🇧',
      image: 'https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Tradição e modernidade. Explore oportunidades britânicas com nossa orientação profissional.',
    },
    {
      name: 'Austrália',
      flag: '🇦🇺',
      image: 'https://images.pexels.com/photos/995765/pexels-photo-995765.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Paraíso das oportunidades. Conquiste seu visto australiano com assessoria estratégica.',
    },
    {
      name: 'Alemanha',
      flag: '🇩🇪',
      image: 'https://images.pexels.com/photos/161772/berlin-brandenburg-gate-places-of-interest-istoricheskie-161772.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Coração da Europa. Acesse oportunidades alemãs com nossa consultoria especializada.',
    },
    {
      name: 'Japão',
      flag: '🇯🇵',
      image: 'https://images.pexels.com/photos/402028/pexels-photo-402028.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Inovação e cultura. Descubra o Japão com o suporte certo para seu visto.',
    },
    {
      name: 'Dubai',
      flag: '🇦🇪',
      image: 'https://images.pexels.com/photos/1467299/pexels-photo-1467299.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Luxo e oportunidades. Realize seus planos nos Emirados com nossa assessoria premium.',
    },
  ];

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="destinations" className="py-20 section-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Destinos Mais Procurados do Mundo
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Explore os destinos internacionais mais desejados e comece sua jornada hoje
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                <div className="absolute top-4 right-4 text-5xl">{destination.flag}</div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">{destination.name}</h3>
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  {destination.description}
                </p>
                <button
                  onClick={scrollToContact}
                  className="group/btn inline-flex items-center gap-2 bg-[#E11D48] hover:bg-[#c91c40] text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
                >
                  Saiba mais sobre o visto
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
