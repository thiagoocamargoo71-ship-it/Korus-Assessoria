import { useState } from 'react';
import { Mail, Phone, Send, MapPin, MessageCircle } from 'lucide-react';
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
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const { error } = await supabase.from('contacts').insert([
        {
          ...formData,
          form_type: 'contact',
        },
      ]);

      if (error) throw error;

      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        country: '',
        visa_type: '',
        message: '',
      });
    } catch (error) {
      console.error('Error submitting contact:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/5511999999999?text=Olá! Gostaria de informações sobre assessoria de vistos.', '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-[#0F2A44] to-[#1a4068]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Seu Futuro Internacional Começa com o Primeiro Passo
          </h2>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Entre em contato conosco e inicie sua jornada para conquistar seu visto internacional
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 sm:p-12">
              <h3 className="text-2xl font-bold text-white mb-8">
                Solicitar Análise de Perfil
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-white mb-2">
                      Nome Completo *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-white/10 border-2 border-white/20 rounded-xl focus:border-[#E11D48] focus:outline-none transition-colors text-white placeholder-gray-400"
                      placeholder="Seu nome"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-white mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-white/10 border-2 border-white/20 rounded-xl focus:border-[#E11D48] focus:outline-none transition-colors text-white placeholder-gray-400"
                      placeholder="seu@email.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-white mb-2">
                      Telefone
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 bg-white/10 border-2 border-white/20 rounded-xl focus:border-[#E11D48] focus:outline-none transition-colors text-white placeholder-gray-400"
                      placeholder="(11) 99999-9999"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-white mb-2">
                      País Desejado
                    </label>
                    <input
                      type="text"
                      value={formData.country}
                      onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                      className="w-full px-4 py-3 bg-white/10 border-2 border-white/20 rounded-xl focus:border-[#E11D48] focus:outline-none transition-colors text-white placeholder-gray-400"
                      placeholder="Ex: Estados Unidos"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-white mb-2">
                    Tipo de Visto
                  </label>
                  <select
                    value={formData.visa_type}
                    onChange={(e) => setFormData({ ...formData, visa_type: e.target.value })}
                    className="w-full px-4 py-3 bg-white/10 border-2 border-white/20 rounded-xl focus:border-[#E11D48] focus:outline-none transition-colors text-white"
                  >
                    <option value="">Selecione o tipo de visto</option>
                    <option value="turismo">Turismo</option>
                    <option value="trabalho">Trabalho</option>
                    <option value="estudo">Estudo</option>
                    <option value="negocios">Negócios</option>
                    <option value="residencia">Residência</option>
                    <option value="outro">Outro</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-white mb-2">
                    Mensagem
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={5}
                    className="w-full px-4 py-3 bg-white/10 border-2 border-white/20 rounded-xl focus:border-[#E11D48] focus:outline-none transition-colors resize-none text-white placeholder-gray-400"
                    placeholder="Conte-nos sobre seus planos internacionais..."
                  />
                </div>

                {submitStatus === 'success' && (
                  <div className="bg-green-500/20 border-2 border-green-400 rounded-xl p-4 text-white">
                    Mensagem enviada com sucesso! Entraremos em contato em breve.
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="bg-red-500/20 border-2 border-red-400 rounded-xl p-4 text-white">
                    Ocorreu um erro ao enviar sua mensagem. Por favor, tente novamente.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#E11D48] hover:bg-[#c91c40] text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    'Enviando...'
                  ) : (
                    <>
                      Enviar Solicitação
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-white mb-6">Informações de Contato</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="bg-[#E11D48] p-3 rounded-lg">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-300">Email</p>
                    <p className="text-white font-semibold">contato@korusassessoria.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-[#E11D48] p-3 rounded-lg">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-300">Telefone</p>
                    <p className="text-white font-semibold">+55 (11) 99999-9999</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-[#E11D48] p-3 rounded-lg">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-300">Localização</p>
                    <p className="text-white font-semibold">São Paulo, Brasil</p>
                  </div>
                </div>
              </div>
            </div>

            <button
              onClick={handleWhatsApp}
              className="w-full bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-6 h-6" />
              Falar pelo WhatsApp
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
