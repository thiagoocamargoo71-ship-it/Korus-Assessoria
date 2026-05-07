import { useState } from 'react';
import { Star, Send, CheckCircle } from 'lucide-react';
import { supabase } from '../lib/supabase';

type FormData = {
  name: string;
  country: string;
  rating: number;
  comment: string;
};

export default function Reviews() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    country: '',
    rating: 5,
    comment: '',
  });

  const [hoverRating, setHoverRating] = useState(0);
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const validate = () => {
    const newErrors: Partial<FormData> = {};

    if (!formData.name.trim()) newErrors.name = 'Digite seu nome';
    if (!formData.country.trim()) newErrors.country = 'Informe o país';
    if (!formData.comment.trim()) newErrors.comment = 'Escreva seu comentário';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError('');

    if (!validate()) return;

    setIsSubmitting(true);

    try {
      const payload = {
        name: formData.name.trim(),
        country: formData.country.trim(),
        rating: formData.rating,
        comment: formData.comment.trim(),
      };

      const { error } = await supabase
        .from('reviews')
        .insert([payload]);

      if (error) {
        console.error('Erro ao salvar avaliação:', error);
        setSubmitError('Não foi possível salvar sua avaliação. Tente novamente.');
        return;
      }

      setSubmitted(true);
      setFormData({
        name: '',
        country: '',
        rating: 5,
        comment: '',
      });
      setErrors({});
    } catch (err) {
      console.error('Erro inesperado ao salvar avaliação:', err);
      setSubmitError('Erro inesperado ao enviar avaliação.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="Reviews" className="py-4 px-6 bg-background">
      <div className="max-w-4xl mx-auto">

        <div className="text-center mb-10">
          <h2 className="text-6xl font-bold text-white mb-5">
            Compartilhe sua{' '}
            <span className="text-[#b38b5f]">Experiência</span>
          </h2>
          <p className="text-white/80">
            Seu feedback ajuda outras pessoas a confiarem no nosso trabalho.
          </p>
        </div>

        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-xl">

          {submitted ? (
            <div className="text-center py-10">
              <CheckCircle className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-xl text-white font-semibold mb-2">
                Feedback enviado!
              </h3>
              <p className="text-white/70">
                Obrigado por compartilhar sua experiência 🙌
              </p>

              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="mt-6 px-6 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-[#b38b5f] to-[#8a633a] hover:opacity-90 transition"
              >
                Enviar outra avaliação
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">

              <div className="grid md:grid-cols-2 gap-4">

                <div>
                  <input
                    type="text"
                    placeholder="Seu nome"
                    value={formData.name}
                    onChange={(e) => {
                      setFormData({ ...formData, name: e.target.value });
                      setErrors({ ...errors, name: '' });
                    }}
                    className={`w-full px-4 py-3 rounded-xl bg-white/5 border ${
                      errors.name ? 'border-red-500' : 'border-white/10'
                    } text-white placeholder-gray-400 focus:border-[#b38b5f] outline-none transition`}
                  />
                  {errors.name && (
                    <p className="text-red-400 text-sm mt-1">{errors.name}</p>
                  )}
                </div>

                <div>
                  <input
                    type="text"
                    placeholder="País do visto"
                    value={formData.country}
                    onChange={(e) => {
                      setFormData({ ...formData, country: e.target.value });
                      setErrors({ ...errors, country: '' });
                    }}
                    className={`w-full px-4 py-3 rounded-xl bg-white/5 border ${
                      errors.country ? 'border-red-500' : 'border-white/10'
                    } text-white placeholder-gray-400 focus:border-[#b38b5f] outline-none transition`}
                  />
                  {errors.country && (
                    <p className="text-red-400 text-sm mt-1">{errors.country}</p>
                  )}
                </div>
              </div>

              <div>
                <p className="text-white mb-2 text-sm">Avaliação</p>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onMouseEnter={() => setHoverRating(star)}
                      onMouseLeave={() => setHoverRating(0)}
                      onClick={() =>
                        setFormData({ ...formData, rating: star })
                      }
                      className="transition-transform hover:scale-125"
                    >
                      <Star
                        className={`w-7 h-7 transition ${
                          star <= (hoverRating || formData.rating)
                            ? 'text-yellow-400 fill-yellow-400'
                            : 'text-gray-500'
                        }`}
                      />
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <textarea
                  placeholder="Conte sua experiência..."
                  value={formData.comment}
                  onChange={(e) => {
                    setFormData({ ...formData, comment: e.target.value });
                    setErrors({ ...errors, comment: '' });
                  }}
                  rows={3}
                  className={`w-full px-4 py-3 rounded-xl bg-white/5 border ${
                    errors.comment ? 'border-red-500' : 'border-white/10'
                  } text-white placeholder-gray-400 focus:border-[#b38b5f] outline-none transition resize-none focus:h-32`}
                />
                {errors.comment && (
                  <p className="text-red-400 text-sm mt-1">
                    {errors.comment}
                  </p>
                )}
              </div>

              {submitError && (
                <div className="rounded-xl border border-red-500/40 bg-red-500/10 px-4 py-3">
                  <p className="text-red-300 text-sm">{submitError}</p>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-[#b38b5f] to-[#8a633a] hover:opacity-90 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {isSubmitting ? (
                  'Enviando...'
                ) : (
                  <>
                    Enviar avaliação
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>

            </form>
          )}
        </div>
      </div>
    </section>
  );
}