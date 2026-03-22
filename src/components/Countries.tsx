import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Country {
  id: string;
  name: string;
  flag: string;
  capital: string;
  language: string;
  currency: string;
  population: string;
  climate: string;
  costOfLiving: string;
  safety: string;
  description: string;
}

const countries: Country[] = [
  { id: "us", name: "Estados Unidos", flag: "https://flagcdn.com/us.svg", capital: "Washington, D.C.", language: "Inglês", currency: "Dólar (USD)", population: "331 milhões", climate: "Variado", costOfLiving: "Alto", safety: "Médio", description: "Os Estados Unidos são um dos destinos mais procurados do mundo, com infraestrutura avançada e enorme diversidade cultural e econômica." },
  { id: "ca", name: "Canadá", flag: "https://flagcdn.com/ca.svg", capital: "Ottawa", language: "Inglês / Francês", currency: "Dólar Canadense (CAD)", population: "38 milhões", climate: "Frio", costOfLiving: "Alto", safety: "Alto", description: "O Canadá oferece alta qualidade de vida, segurança e excelente estrutura para quem busca estabilidade e crescimento." },
  { id: "pt", name: "Portugal", flag: "https://flagcdn.com/pt.svg", capital: "Lisboa", language: "Português", currency: "Euro (EUR)", population: "10 milhões", climate: "Mediterrâneo", costOfLiving: "Médio", safety: "Alto", description: "Portugal se destaca pela qualidade de vida, segurança e facilidade de adaptação para brasileiros." },
  { id: "uk", name: "Reino Unido", flag: "https://flagcdn.com/gb.svg", capital: "Londres", language: "Inglês", currency: "Libra (GBP)", population: "67 milhões", climate: "Temperado", costOfLiving: "Alto", safety: "Médio", description: "O Reino Unido é um centro global financeiro e cultural, com inúmeras oportunidades." },
  { id: "fr", name: "França", flag: "https://flagcdn.com/fr.svg", capital: "Paris", language: "Francês", currency: "Euro (EUR)", population: "65 milhões", climate: "Temperado", costOfLiving: "Alto", safety: "Médio", description: "A França é referência mundial em cultura, turismo e qualidade de vida." },
  { id: "it", name: "Itália", flag: "https://flagcdn.com/it.svg", capital: "Roma", language: "Italiano", currency: "Euro (EUR)", population: "59 milhões", climate: "Mediterrâneo", costOfLiving: "Médio", safety: "Médio", description: "A Itália oferece uma experiência cultural única, com história e gastronomia mundialmente conhecidas." },
  { id: "es", name: "Espanha", flag: "https://flagcdn.com/es.svg", capital: "Madri", language: "Espanhol", currency: "Euro (EUR)", population: "47 milhões", climate: "Mediterrâneo", costOfLiving: "Médio", safety: "Alto", description: "A Espanha combina qualidade de vida, clima agradável e custo mais acessível." },
  { id: "au", name: "Austrália", flag: "https://flagcdn.com/au.svg", capital: "Canberra", language: "Inglês", currency: "Dólar Australiano (AUD)", population: "26 milhões", climate: "Variado", costOfLiving: "Alto", safety: "Alto", description: "A Austrália é destaque em qualidade de vida, segurança e oportunidades internacionais." },
];

function InfoCard({ label, value }: { label: string; value: string }) {
  return (
    <motion.div
      whileHover={{ scale: 1.03, y: -2 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="p-4 rounded-xl bg-white/[0.03] border border-white/10 backdrop-blur-md hover:border-[#b38b5f]/40 hover:bg-[#b38b5f]/10 transition"
    >
      <p className="text-xs text-white/40 uppercase tracking-widest">{label}</p>
      <p className="text-base font-semibold text-white">{value}</p>
    </motion.div>
  );
}

export default function CountriesPage() {
  const [selectedCountry, setSelectedCountry] = useState<Country>(countries[0]);
  const [hoveredCountry, setHoveredCountry] = useState<string | null>(null);
  const [search, setSearch] = useState("");

  const filteredCountries = countries.filter(c => c.name.toLowerCase().includes(search.toLowerCase()));

  return (
     <section id="countries" className="relative py-32 px-6 overflow-hidden bg-background">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(74, 94, 2, 0.32),transparent_60%)]"></div>
      <div className="absolute inset-0 bg-[linear-gradient(120deg,#1A1F26, #0B1F3A)] opacity-90"></div>
      <div className="absolute inset-0 opacity-[0.04] bg-[url('https://www.transparenttextures.com/patterns/noise.png')]"></div>

      {/* TÍTULO */}
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
          Países mais procurados do <span
            className="bg-clip-text text-transparent"
            style={{
              backgroundImage: `linear-gradient(180deg, #e3c59e 0%, #b38b5f 40%, #8a633a 100%)`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              filter: "drop-shadow(0px -1px 0.5px rgba(255,255,255,0.3))"
            }}
          >mundo</span>
        </h2>
        <div className="h-[1px] w-24 bg-gradient-to-r from-transparent via-[#b38b5f]/40 to-transparent mx-auto mb-8"></div>
      </div>

      {/* CONTEÚDO PRINCIPAL - PAINÉIS */}
      <div className="relative z-10 flex flex-col md:flex-row max-w-7xl mx-auto gap-10">

        {/* LEFT PANEL */}
        <div className="w-full md:w-2/5 min-w-[200px] bg-white/[0.03] border border-white/10 rounded-2xl backdrop-blur-md p-6">
          <h2 className="text-xl font-bold text-white mb-4 border-b border-white/10 pb-2">Países</h2>
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Buscar país..."
            className="mb-4 p-3 w-full bg-white/[0.02] border border-white/10 rounded-lg text-white placeholder-white/30 focus:outline-none focus:border-[#b38b5f]"
          />

          <div className="space-y-2">
            {filteredCountries.map(country => {
              const isSelected = selectedCountry.id === country.id;
              const isHovered = hoveredCountry === country.id;

              const buttonClasses = `
                w-full p-3 rounded-xl flex items-center gap-3 transition border
                ${isSelected ? "bg-[#b38b5f]/80 border-[#b38b5f]/40 text-white" : isHovered ? "bg-[#b38b5f]/20 border-[#b38b5f]/40 text-white" : "bg-transparent border-white/20 text-white/80"}
              `;

              return (
                <motion.button
                  key={country.id}
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  onClick={() => setSelectedCountry(country)}
                  onMouseEnter={() => setHoveredCountry(country.id)}
                  onMouseLeave={() => setHoveredCountry(null)}
                  className={buttonClasses}
                >
                  <img src={country.flag} className="w-6 h-4 rounded-sm" />
                  {country.name}
                </motion.button>
              );
            })}
          </div>
        </div>

        {/* RIGHT PANEL */}
        <div className="w-full md:w-3/5 min-w-[300px] bg-white/[0.03] border border-white/10 rounded-2xl backdrop-blur-md p-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCountry.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div
                whileHover={{ scale: 1.01, rotate: 0.5 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="flex items-center gap-4 mb-6"
              >
                <img src={selectedCountry.flag} className="w-16 h-12 rounded-md shadow-lg" />
                <h1 className="text-3xl font-bold text-white border-b border-white/10 pb-1">
                  {selectedCountry.name}
                </h1>
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="text-white/70 mb-6 max-w-xl"
              >
                {selectedCountry.description}
              </motion.p>

              <div className="grid grid-cols-2 gap-4">
                <InfoCard label="Capital" value={selectedCountry.capital} />
                <InfoCard label="Idioma" value={selectedCountry.language} />
                <InfoCard label="Moeda" value={selectedCountry.currency} />
                <InfoCard label="População" value={selectedCountry.population} />
                <InfoCard label="Clima" value={selectedCountry.climate} />
                <InfoCard label="Custo de vida" value={selectedCountry.costOfLiving} />
                <InfoCard label="Segurança" value={selectedCountry.safety} />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
