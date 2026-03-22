import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
type Country = {
  name: string;
  image: string;
  visa: string;
};

export default function PopularCountries() {
  const [selected, setSelected] = useState<Country | null>(null);

  const countries: Country[] = [
    {
      name: "Estados Unidos",
      image:
        "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?q=80&w=1600",
      visa:
        "É crucial provar vínculos com o Brasil, ter renda compatível e objetivo claro de viagem. O processo visa garantir segurança, com foco em Turismo (B2) ou Negócios (B1). ",
    },
    {
      name: "Canadá",
      image:
        "https://images.unsplash.com/photo-1497373637916-e47a55e22d0a?q=80&w=873",
      visa:
        "Para entrar no Canadá, é preciso dos vistos Temporary Resident Visa - TRV, o visto de visitante (turismo/estudo até 6 meses), ou eTA (Autorização Eletrônica de Viagem). O eTA serve para quem já teve visto canadense ou tem visto americano válido e viaja de avião..",
    },
    {
      name: "Portugal",
      image:
        "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?q=80&w=870",
      visa:
        "Para quem desejam morar, estudar ou trabalhar em Portugal devem solicitar vistos de longa duração. Turismo de até 90 dias segue sem necessidade de visto. Os principais vistos incluem residência (D1, D4) e procura de trabalho.",
    },
    {
      name: "Reino Unido",
      image:
        "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?q=80&w=1600",
      visa:
        "Para quem deseja viajar ao Reino Unido por até 6 meses para turismo, estudos ou negócios não precisam de visto tradicional, mas é obrigatório solicitar o ETA (Electronic Travel Authorization) antes do embarque. A solicitação tem validade de dois anos, permitindo múltiplas entradas.",
    },
    {
      name: "França",
      image:
        "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=1600",
      visa:
        "Não é preciso visto para turismo ou negócios na França em estadias de até 90 dias (dentro de um período de 180 dias). É necessário passaporte com validade de 6 meses, seguro viagem, comprovante de hospedagem e passagem de volta.",
    },
    {
      name: "Itália",
      image:
        "https://images.unsplash.com/photo-1529260830199-42c24126f198?q=80&w=1600",
      visa:
        "Não é preciso visto para turismo na Itália por até 90 dias, mas devem apresentar passaporte válido, seguro viagem e comprovar meios financeiros. Para estadias superiores a 90 dias, estudo ou trabalho, é obrigatório solicitar visto.",
    },
    {
      name: "Espanha",
      image:
        "https://images.unsplash.com/photo-1543783207-ec64e4d95325?q=80&w=870",
      visa:
        "Não é necessário visto para turismo na Espanha (até 90 dias), mas exigem passaporte válido, seguro saúde, comprovante de hospedagem e meios financeiros. Para estadias superiores a 90 dias, trabalho, estudos ou nomadismo digital, é necessário solicitar visto consular no Brasil e, posteriormente, a carteira de estrangeiro (TIE) na Espanha.",
    },
    {
      name: "Austrália",
      image:
        "https://images.unsplash.com/photo-1624138784614-87fd1b6528f8?q=80&w=1033",
      visa:
        "O visto para a Austrália é obrigatório para brasileiros e solicitado online, com o Visto de Visitante (Subclasse 600) sendo o principal para turismo/negócios de até 3, 6 ou 12 meses. O processo exige preenchimento minucioso, comprovação financeira, passaporte e carta de intenção.",
    },
  ];

  return (
    <section id="destinations" className="relative py-32 px-6 overflow-hidden bg-background">
      {/* 🟡 TÍTULO COM DESTAQUE BRONZE */}
      <div className="text-center mb-20">
        <h2 className="text-5xl md:text-6xl font-serif font-bold text-white mb-6">
          Tipos de <span
            className="bg-clip-text text-transparent"
            style={{
              backgroundImage: `linear-gradient(180deg, #e3c59e 0%, #b38b5f 40%, #8a633a 100%)`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              filter: "drop-shadow(0px -1px 0.5px rgba(255,255,255,0.3))"
            }}
          >Vistos</span>
        </h2>
        <div className="h-[1px] w-24 bg-gradient-to-r from-transparent via-[#b38b5f]/40 to-transparent mx-auto mb-8"></div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {countries.map((country) => (
            <motion.div
              key={country.name}
              whileHover={{ scale: 1.05 }}
              className="relative rounded-2xl overflow-hidden group cursor-pointer"
            >

              {/* IMAGEM */}
              <img
                src={country.image}
                alt={country.name}
                className="w-full h-[260px] object-cover"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>

              {/* CONTEÚDO */}
              <div className="absolute bottom-0 p-5 w-full">
                <h3 className="text-xl font-bold mb-3">
                  {country.name}
                </h3>

                <button
                  onClick={() => setSelected(country)}
                  className="relative px-2 py-1 rounded-lg text-white font-medium transition transform hover:scale-105 overflow-hidden border border-white/20"
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
                    Saiba mais sobre o visto
                  </span>
                </button>
              </div>

            </motion.div>
          ))}

        </div>

        {/* MODAL */}
        <AnimatePresence>
          {selected && (
            <motion.div
              className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-50 p-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelected(null)}
            >

              <motion.div
                className="bg-[#1A1F26] p-8 rounded-2xl max-w-md w-full border border-white/10"
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                onClick={(e) => e.stopPropagation()}
              >

                <h3 className="text-2xl font-serif text-gold mb-4">
                  {selected.name}
                </h3>

                <p className="text-white/70 leading-relaxed">
                  {selected.visa}
                </p>

                <button
                  onClick={() => setSelected(null)}
                  className="mt-6 px-5 py-2 rounded-lg bg-primary text-white hover:bg-primary-light transition"
                >
                  Fechar
                </button>

              </motion.div>

            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}