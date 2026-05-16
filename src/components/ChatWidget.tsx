import { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';

interface Message {
  sender: 'user' | 'ai';
  text: string;
}

export default function ChatWidget() {
    console.log('ChatWidget carregou');
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: 'ai',
      text: 'Olá! Sou a assistente virtual da Korus Assessoria. Posso te ajudar com dúvidas sobre vistos, cidadania, documentos e atendimento com consultor. Sobre o que você gostaria de falar?',
    },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  async function sendMessage(customMessage?: string) {
    const messageToSend = customMessage || input;

    if (!messageToSend.trim()) return;

    const userMessage: Message = {
      sender: 'user',
      text: messageToSend,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: messageToSend }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Erro ao conversar com a IA');
      }

      const aiMessage: Message = {
        sender: 'ai',
        text: data.answer,
      };

      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          sender: 'ai',
          text: 'Desculpe, tive uma instabilidade agora. Você pode tentar novamente ou falar diretamente com um consultor pelo WhatsApp.',
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  function openWhatsApp() {
    const phone = '5531973424524';

    const text = encodeURIComponent(
      'Olá! Vim pelo site da Korus Assessoria e gostaria de falar com um consultor.'
    );

    window.open(`https://wa.me/${phone}?text=${text}`, '_blank');
  }

  return (
    <>
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-zinc-900 text-white shadow-2xl transition hover:scale-105 hover:bg-zinc-800"
          aria-label="Abrir chat"
        >
          <MessageCircle size={30} />
        </button>
      )}

      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 flex h-[600px] w-[380px] max-w-[calc(100vw-32px)] flex-col overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-2xl">
          <div className="flex items-center justify-between bg-zinc-900 px-5 py-4 text-white">
            <div>
              <h3 className="text-base font-semibold">Korus Assessoria</h3>
              <p className="text-xs text-zinc-300">Assistente virtual online</p>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="rounded-full p-1 transition hover:bg-white/10"
              aria-label="Fechar chat"
            >
              <X size={22} />
            </button>
          </div>

          <div className="flex-1 space-y-3 overflow-y-auto bg-zinc-50 px-4 py-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${
                  message.sender === 'user' ? 'justify-end' : 'justify-start'
                }`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                    message.sender === 'user'
                      ? 'bg-zinc-900 text-white'
                      : 'bg-white text-zinc-800 shadow-sm'
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}

            {loading && (
              <div className="flex justify-start">
                <div className="rounded-2xl bg-white px-4 py-3 text-sm text-zinc-500 shadow-sm">
                  Digitando...
                </div>
              </div>
            )}
          </div>

          <div className="border-t border-zinc-200 bg-white p-3">
            <div className="mb-3 flex flex-wrap gap-2">
              <button
                onClick={() => sendMessage('Quero saber sobre vistos')}
                className="rounded-full border border-zinc-300 px-3 py-1 text-xs text-zinc-700 transition hover:bg-zinc-100"
              >
                Vistos
              </button>

              <button
                onClick={() => sendMessage('Quero saber sobre cidadania')}
                className="rounded-full border border-zinc-300 px-3 py-1 text-xs text-zinc-700 transition hover:bg-zinc-100"
              >
                Cidadania
              </button>

              <button
                onClick={() => sendMessage('Quero fazer uma pré-análise')}
                className="rounded-full border border-zinc-300 px-3 py-1 text-xs text-zinc-700 transition hover:bg-zinc-100"
              >
                Pré-análise
              </button>

              <button
                onClick={openWhatsApp}
                className="rounded-full border border-green-600 px-3 py-1 text-xs text-green-700 transition hover:bg-green-50"
              >
                WhatsApp
              </button>
            </div>

            <div className="flex items-center gap-2">
              <input
                value={input}
                onChange={(event) => setInput(event.target.value)}
                onKeyDown={(event) => {
                  if (event.key === 'Enter') {
                    sendMessage();
                  }
                }}
                placeholder="Digite sua mensagem..."
                className="flex-1 rounded-full border border-zinc-300 px-4 py-3 text-sm outline-none focus:border-zinc-900"
              />

              <button
                onClick={() => sendMessage()}
                disabled={loading}
                className="flex h-11 w-11 items-center justify-center rounded-full bg-zinc-900 text-white transition hover:bg-zinc-800 disabled:cursor-not-allowed disabled:opacity-50"
                aria-label="Enviar mensagem"
              >
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}