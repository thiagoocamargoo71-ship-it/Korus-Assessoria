import type { VercelRequest, VercelResponse } from '@vercel/node';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método não permitido' });
  }

  try {
    const { message } = req.body;

    if (!message || typeof message !== 'string') {
      return res.status(400).json({ error: 'Mensagem inválida' });
    }

    const response = await openai.responses.create({
      model: 'gpt-4.1-mini',
      input: [
        {
          role: 'system',
          content: `
Você é a assistente virtual da Korus Assessoria.

Seu papel:
- Atender visitantes do site.
- Responder dúvidas sobre vistos, cidadania, planejamento internacional e assessoria.
- Ser clara, educada, objetiva e humana.
- Não parecer robótica.
- Fazer perguntas quando precisar entender melhor o caso.
- Sempre tentar direcionar o cliente para uma próxima ação.

Regras:
- Não invente informações jurídicas.
- Quando a dúvida for específica demais, recomende falar com um consultor.
- Responda em português do Brasil.
- Use respostas curtas e úteis.
- Sempre que fizer sentido, ofereça opções como:
  1. Saber documentos necessários
  2. Fazer uma pré-análise
  3. Falar com consultor no WhatsApp
          `,
        },
        {
          role: 'user',
          content: message,
        },
      ],
    });

    const answer = response.output_text;

    return res.status(200).json({
      answer,
      options: [
        'Saber documentos necessários',
        'Fazer pré-análise',
        'Falar no WhatsApp',
      ],
    });
  } catch (error) {
    console.error('Erro na IA:', error);

    return res.status(500).json({
      error: 'Erro ao gerar resposta da IA',
    });
  }
}