import { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';

interface Message {
  sender: 'user' | 'ai';
  text: string;
}

export default function ChatWidget() {
  console.log('✅ ChatWidget carregou com sucesso');

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

    setMessages((prev) => [
      ...prev,
      {
        sender: 'user',
        text: messageToSend,
      },
    ]);

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

      setMessages((prev) => [
        ...prev,
        {
          sender: 'ai',
          text: data.answer,
        },
      ]);
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

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        style={{
          position: 'fixed',
          right: '24px',
          bottom: '24px',
          zIndex: 999999999,
          width: '80px',
          height: '80px',
          borderRadius: '9999px',
          backgroundColor: 'red',
          color: 'white',
          border: '4px solid white',
          boxShadow: '0 20px 40px rgba(0,0,0,0.35)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
        }}
        aria-label="Abrir chat"
      >
        <MessageCircle size={38} />
      </button>
    );
  }

  return (
    <div
      style={{
        position: 'fixed',
        right: '24px',
        bottom: '24px',
        zIndex: 999999999,
        width: '380px',
        maxWidth: 'calc(100vw - 32px)',
        height: '600px',
        maxHeight: 'calc(100vh - 48px)',
        backgroundColor: 'white',
        borderRadius: '24px',
        boxShadow: '0 25px 60px rgba(0,0,0,0.35)',
        border: '1px solid #e5e7eb',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <div
        style={{
          backgroundColor: '#111827',
          color: 'white',
          padding: '16px 20px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <div>
          <h3 style={{ fontSize: '16px', fontWeight: 700, margin: 0 }}>
            Korus Assessoria
          </h3>
          <p style={{ fontSize: '12px', color: '#d1d5db', margin: 0 }}>
            Assistente virtual online
          </p>
        </div>

        <button
          onClick={() => setIsOpen(false)}
          style={{
            background: 'transparent',
            border: 'none',
            color: 'white',
            cursor: 'pointer',
          }}
          aria-label="Fechar chat"
        >
          <X size={22} />
        </button>
      </div>

      <div
        style={{
          flex: 1,
          overflowY: 'auto',
          backgroundColor: '#f9fafb',
          padding: '16px',
        }}
      >
        {messages.map((message, index) => (
          <div
            key={index}
            style={{
              display: 'flex',
              justifyContent:
                message.sender === 'user' ? 'flex-end' : 'flex-start',
              marginBottom: '12px',
            }}
          >
            <div
              style={{
                maxWidth: '85%',
                borderRadius: '18px',
                padding: '12px 16px',
                fontSize: '14px',
                lineHeight: 1.5,
                backgroundColor:
                  message.sender === 'user' ? '#111827' : 'white',
                color: message.sender === 'user' ? 'white' : '#1f2937',
                boxShadow:
                  message.sender === 'ai'
                    ? '0 2px 8px rgba(0,0,0,0.08)'
                    : 'none',
              }}
            >
              {message.text}
            </div>
          </div>
        ))}

        {loading && (
          <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
            <div
              style={{
                borderRadius: '18px',
                padding: '12px 16px',
                backgroundColor: 'white',
                color: '#6b7280',
                fontSize: '14px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
              }}
            >
              Digitando...
            </div>
          </div>
        )}
      </div>

      <div
        style={{
          borderTop: '1px solid #e5e7eb',
          backgroundColor: 'white',
          padding: '12px',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '8px',
            marginBottom: '12px',
          }}
        >
          <button onClick={() => sendMessage('Quero saber sobre vistos')} style={optionStyle}>
            Vistos
          </button>

          <button onClick={() => sendMessage('Quero saber sobre cidadania')} style={optionStyle}>
            Cidadania
          </button>

          <button onClick={() => sendMessage('Quero fazer uma pré-análise')} style={optionStyle}>
            Pré-análise
          </button>

          <button
            onClick={openWhatsApp}
            style={{
              ...optionStyle,
              borderColor: '#16a34a',
              color: '#15803d',
            }}
          >
            WhatsApp
          </button>
        </div>

        <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
          <input
            value={input}
            onChange={(event) => setInput(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === 'Enter') {
                sendMessage();
              }
            }}
            placeholder="Digite sua mensagem..."
            style={{
              flex: 1,
              borderRadius: '999px',
              border: '1px solid #d1d5db',
              padding: '12px 16px',
              fontSize: '14px',
              outline: 'none',
              color: '#111827',
              backgroundColor: 'white',
            }}
          />

          <button
            onClick={() => sendMessage()}
            disabled={loading}
            style={{
              width: '44px',
              height: '44px',
              borderRadius: '999px',
              backgroundColor: '#111827',
              color: 'white',
              border: 'none',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: loading ? 'not-allowed' : 'pointer',
              opacity: loading ? 0.5 : 1,
            }}
            aria-label="Enviar mensagem"
          >
            <Send size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}

const optionStyle: React.CSSProperties = {
  borderRadius: '999px',
  border: '1px solid #d1d5db',
  backgroundColor: 'white',
  color: '#374151',
  padding: '6px 12px',
  fontSize: '12px',
  cursor: 'pointer',
};