import { useState } from 'react';
import { Star, Send } from 'lucide-react';
import { supabase } from '../lib/supabase';

export default function Reviews() {
  const [formData, setFormData] = useState({
    name: '',
    country: '',
    rating: 5,
    comment: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const { error } = await supabase.from('reviews').insert([
        {
          name: formData.name,
          country: formData.country,
          rating: formData.rating,
          comment: formData.comment,
        },
      ]);

      if (error) throw error;

      setSubmitStatus('success');
      setFormData({ name: '', country: '', rating: 5, comment: '' });
    } catch (error) {
      console.error('Error submitting review:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="reviews" className="py-20 section-gradient">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Compartilhe Sua Experiência
          </h2>
          <p className="text-xl text-gray-300">
            Sua opinião é muito importante para nós e ajuda outros a conhecerem nosso trabalho
          </p>
        </div>

        <div className="card-glass rounded-3xl shadow-2xl p-8 sm:p-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-white mb-2">
                  Seu Nome *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-white/20 rounded-xl bg-white/5 text-white placeholder-gray-400 focus:border-[#E11D48] focus:outline-none transition-colors"
                  placeholder="Digite seu nome"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-white mb-2">
                  País do Visto *
                </label>
                <input
                  type="text"
                  required
                  value={formData.country}
                  onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-white/20 rounded-xl bg-white/5 text-white placeholder-gray-400 focus:border-[#E11D48] focus:outline-none transition-colors"
                  placeholder="Ex: Estados Unidos"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-white mb-3">
                Avaliação *
              </label>
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setFormData({ ...formData, rating: star })}
                    className="transition-transform hover:scale-110"
                  >
                    <Star
                      className={`w-10 h-10 ${
                        star <= formData.rating
                          ? 'fill-yellow-400 text-yellow-400'
                          : 'text-gray-500'
                      }`}
                    />
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-white mb-2">
                Seu Comentário *
              </label>
              <textarea
                required
                value={formData.comment}
                onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
                rows={5}
                className="w-full px-4 py-3 border-2 border-white/20 rounded-xl bg-white/5 text-white placeholder-gray-400 focus:border-[#E11D48] focus:outline-none transition-colors resize-none"
                placeholder="Conte-nos sobre sua experiência com nossos serviços..."
              />
            </div>

            {submitStatus === 'success' && (
              <div className="bg-green-500/20 border-2 border-green-400 rounded-xl p-4 text-green-300">
                Obrigado pelo seu feedback! Sua avaliação será publicada após aprovação.
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="bg-red-500/20 border-2 border-red-400 rounded-xl p-4 text-red-300">
                Ocorreu um erro ao enviar sua avaliação. Por favor, tente novamente.
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
                  Enviar Avaliação
                  <Send className="w-5 h-5" />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
