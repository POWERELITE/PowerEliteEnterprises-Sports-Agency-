
import React, { useState, useRef, useEffect } from 'react';
import { getAdvisorResponse } from '../geminiService';

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'model', text: string, sources?: any[] }[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    const history = messages.map(m => ({
      role: m.role,
      parts: [{ text: m.text }]
    }));

    const response = await getAdvisorResponse(userMsg, history);
    setMessages(prev => [...prev, { role: 'model', text: response.text, sources: response.sources }]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[60]">
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-gold-shiny text-black w-16 h-16 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(212,175,55,0.5)] hover:scale-110 transition-transform group border-4 border-black"
        >
          <span className="text-2xl font-bold font-serif italic">E</span>
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-600 border-2 border-black rounded-full animate-pulse"></div>
        </button>
      )}

      {isOpen && (
        <div className="bg-black border border-gold/40 w-80 sm:w-96 h-[500px] rounded-lg shadow-[0_0_50px_rgba(0,0,0,0.5)] flex flex-col overflow-hidden animate-in slide-in-from-bottom-10 border-gold-shiny/30">
          {/* Header */}
          <div className="bg-navy-800 p-4 border-b border-gold/20 flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gold-shiny rounded-full flex items-center justify-center text-black font-serif font-bold italic shadow-md">E</div>
              <div>
                <h4 className="text-white text-sm font-bold uppercase tracking-widest">Ask Elliott (AI)</h4>
                <div className="flex items-center space-x-1">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full shadow-[0_0_5px_green]"></span>
                  <span className="text-[10px] text-gray-400 font-bold uppercase">Strategic Advisor Active</span>
                </div>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white transition-colors">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Messages */}
          <div className="flex-grow overflow-y-auto p-4 space-y-4 bg-black">
            {messages.length === 0 && (
              <div className="text-center py-10 px-4">
                <p className="text-gray-500 text-xs uppercase tracking-widest italic mb-6">"Recruiting rewards the aggressor."</p>
                <div className="space-y-2">
                    <button 
                    onClick={() => setInput("How did Elliott get into ASU?")}
                    className="w-full text-left text-[10px] text-gold border border-gold/20 px-3 py-2 rounded-sm hover:bg-gold/10 transition-colors"
                    >
                    "How did Elliott get into ASU?"
                    </button>
                    <button 
                    onClick={() => setInput("Tell me about the $89 consulting session.")}
                    className="w-full text-left text-[10px] text-gold border border-gold/20 px-3 py-2 rounded-sm hover:bg-gold/10 transition-colors"
                    >
                    "Tell me about the $89 consulting session."
                    </button>
                </div>
              </div>
            )}
            {messages.map((m, idx) => (
              <div key={idx} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-3 rounded-sm text-sm ${
                  m.role === 'user' 
                  ? 'bg-gold-shiny text-black font-semibold' 
                  : 'bg-navy-800 text-gray-200 border border-gold/20'
                }`}>
                  {m.text}
                  {m.sources && m.sources.length > 0 && (
                    <div className="mt-2 pt-2 border-t border-gold/20 flex flex-wrap gap-2">
                      {m.sources.map((s, si) => (
                        <a key={si} href={s.uri} target="_blank" rel="noopener noreferrer" className="text-[10px] bg-black px-2 py-0.5 rounded text-gold hover:underline">
                          {s.title}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-navy-800 p-3 rounded-sm border border-gold/10">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gold/50 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gold/50 rounded-full animate-bounce [animation-delay:-.3s]"></div>
                    <div className="w-2 h-2 bg-gold/50 rounded-full animate-bounce [animation-delay:-.5s]"></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t border-gold/20 bg-navy-800">
            <div className="flex space-x-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask about ASU, IUL, or Legal Protection..."
                className="flex-grow bg-black border border-gold/20 rounded-sm p-2 text-white text-sm focus:outline-none focus:border-gold transition-colors"
              />
              <button
                onClick={handleSend}
                disabled={isLoading}
                className="bg-gold-shiny text-black p-2 rounded-sm disabled:opacity-50 hover:brightness-110 transition-all shadow-md"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatWidget;
