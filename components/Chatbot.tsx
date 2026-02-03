
import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, Send, X, ShieldCheck } from 'lucide-react';
import { GoogleGenAI } from '@google/genai';

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'bot'; text: string }[]>([
    { role: 'bot', text: "Greetings. I am Leo, the digital guide for Lumina Primary. How may I assist your inquiry today?" }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || loading) return;

    const userText = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userText }]);
    setLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: userText,
        config: {
          systemInstruction: "You are Leo, the distinguished digital concierge and mascot for Lumina Primary School in Cape Town. You are professional, polite, and articulate. You emphasize classical education values and South African heritage. Use sophisticated but accessible language. Occasional South African phrases like 'Greetings' or 'Best regards' are appropriate.",
        }
      });

      setMessages(prev => [...prev, { role: 'bot', text: response.text || "I apologize, I am unable to process that request at this moment." }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'bot', text: "I seem to be experiencing a technical interruption. Please try again later." }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-[60]">
      {!isOpen ? (
        <button 
          onClick={() => setIsOpen(true)}
          className="w-14 h-14 bg-navy rounded-none shadow-2xl flex items-center justify-center text-white hover:bg-[#B8860B] transition-colors"
        >
          <MessageSquare size={24} />
        </button>
      ) : (
        <div className="w-[350px] bg-white rounded-none shadow-2xl flex flex-col overflow-hidden border border-gray-200 animate-fade-in">
          <div className="bg-navy p-5 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-[#B8860B] flex items-center justify-center text-white">
                <ShieldCheck size={18} />
              </div>
              <div>
                <h4 className="font-serif font-bold text-white text-xs tracking-wider uppercase">Lumina Assistant</h4>
                <p className="text-[10px] text-gray-400">Leo the Lion</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white hover:text-[#B8860B]">
              <X size={20} />
            </button>
          </div>

          <div ref={scrollRef} className="flex-1 overflow-y-auto p-5 space-y-4 h-[350px] bg-[#fafafa]">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] px-4 py-3 text-xs leading-relaxed ${
                  msg.role === 'user' 
                  ? 'bg-navy text-white' 
                  : 'bg-white text-gray-700 shadow-sm border border-gray-100'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-white border border-gray-100 px-4 py-2 flex gap-1">
                  <div className="w-1 h-1 bg-gray-400 rounded-full animate-bounce"></div>
                  <div className="w-1 h-1 bg-gray-400 rounded-full animate-bounce delay-75"></div>
                  <div className="w-1 h-1 bg-gray-400 rounded-full animate-bounce delay-150"></div>
                </div>
              </div>
            )}
          </div>

          <div className="p-4 bg-white border-t border-gray-100 flex gap-2">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="How can I assist you?"
              className="flex-1 bg-gray-50 border-none px-4 py-2 text-xs focus:ring-1 focus:ring-[#B8860B] outline-none"
            />
            <button 
              onClick={handleSend}
              className="bg-navy text-white px-3 py-2 hover:bg-[#B8860B] transition-colors"
            >
              <Send size={16} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
