import { useState } from 'react';
import { Send, MessageCircle, CheckCircle } from 'lucide-react';
import { supabase } from '../lib/supabase';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    country: '',
    visa_type: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // 📱 Máscara telefone
  const formatPhone = (value: string) => {
    value = value.replace(/\D/g, '');

    return value
      .replace(/^(\d{2})(\d)/g, '($1) $2')
      .replace(/(\d{5})(\d)/, '$1-$2')
      .slice(0, 15);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase.from('contacts').insert([
        { ...formData, form_type: 'contact' },
      ]);

      if (error) throw error;

      const subject = encodeURIComponent('Solicitação de contato via Site');

      const body = encodeURIComponent(
`Olá!
Um cliente solicitou contato via site.

Nome: ${formData.name}
E-mail: ${formData.email}
Telefone: ${formData.phone}
País desejado: ${formData.country}
Tipo de Visto: ${formData.visa_type}
Objetivo: ${formData.message}`
      );

      const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=atendimentokorusassessoria@gmail.com&su=${subject}&body=${body}`;

      window.open(gmailUrl, '_blank');

      setSubmitted(true);
    } catch (err) {
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleWhatsApp = () => {
    window.open(
      'https://wa.me/5531973424524?text=Olá! Gostaria de informações sobre assessoria de vistos.',
      '_blank'
    );
  };

  return (
    <section id="contact" className="relative py-32 px-6 overflow-hidden bg-background">

      {/* 🎨 FUNDO */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(74, 94, 2, 0.32),transparent_60%)]"></div>
      <div className="absolute inset-0 bg-[linear-gradient(120deg,#1A1F26, #0B1F3A)] opacity-90"></div>

      {/* 🌫️ TEXTURA */}
      <div className="absolute inset-0 opacity-[0.04] bg-[url('https://www.transparenttextures.com/patterns/noise.png')]"></div>

      <div className="relative z-10 max-w-3xl mx-auto">

        {/* 🟡 HEADER */}
        <div className="text-center mb-14">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Fale com a <span className="text-[#b38b5f]">Korus</span>
          </h2>
          <p className="text-white/70">
            Dê o primeiro passo rumo ao seu futuro internacional.
          </p>
        </div>

        {/* 💎 CARD */}
        <div className="group relative p-8 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-sm">

          {/* ✨ EFEITO */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 pointer-events-none"
            style={{
              background: 'radial-gradient(circle at center, rgba(179,139,95,0.15), transparent 70%)',
            }}
          />

          {submitted ? (
            <div className="text-center py-14">
              <CheckCircle className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-2xl text-white font-semibold mb-2">
                E-mail preparado com sucesso!
              </h3>
              <p className="text-white/70">
                Confira o Gmail aberto em uma nova aba e envie a solicitação. 🙌
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">

              {/* INPUTS */}
              <div className="grid md:grid-cols-2 gap-4">

                <input
                  type="text"
                  placeholder="Seu nome"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-400 outline-none transition-all duration-300 focus:border-[#b38b5f] focus:ring-1 focus:ring-[#b38b5f]/40 focus:scale-[1.01]"
                />

                <input
                  type="email"
                  placeholder="Seu email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-400 outline-none transition-all duration-300 focus:border-[#b38b5f] focus:ring-1 focus:ring-[#b38b5f]/40 focus:scale-[1.01]"
                />

                <input
                  type="tel"
                  placeholder="Telefone"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: formatPhone(e.target.value) })
                  }
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-400 outline-none transition-all duration-300 focus:border-[#b38b5f] focus:ring-1 focus:ring-[#b38b5f]/40 focus:scale-[1.01]"
                />

                <input
                  type="text"
                  placeholder="País desejado"
                  value={formData.country}
                  onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-400 outline-none transition-all duration-300 focus:border-[#b38b5f] focus:ring-1 focus:ring-[#b38b5f]/40 focus:scale-[1.01]"
                />
              </div>

              <select
                value={formData.visa_type}
                onChange={(e) => setFormData({ ...formData, visa_type: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white outline-none focus:border-[#b38b5f]"
              >
                <option value="" className="text-black">Tipo de visto</option>
                <option value="Turismo" className="text-black">Turismo</option>
                <option value="Trabalho" className="text-black">Trabalho</option>
                <option value="Estudo" className="text-black">Estudo</option>
                <option value="Negócios" className="text-black">Negócios</option>
                <option value="Intercâmbio" className="text-black">Intercâmbio</option>
                <option value="Imigrante" className="text-black">Imigrante</option>
                <option value="Executivo" className="text-black">Executivo</option>
                <option value="Investidor" className="text-black">Investidor</option>
              </select>

              <textarea
                placeholder="Conte sobre seu objetivo internacional..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={3}
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-400 outline-none transition-all duration-300 focus:border-[#b38b5f] focus:ring-1 focus:ring-[#b38b5f]/40 focus:h-28 resize-none"
              />

              {/* BOTÃO */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-xl font-semibold text-white bg-gradient-to-r from-[#b38b5f] to-[#8a633a] hover:scale-[1.02] transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-[0_0_25px_rgba(179,139,95,0.4)]"
              >
                {isSubmitting ? 'Preparando e-mail...' : <>Começar Agora <Send className="w-4 h-4" /></>}
              </button>

            </form>
          )}
        </div>

        {/* 📲 WHATSAPP */}
        <div className="flex justify-center">
          <button
            onClick={handleWhatsApp}
            className="mt-9 inline-flex relative overflow-hidden bg-green-500 hover:bg-green-600 text-white py-3 px-6 rounded-lg text-sm font-semibold items-center justify-center gap-2 transition-all duration-300 ease-out hover:scale-[1.02] hover:-translate-y-1 shadow-[0_8px_25px_rgba(0,0,0,0.6)] hover:shadow-[0_12px_35px_rgba(0,0,0,0.8)]"
          >
            <MessageCircle className="w-5 h-5" />
            Falar no WhatsApp

            <div
              className="absolute inset-0 opacity-0 hover:opacity-100 transition duration-500 pointer-events-none"
              style={{
                background: 'radial-gradient(circle at center, rgba(34,197,94,0.25), transparent 70%)'
              }}
            />
          </button>
        </div>
      </div>
    </section>
  );
}